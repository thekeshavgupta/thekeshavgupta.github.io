import './footer.css';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="google-footer">
            <div className="section-container google-footer-container">
                <div className="google-footer-left">
                    <div className="google-dots-logo">
                        <span className="dot dot-blue" />
                        <span className="dot dot-red" />
                        <span className="dot dot-yellow" />
                        <span className="dot dot-green" />
                    </div>
                    <span className="footer-copyright-text">
                        © {new Date().getFullYear()} Made with❤️ by Keshav Gupta
                    </span>
                </div>

                <div className="google-footer-right">
                    <a href="mailto:guptakeshav2509@gmail.com" aria-label="Email" className="footer-icon-link" title="Email">
                        <FaEnvelope size={16} />
                    </a>
                    <a href="https://www.linkedin.com/in/kgupta786" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-icon-link" title="LinkedIn">
                        <FaLinkedin size={16} />
                    </a>
                    <a href="https://github.com/thekeshavgupta" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer-icon-link" title="GitHub">
                        <FaGithub size={16} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
