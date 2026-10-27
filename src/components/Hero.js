import './Hero.css';
import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaMicrosoft,
    FaAws,
    FaArrowRight,
    FaMapMarkerAlt,
    FaGraduationCap
} from 'react-icons/fa';

function Hero() {
    return (
        <section id="hero" className="hero-section">
            {/* Atmospheric Ambient Glows */}
            <div className="hero-ambient-glow hero-glow-1" aria-hidden="true" />
            <div className="hero-ambient-glow hero-glow-2" aria-hidden="true" />

            <div className="hero-container">

                {/* Left Column: Developer Info & Headline */}
                <div className="hero-left">
                    <div className="hero-status-pill">
                        <span className="status-beacon-dot" />
                        <span>Available for Senior SWE & AI Roles</span>
                    </div>

                    <h1 className="hero-headline">
                        Architecting <span className="google-gradient-text">intelligent</span>, high-scale <span className="google-gradient-text">distributed</span> systems.
                    </h1>

                    <p className="hero-bio">
                        Software Engineer with <strong>6 years of experience</strong> engineering scalable cloud microservices, high-throughput distributed pipelines, and AI search platforms at <strong>Microsoft</strong> and <strong>Amazon</strong>. Master's in Artificial Intelligence from <strong>UT Austin</strong>.
                    </p>

                    {/* Highlight Badges */}
                    <div className="hero-chips-wrap">
                        <span className="interactive-chip chip-blue">
                            <FaMicrosoft size={13} /> Ex-Microsoft (Azure & Bing)
                        </span>
                        <span className="interactive-chip chip-yellow">
                            <FaAws size={14} /> Ex-Amazon
                        </span>
                    </div>

                    {/* Highly Responsive Action Buttons */}
                    <div className="hero-actions-row">
                        <a href="mailto:guptakeshav2509@gmail.com" className="btn-primary hero-btn-main">
                            <FaEnvelope size={15} />
                            <span>Email</span>
                            <FaArrowRight size={12} className="btn-arrow-icon" />
                        </a>

                        <div className="hero-secondary-btns">
                            <a
                                href="https://github.com/thekeshavgupta"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline hero-btn-social hero-btn-github"
                                title="View Keshav's GitHub Repositories"
                            >
                                <FaGithub size={16} />
                                <span>GitHub</span>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/kgupta786"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline hero-btn-social hero-btn-linkedin"
                                title="Connect with Keshav on LinkedIn"
                            >
                                <FaLinkedin size={16} className="linkedin-brand-icon" />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column: Redesigned Developer Showcase Card */}
                <div className="hero-right">
                    <div className="hero-profile-card">
                        {/* Top Card Bar with Verified Status & Location */}
                        <div className="profile-card-topbar">
                            <span className="profile-badge-pill">
                                <span className="profile-pulse-dot" />
                                <span>Software Engineer 2</span>
                            </span>
                            <span className="profile-location-tag">
                                <FaMapMarkerAlt size={11} />
                                <span>INDIA</span>
                            </span>
                        </div>

                        {/* Modern Circular Portrait Showcase with Moving Ambient Glow */}
                        <div className="hero-avatar-showcase">
                            <div className="avatar-ambient-glow" aria-hidden="true" />
                            <div className="avatar-multi-glow" aria-hidden="true" />
                            <div className="avatar-frame">
                                <img
                                    className="hero-avatar-img"
                                    src="/images/updatedimage.jpg"
                                    alt="Keshav Gupta"
                                    loading="eager"
                                />
                            </div>
                        </div>

                        {/* Profile Info */}
                        <div className="profile-card-body">
                            <div className="profile-name-group">
                                <h2 className="profile-name">Keshav Gupta</h2>
                                {/* <span className="profile-role-sub">Distributed Systems & AI Engineer</span> */}
                            </div>

                            {/* Credentials Pill */}
                            <div className="profile-credentials-pill">
                                <span>Ex-Microsoft</span>
                                <span className="cred-dot">•</span>
                                <span>Ex-Amazon</span>
                                <span className="cred-dot">•</span>
                                <span>UT Austin</span>
                            </div>

                            {/* Symmetrical Stats Bento */}
                            <div className="hero-stats-bento">
                                <div className="hero-stat-card">
                                    <span className="stat-value stat-blue">6+</span>
                                    <span className="stat-name">Years Exp</span>
                                </div>
                                <div className="hero-stat-card">
                                    <span className="stat-value stat-green">4</span>
                                    <span className="stat-name">AI Papers</span>
                                </div>
                                <div className="hero-stat-card">
                                    <span className="stat-value stat-yellow">3.63</span>
                                    <span className="stat-name">UT Austin        GPA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;
