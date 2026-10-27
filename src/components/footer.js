import { useState, useEffect } from 'react';
import './Footer.css';
import { FaGithub, FaEnvelope, FaLinkedin, FaPhoneAlt, FaArrowUp, FaRegCopyright } from 'react-icons/fa';

/**
 * Authentic 8-bit retro arcade pixelated red heart
 * Mathematically proportioned 10x8 pixel grid with 3D shadow and specular highlight
 */
function PixelHeart() {
    return (
        <span className="pixel-heart-wrap" title="Crafted with passion" aria-label="pixelated animated red heart">
            <svg
                width="18"
                height="15"
                viewBox="0 0 10 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ shapeRendering: 'crispEdges' }}
            >
                {/* Row 0: 3px left lobe, 3px right lobe */}
                <rect x="1" y="0" width="3" height="1" fill="#ea4335" />
                <rect x="6" y="0" width="3" height="1" fill="#ea4335" />

                {/* Rows 1-3: Full 10px heart width */}
                <rect x="0" y="1" width="10" height="1" fill="#ea4335" />
                <rect x="0" y="2" width="10" height="1" fill="#ea4335" />
                <rect x="0" y="3" width="10" height="1" fill="#ea4335" />

                {/* Rows 4-7: Symmetrical tapers to the tip */}
                <rect x="1" y="4" width="8" height="1" fill="#ea4335" />
                <rect x="2" y="5" width="6" height="1" fill="#ea4335" />
                <rect x="3" y="6" width="4" height="1" fill="#ea4335" />
                <rect x="4" y="7" width="2" height="1" fill="#ea4335" />

                {/* 3D Depth Shadow Pixels along bottom-right edge */}
                <rect x="9" y="1" width="1" height="3" fill="#b31412" />
                <rect x="8" y="4" width="1" height="1" fill="#b31412" />
                <rect x="7" y="5" width="1" height="1" fill="#b31412" />
                <rect x="6" y="6" width="1" height="1" fill="#b31412" />
                <rect x="5" y="7" width="1" height="1" fill="#b31412" />

                {/* Specular White Shine Pixels on top-left lobe for authentic 8-bit depth */}
                <rect x="1" y="1" width="2" height="1" fill="#ffffff" fillOpacity="0.9" />
                <rect x="1" y="2" width="1" height="1" fill="#ffffff" fillOpacity="0.75" />
            </svg>
        </span>
    );
}

function Footer() {
    const [showTopFab, setShowTopFab] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowTopFab(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <footer className="footer-wrap">
                <div className="section-wrapper" style={{ padding: '0 1.75rem' }}>
                    <div className="footer-3col-grid">
                        {/* Left Column: All rights reserved © 2026. with crisp vector copyright icon */}
                        <div className="footer-left-col">
                            <span className="footer-rights-text">
                                All rights reserved{' '}
                                <span className="copyright-glyph" aria-hidden="true">
                                    <FaRegCopyright size={12} />
                                </span>{' '}
                                {new Date().getFullYear()}.
                            </span>
                        </div>

                        {/* Center Column: Clean inline text with Pixel Heart */}
                        <div className="footer-center-col">
                            <span>Engineered with</span>
                            <PixelHeart />
                            <span>by <span className="footer-author-name">Keshav Gupta</span></span>
                        </div>

                        {/* Right Column: Contact Icons */}
                        <div className="footer-right-col">
                            <a
                                href="mailto:guptakeshav2509@gmail.com"
                                className="footer-social-btn"
                                aria-label="Email Keshav Gupta"
                                title="Email Keshav Gupta"
                            >
                                <FaEnvelope size={14} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/kgupta786"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-btn"
                                aria-label="LinkedIn profile"
                                title="LinkedIn Profile"
                            >
                                <FaLinkedin size={14} />
                            </a>
                            <a
                                href="https://github.com/thekeshavgupta"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-btn"
                                aria-label="GitHub profile"
                                title="GitHub Profile"
                            >
                                <FaGithub size={14} />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Floating Back to Top Button */}
            <button
                type="button"
                className={`floating-top-fab ${showTopFab ? 'visible' : ''}`}
                onClick={scrollToTop}
                aria-label="Scroll back to top"
                title="Scroll back to top"
            >
                <FaArrowUp size={15} />
            </button>
        </>
    );
}

export default Footer;
