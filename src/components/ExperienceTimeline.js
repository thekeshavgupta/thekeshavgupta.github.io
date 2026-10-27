import './ExperienceTimeline.css';
import { FaMicrosoft, FaAws, FaCalendarAlt, FaCheck, FaMapMarkerAlt } from 'react-icons/fa';
import { TbHeartRateMonitor } from 'react-icons/tb';

const EXPERIENCES = [
    {
        id: 'microsoft',
        company: 'Microsoft',
        role: 'Software Engineer 2',
        location: 'Hyderabad, Telangana, India',
        period: 'Nov. 2024 – Aug. 2026',
        tenure: 'Nov. 2024 – Aug. 2026',
        tenureClass: 'chip-blue',
        nodeClass: 'node-microsoft',
        icon: <FaMicrosoft size={22} />,
        tags: [
            'Azure CI/CD',
            'AzFC-OpsAI',
            'Azure Quota Platform',
            'Azure Managed Identity',
            'Bing Hotels Answers',
            'Python (DBSCAN & K-Means)',
            'Kusto Query Language (KQL)',
            'C# & .NET'
        ],
        bullets: [
            <>Led DevOps improvements across the <strong>AzFC-OpsAI</strong> codebase, optimizing Azure CI/CD deployment pipelines and proposing isolated feature-testing architecture to reduce production deployment time by approximately <strong>95.8%</strong> without disrupting ongoing UAT.</>,
            <>Co-architected an AI-driven <strong>Azure Quota Platform</strong>, designing a secure authentication layer supporting <strong>Azure Managed Identity</strong>, service principals, and certificate-based authentication for clients including ICM and ADO, with the platform projected to deliver <strong>$5M in annual cost savings</strong>.</>,
            <>Investigated and resolved irregular query-triggering behavior in <strong>Bing Hotels Answers</strong> using Python-based clustering techniques, including <strong>DBSCAN and K-Means</strong>, improving hotel answer-triggering precision and recall to <strong>95%+</strong>.</>,
            <>Drove cross-team telemetry analysis using <strong>Kusto Query Language (KQL)</strong> to identify regional price-visibility gaps and inform architectural improvements, expanding hotel price visibility across global markets by <strong>5–20%</strong>.</>,
            <>Reduced Page Load Time Value (PLTV2) by <strong>10–20%</strong> for high-traffic Bing Hotel ads by optimizing the <strong>Bing Hotels Answers API</strong> and refactoring request/response processing pipelines in <strong>C# and .NET</strong>.</>
        ]
    },
    {
        id: 'amazon',
        company: 'Amazon',
        role: 'Software Development Engineer',
        location: 'Bengaluru, Karnataka, India',
        period: 'Jan. 2021 – Nov. 2024',
        tenure: 'Jan. 2021 – Nov. 2024',
        tenureClass: 'chip-yellow',
        nodeClass: 'node-amazon',
        icon: <FaAws size={24} />,
        tags: [
            'Amazon Just Walk Out',
            'Kotlin Microservices',
            'AWS Step Functions & CDK',
            'Amazon S3 & SNS',
            'Apache Spark & Scala',
            'AWS EMR',
            'Distributed Systems'
        ],
        bullets: [
            <>Architected resilient Kotlin backend services for <strong>Amazon Just Walk Out’s Ordering & Checkout</strong> systems, introducing queue-based workload decoupling to isolate failures and reduce production SEV2 incidents by <strong>50%+</strong>.</>,
            <>Owned the end-to-end design and deployment of an <strong>ML evaluation portal</strong>, automating dataset creation and grader workflows using <strong>AWS Step Functions, CDK, and S3</strong> to reduce operational TAT from <strong>2-3 days to 2-3 hours</strong>.</>,
            <>Developed full-stack annotation interfaces featuring camera previews, hover-based zoom, and 2D visualizations, improving text annotation precision from <strong>66% to 74%</strong> and recall from <strong>65% to 73%</strong>.</>,
            <>Optimized <strong>Apache Spark/Scala</strong> pipelines on <strong>AWS EMR</strong> processing <strong>36M records daily</strong>, reducing processing latency by <strong>40–50%</strong> through performance profiling and query optimization.</>,
            <>Led production-readiness and infrastructure initiatives, scaling AWS EMR to handle <strong>3–4x peak traffic</strong>, migrating EventBus notifications to <strong>SNS</strong>, and establishing isolated UAT infrastructure to support <strong>200K messages</strong> load tests.</>,
            <>Implemented validation safeguards to address an organization-wide Transportation Financial Systems reliability issue involving a historical <strong>$28M duplicate-booking incident</strong>; mentored an SDE intern who subsequently received a full-time return offer.</>
        ]
    },
    {
        id: 'optum',
        company: 'Optum Global Solutions India Pvt. Ltd.',
        role: 'Software Engineer',
        location: 'Hyderabad, Telangana, India',
        period: 'Jul. 2020 – Jan. 2021',
        tenure: 'Jul. 2020 – Jan. 2021',
        tenureClass: 'chip-green',
        nodeClass: 'node-optum',
        icon: <TbHeartRateMonitor size={24} />,
        tags: [
            'Healthcare Systems',
            'Apache Spark',
            'Hadoop Ecosystem',
            'Big Data Processing',
            'Distributed Ingestion'
        ],
        bullets: [
            <>Gained hands-on experience with healthcare systems and large-scale data processing technologies, including <strong>Apache Spark and Hadoop</strong>, during the probation period.</>
        ]
    }
];

function ExperienceTimeline() {
    return (
        <section id="experience" className="experience-section">
            <div className="section-wrapper">
                <div className="section-head">
                    <span className="section-badge">Career Journey</span>
                    <h2 className="section-title">
                        Work <span className="google-gradient-text">Experience</span>
                    </h2>
                    <p className="section-desc">
                        Proven history of architecting mission-critical distributed microservices, AI automation infrastructure, and high-throughput data pipelines at industry-defining scale.
                    </p>
                </div>

                {/* Dedicated Timeline Tree View */}
                <div className="timeline-tree">
                    {EXPERIENCES.map((exp) => (
                        <div key={exp.id} className="timeline-milestone">
                            <div className={`timeline-node-wrap ${exp.nodeClass}`} aria-hidden="true">
                                {exp.icon}
                            </div>

                            <div className="timeline-card">
                                <div className="timeline-card-header">
                                    <div className="company-title-area">
                                        <div className="company-name-row">
                                            <span className={`mobile-company-icon ${exp.nodeClass}`} aria-hidden="true">
                                                {exp.icon}
                                            </span>
                                            <h3 className="company-name">{exp.company}</h3>
                                        </div>
                                        <p className="role-title">{exp.role}</p>
                                    </div>

                                    <div className="milestone-meta-wrap">
                                        <span className="location-pill">
                                            <FaMapMarkerAlt size={11} />
                                            <span>{exp.location}</span>
                                        </span>
                                        <span className="period-pill">
                                            <FaCalendarAlt size={12} />
                                            <span>{exp.period}</span>
                                        </span>
                                    </div>
                                </div>

                                <div className="timeline-card-content">
                                    <div className="timeline-tags-wrap">
                                        {exp.tags.map((tag, i) => (
                                            <span key={i} className="interactive-chip">{tag}</span>
                                        ))}
                                    </div>

                                    <ul className="timeline-bullets-list">
                                        {exp.bullets.map((bullet, idx) => (
                                            <li key={idx} className="timeline-bullet-item">
                                                <span className="bullet-check-node">
                                                    <FaCheck size={11} />
                                                </span>
                                                <div className="bullet-text">{bullet}</div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ExperienceTimeline;
