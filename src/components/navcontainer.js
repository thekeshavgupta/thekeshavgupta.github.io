import { useState, useRef, useEffect } from 'react';
import './navcontainer.css';
import { FaBars, FaTimes, FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

function NavContainer({ activeTab, setActiveTab }) {
    const tabs = ['Overview', 'Education', 'Work Experience', 'Research Work', 'Projects'];
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setIsOpen(false);
    };

    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            // Check if click is outside the menu AND outside the hamburger icon
            if (isOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                !event.target.closest('.hamburger-icon')) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="main-container">
            {/* Desktop View */}
            <div className="desktop-nav">
                {tabs.map(tab => (
                    <div
                        key={tab}
                        className={`nav-item ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        <span>{tab}</span>
                    </div>
                ))}
            </div>

            {/* Mobile View */}
            <div className="mobile-nav">
                <div className="mobile-header">
                    <div className="header-content">
                        {/* Social Icons in Header */}
                        <div className="mobile-header-icons">
                            <a href="mailto:guptakeshav2509@gmail.com">
                                <FaEnvelope size={25} style={{ color: "#e63946" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/kgupta786" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={25} style={{ color: "#0077b5" }} />
                            </a>
                            <a href="https://github.com/thekeshavgupta" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={25} style={{ color: "#ffffff" }} />
                            </a>
                        </div>

                        {/* <span className="mobile-title">Menu</span> */}
                        <div className="hamburger-icon" onClick={toggleMenu}>
                            {isOpen ? <FaTimes size={24} color="#F0F6FC" /> : <FaBars size={24} color="#F0F6FC" />}
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div className="mobile-menu" ref={menuRef}>
                        {tabs.map(tab => (
                            <div
                                key={tab}
                                className={`mobile-nav-item ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => handleTabClick(tab)}
                            >
                                {tab}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default NavContainer;
