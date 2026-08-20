import './profilecontainer.css';
import { useState, useEffect } from 'react';
import { FaGithub, FaEnvelope, FaLinkedin, FaArrowDown, FaAws, FaMicrosoft } from 'react-icons/fa';

function ProfileContainer() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 60);
        return () => clearTimeout(timer);
    }, []);

    const scrollToExperience = () => {
        const expSection = document.getElementById('experience');
        if (expSection) {
            const navHeight = 72;
            const top = expSection.getBoundingClientRect().top + window.scrollY - navHeight;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="google-hero-section">
            {/* Subtle Atmospheric Gradients */}
            <div className="google-bg-glow glow-blue" />
            <div className="google-bg-glow glow-purple" />

            <div className={`google-hero-container ${isVisible ? 'hero-visible' : ''}`}>

                {/* Left Side: Developer Info */}
                <div className="google-hero-left">
                    <h1 className="google-hero-headline">
                        Building intelligent, high scale <span className="highlight-gradient">distributed</span> systems.
                    </h1>

                    <p className="google-hero-desc">
                        A Software Engineer with 6 years of experience building scalable microservices, distributed systems, and intelligent search platforms. Experienced in AWS and Azure cloud ecosystems, with a strong track record of delivering highly available, production-scale applications from design to deployment.
                    </p>

                    {/* Google Material Chips for Experience Highlights */}
                    <div className="google-hero-chips">
                        <span className="google-chip chip-blue">
                            <FaMicrosoft size={13} /> Ex-Microsoft
                        </span>
                        <span className="google-chip chip-yellow">
                            <FaAws size={14} /> Ex-Amazon
                        </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="google-hero-actions">
                        <a href="mailto:guptakeshav2509@gmail.com" className="btn-google-primary">
                            <FaEnvelope size={14} />
                            <span>Email</span>
                        </a>
                        <a href="https://github.com/thekeshavgupta" target="_blank" rel="noopener noreferrer" className="btn-google-outline">
                            <FaGithub size={15} />
                            <span>GitHub Profile</span>
                        </a>
                        <a href="https://www.linkedin.com/in/kgupta786" target="_blank" rel="noopener noreferrer" className="btn-google-outline">
                            <FaLinkedin size={15} />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>

                {/* Right Side: Glowing Avatar Profile Card Visual */}
                <div className="google-hero-right">
                    <div className="google-profile-card">
                        <div className="profile-image-container">
                            <div className="avatar-ambient-glow" />
                            <img
                                className="profile-avatar"
                                src="/images/img2.jpeg"
                                alt="Keshav Gupta"
                                loading="eager"
                            />
                        </div>

                        <div className="profile-card-content">
                            <div className="profile-name-row">
                                <h2 className="profile-card-name">Keshav Gupta</h2>
                                <span className="profile-role-badge">Software Engineer</span>
                            </div>
                            <p className="profile-card-location">Ex-Microsoft | Ex-Amazon</p>

                            <div className="google-stats-grid">
                                <div className="stat-card">
                                    <span className="stat-number stat-blue">6</span>
                                    <span className="stat-label">Years Experience</span>
                                </div>
                                <div className="stat-card">
                                    <span className="stat-number stat-green">4</span>
                                    <span className="stat-label">Research Publications</span>
                                </div>
                                <div className="stat-card">
                                    <span className="stat-number stat-yellow">3.63</span>
                                    <span className="stat-label">UT Austin GPA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Scroll Down */}
            <button className="google-scroll-btn" onClick={scrollToExperience} aria-label="Explore work experience">
                <span className="scroll-label">Explore Experience</span>
                <FaArrowDown size={12} className="scroll-arrow-anim" />
            </button>
        </section>
    );
}

export default ProfileContainer;