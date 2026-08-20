import { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import './navcontainer.css';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa';

const NAV_LINKS = [
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Research', href: '#research' },
    { label: 'Projects', href: '#projects' },
];

function NavContainer({ theme, toggleTheme }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const menuRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sectionIds = NAV_LINKS.map(link => link.href.slice(1));
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
        );

        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        function handleClickOutside(event) {
            if (isOpen && menuRef.current && !menuRef.current.contains(event.target) &&
                !event.target.closest('.nav-hamburger')) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const handleNavClick = useCallback((e, href) => {
        e.preventDefault();
        setIsOpen(false);
        const target = document.querySelector(href);
        if (target) {
            const navHeight = 72;
            const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }, []);

    return (
        <>
            <nav className={`google-navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="google-navbar-inner">
                    {/* Brand / Logo */}
                    <a href="#hero" className="google-brand" onClick={(e) => handleNavClick(e, '#hero')}>
                        <span className="brand-name">
                            KG
                        </span>
                    </a>

                    {/* Material Pill Navigation */}
                    <div className="google-nav-links">
                        {NAV_LINKS.map(link => {
                            const isActive = activeSection === link.href.slice(1);
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className={`google-nav-item ${isActive ? 'active' : ''}`}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                >
                                    {link.label}
                                    {isActive && <span className="active-pill-bar" />}
                                </a>
                            );
                        })}
                    </div>

                    {/* Right Actions & Theme Toggle */}
                    <div className="google-nav-actions">
                        {/* Theme Toggle Button */}
                        {/* We will see this feature of dark mode in future */}
                        {/* <button
                            type="button"
                            className="google-icon-btn theme-toggle-btn"
                            onClick={toggleTheme}
                            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                        >
                            {theme === 'dark' ? <FaSun size={15} className="sun-icon" /> : <FaMoon size={15} className="moon-icon" />}
                        </button> */}

                        <a href="https://www.linkedin.com/in/kgupta786" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="google-icon-btn" title="LinkedIn">
                            <FaLinkedin size={15} />
                        </a>
                        <a href="https://github.com/thekeshavgupta" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="google-icon-btn" title="GitHub">
                            <FaGithub size={15} />
                        </a>
                        <a href="mailto:guptakeshav2509@gmail.com" className="btn-google-primary nav-cta">
                            Get in touch
                        </a>

                        {/* Mobile Menu Button */}
                        <button className="nav-hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Portal: Mobile Overlay + Drawer rendered at document.body to escape navbar stacking context */}
            {createPortal(
                <>
                    <div className={`google-mobile-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)} />
                    <div className={`google-mobile-drawer ${isOpen ? 'open' : ''}`} ref={menuRef}>
                        <div className="drawer-header">
                            <span className="brand-name">Keshav Gupta</span>
                            {/* Dark mode toggle — disabled for now */}
                            {/* <button
                                type="button"
                                className="google-icon-btn theme-toggle-btn"
                                onClick={toggleTheme}
                                aria-label="Toggle Theme"
                            >
                                {theme === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} />}
                            </button> */}
                            <button
                                type="button"
                                className="google-icon-btn drawer-close-btn"
                                onClick={() => setIsOpen(false)}
                                aria-label="Close menu"
                            >
                                <FaTimes size={18} />
                            </button>
                        </div>
                        <div className="drawer-links">
                            {NAV_LINKS.map(link => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className={`drawer-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                        <div className="drawer-footer">
                            <a href="mailto:guptakeshav2509@gmail.com" className="btn-google-primary drawer-cta">
                                Get in touch
                            </a>
                            <div className="drawer-socials">
                                <a href="https://www.linkedin.com/in/kgupta786" target="_blank" rel="noopener noreferrer" className="google-icon-btn">
                                    <FaLinkedin size={16} />
                                </a>
                                <a href="https://github.com/thekeshavgupta" target="_blank" rel="noopener noreferrer" className="google-icon-btn">
                                    <FaGithub size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                </>,
                document.body
            )}
        </>
    );
}

export default NavContainer;
