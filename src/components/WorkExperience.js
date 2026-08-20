import './WorkExperience.css';
import { useScrollAnimationChildren } from '../hooks/useScrollAnimation';
import Carousel from './Carousel';
import { FaCalendarAlt, FaCheck, FaMicrosoft, FaAws } from 'react-icons/fa';
import { TbHeartRateMonitor } from 'react-icons/tb';

function WorkExperience() {
    const timelineRef = useScrollAnimationChildren({ childSelector: '.google-exp-card' });

    const experiences = [
        {
            company: 'Microsoft',
            position: 'Software Engineer 2',
            period: 'Nov. 2024 – Aug. 2026',
            badge: '1.9+ Years',
            badgeClass: 'chip-blue',
            icon: <FaMicrosoft size={18} />,
            colorClass: 'company-blue',
            tags: ['Azure', 'AI Agentic Automation', 'Bing Search', 'Distributed Systems'],
            details: [
                'Orchestrated the deployment of a secure, AI-driven automation workflow on Azure (UAMI, Key Vault, Cosmos DB) for Azure Fleet Capacity operations, eradicating manual inefficiencies to capture $5M in projected annual savings.',
                'Spearheaded price coverage analysis and refined search triggering logic for Bing Hotels, delivering precision and recall while boosting price visibility by 5–20% globally.'
            ]
        },
        {
            company: 'Amazon',
            position: 'Software Development Engineer',
            period: 'Jan. 2021 – Nov. 2024',
            badge: '3+ Years',
            badgeClass: 'chip-yellow',
            icon: <FaAws size={19} />,
            colorClass: 'company-yellow',
            tags: ['Kotlin', 'Spark', 'Scala', 'AWS', 'Just Walk Out (JWO)', 'Distributed Pipelines'],
            details: [
                'Architected resilient, Kotlin-based backend services for Ordering & Checkout (JWO), implementing a queue-based architecture that decoupled workload handling and drastically reduced Sev2 incidents and on-call overhead.',
                'Engineered a unified, full-stack research portal to automate dataset evaluation and annotation workflows, accelerating end-to-end processing time by over 95%.',
                'Constructed highly scalable Apache Spark and Scala data pipelines to process daily Sort Center variable-cost allocations, ensuring reliable, high-throughput data processing.'
            ]
        },
        {
            company: 'Optum (UnitedHealth Group)',
            position: 'Software Engineer',
            period: 'Jul. 2020 – Jan. 2021',
            badge: 'Healthcare Tech',
            badgeClass: 'chip-green',
            icon: <TbHeartRateMonitor size={20} />,
            colorClass: 'company-green',
            tags: ['Apache Spark', 'Hadoop', 'Big Data Engineering', 'Java'],
            details: [
                'Gained deep understanding of healthcare systems and learned big data technologies such as Spark & Hadoop during the probation period.'
            ]
        }
    ];

    return (
        <section id="experience" className="google-section-experience">
            <div className="section-container">
                <div className="section-heading-wrapper">
                    <span className="section-tag">Career Journey</span>
                    <h2 className="section-heading">
                        Work <span className="highlight-blue">Experience</span>
                    </h2>
                    <p className="section-subtitle">
                        Proven track record delivering mission-critical microservices and AI automation systems at scale.
                    </p>
                </div>

                <Carousel label="work experience cards" trackRef={timelineRef} className="google-exp-grid">
                    {experiences.map((exp) => (
                        <div key={`${exp.company}-${exp.position}`} className="google-exp-card animate-child">
                            <div className="google-card-header">
                                <div className="company-logo-wrapper">
                                    <div className={`company-icon-box ${exp.colorClass}`}>
                                        {exp.icon}
                                    </div>
                                    <div className="company-info">
                                        <h3 className="company-title">{exp.company}</h3>
                                        <p className="position-title">{exp.position}</p>
                                    </div>
                                </div>

                                <div className="card-header-meta">
                                    <span className={`google-chip ${exp.badgeClass}`}>{exp.badge}</span>
                                    <span className="period-chip">
                                        <FaCalendarAlt size={12} /> {exp.period}
                                    </span>
                                </div>
                            </div>

                            <div className="google-card-body">
                                <div className="tags-row">
                                    {exp.tags.map((t, idx) => (
                                        <span key={idx} className="google-chip">{t}</span>
                                    ))}
                                </div>

                                <ul className="details-list">
                                    {exp.details.map((detail, i) => (
                                        <li key={i} className="detail-item">
                                            <span className="check-icon"><FaCheck size={11} /></span>
                                            <span className="detail-text" style={{ textAlign: "justify" }}>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
}

export default WorkExperience;