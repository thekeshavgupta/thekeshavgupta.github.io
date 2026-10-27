import { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import './Navbar.css';
import { FaGithub, FaLinkedin, FaSun, FaMoon, FaBars, FaTimes, FaEnvelope } from 'react-icons/fa';

const NAV_ITEMS = [
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Research', href: '#research' },
    { label: 'Projects', href: '#projects' },
];

function Navbar({ theme, toggleTheme }) {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [mobileOpen, setMobileOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const ids = ['hero', ...NAV_ITEMS.map(item => item.href.slice(1))];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-25% 0px -40% 0px', threshold: 0 }
        );

        ids.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const handleNavClick = useCallback((e, href) => {
        e.preventDefault();
        setMobileOpen(false);
        const target = document.querySelector(href);
        if (target) {
            const navOffset = 85;
            const top = target.getBoundingClientRect().top + window.scrollY - navOffset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }, []);

    return (
        <header className="app-nav-wrapper">
            <nav className={`app-nav ${scrolled ? 'scrolled' : ''}`}>
                {/* Brand Identity — Clean & Bold */}
                <a
                    href="#hero"
                    className="nav-brand"
                    onClick={(e) => handleNavClick(e, '#hero')}
                    aria-label="Keshav Gupta Home"
                >
                    <span className="nav-brand-text">
                        Keshav Gupta<span className="nav-brand-dot">.</span>
                    </span>
                </a>

                {/* Floating Centered Pill Navigation Links */}
                <div className="nav-menu-links">
                    {NAV_ITEMS.map(item => {
                        const isActive = activeSection === item.href.slice(1);
                        return (
                            <a
                                key={item.label}
                                href={item.href}
                                className={`nav-item-link ${isActive ? 'active' : ''}`}
                                onClick={(e) => handleNavClick(e, item.href)}
                            >
                                {item.label}
                            </a>
                        );
                    })}
                </div>

                {/* Right Action Controls: Modern Theme Switcher, Socials & CTA */}
                <div className="nav-actions">
                    {/* Modern Tactile Theme Switcher */}
                    <button
                        type="button"
                        className="theme-toggle-btn"
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    >
                        {theme === 'dark' ? (
                            <FaSun size={15} className="theme-toggle-icon theme-sun" />
                        ) : (
                            <FaMoon size={14} className="theme-toggle-icon theme-moon" />
                        )}
                    </button>

                    <a
                        href="https://www.linkedin.com/in/kgupta786"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                        className="nav-icon-btn nav-btn-linkedin"
                        title="LinkedIn Profile"
                    >
                        <FaLinkedin size={15} />
                    </a>

                    <a
                        href="https://github.com/thekeshavgupta"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                        className="nav-icon-btn nav-btn-github"
                        title="GitHub Profile"
                    >
                        <FaGithub size={15} />
                    </a>

                    <a href="mailto:guptakeshav2509@gmail.com" className="btn-primary nav-cta-btn">
                        <span>Get in Touch</span>
                    </a>

                    {/* Mobile Hamburger Toggle */}
                    <button
                        type="button"
                        className="nav-mobile-toggle"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {mobileOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation Sheet Portal */}
            {createPortal(
                <>
                    <div
                        className={`mobile-nav-backdrop ${mobileOpen ? 'open' : ''}`}
                        onClick={() => setMobileOpen(false)}
                        aria-hidden="true"
                    />
                    <div className={`mobile-nav-sheet ${mobileOpen ? 'open' : ''}`} ref={menuRef}>
                        <div className="mobile-sheet-head">
                            <a href="#hero" className="nav-brand" onClick={(e) => handleNavClick(e, '#hero')}>
                                <span className="nav-brand-text">
                                    Keshav Gupta<span className="nav-brand-dot">.</span>
                                </span>
                            </a>
                            <button
                                type="button"
                                className="nav-icon-btn"
                                onClick={() => setMobileOpen(false)}
                                aria-label="Close menu"
                            >
                                <FaTimes size={16} />
                            </button>
                        </div>

                        <div className="mobile-sheet-links">
                            {NAV_ITEMS.map(item => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className={`mobile-nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>

                        <div className="mobile-sheet-footer">
                            <a href="mailto:guptakeshav2509@gmail.com" className="btn-primary" style={{ width: '100%' }}>
                                <FaEnvelope size={14} />
                                <span>Get in Touch</span>
                            </a>
                            <div className="mobile-socials">
                                <a href="https://www.linkedin.com/in/kgupta786" target="_blank" rel="noopener noreferrer" className="nav-icon-btn" aria-label="LinkedIn">
                                    <FaLinkedin size={16} />
                                </a>
                                <a href="https://github.com/thekeshavgupta" target="_blank" rel="noopener noreferrer" className="nav-icon-btn" aria-label="GitHub">
                                    <FaGithub size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                </>,
                document.body
            )}
        </header>
    );
}

export default Navbar;
