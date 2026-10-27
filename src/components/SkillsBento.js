import { useState, useMemo } from 'react';
import './SkillsBento.css';
import {
    FaCloud,
    FaBrain,
    FaDatabase,
    FaCode,
    FaLayerGroup,
    FaStar
} from 'react-icons/fa';

const PILLARS = [
    {
        id: 'cloud',
        title: 'Backend, Cloud & Developer Tools',
        subtitle: 'Enterprise Cloud Platforms, Containerization & CI/CD Pipelines',
        colorVar: 'blue',
        icon: <FaCloud size={20} />,
        coreSkills: [
            'Amazon Web Services (AWS)',
            'Microsoft Azure',
            'Spring Boot',
            'Docker',
            'CI/CD Pipelines',
            'Git'
        ],
        otherSkills: [
            'AWS Step Functions',
            'AWS CDK',
            'AWS EMR & SNS',
            'Azure DevOps (ADO)',
            'Azure Key Vault',
            'Azure Managed Identity'
        ]
    },
    {
        id: 'ai',
        title: 'AI / ML & Deep Learning',
        subtitle: 'Deep Neural Networks, NLP, Clustering & Optimization Theory',
        colorVar: 'red',
        icon: <FaBrain size={20} />,
        coreSkills: [
            'PyTorch',
            'Machine Learning',
            'Deep Learning',
            'DBSCAN & K-Means Clustering'
        ],
        otherSkills: [
            'Natural Language Processing (NLP)',
            'Contrastive Learning (IRIS)',
            'Information Bottleneck (VIBE)',
            'Computer Vision (YOLO & OpenCV)',
            'Optimization Theory (AURA)',
            'Adaptive Regularization (AIR)'
        ]
    },
    {
        id: 'data',
        title: 'Databases & Software Engineering',
        subtitle: 'Distributed Systems, High-Scale Storage & Design Principles',
        colorVar: 'yellow',
        icon: <FaDatabase size={20} />,
        coreSkills: [
            'PostgreSQL',
            'Azure Cosmos DB',
            'AWS DynamoDB',
            'Redis',
            'Memcached'
        ],
        otherSkills: [
            'Distributed Systems',
            'Microservices Architecture',
            'Object-Oriented Design',
            'SOLID Principles',
            'ACID Properties',
            'Big Data (Spark & Hadoop)',
            'Code Testing',
            'Observability & Telemetry'
        ]
    },
    {
        id: 'languages',
        title: 'Languages & Core Systems',
        subtitle: 'Multi-Paradigm Programming, Query Engines & Concurrency',
        colorVar: 'green',
        icon: <FaCode size={20} />,
        coreSkills: [
            'Python',
            'Java',
            'C++',
            'C# (.NET)',
            'TypeScript',
            'SQL'
        ],
        otherSkills: [
            'Kotlin (JWO Microservices)',
            'Scala (EMR Pipelines)',
            'Kusto Query Language (KQL)',
            'HTML / CSS / React',
            'High-Throughput Concurrency',
            'RESTful API Design'
        ]
    }
];

function SkillsBento() {
    const [selectedTab, setSelectedTab] = useState('all');

    // Filter pillars based on active tab
    const displayedPillars = useMemo(() => {
        if (selectedTab === 'all') return PILLARS;
        return PILLARS.filter(pillar => pillar.id === selectedTab);
    }, [selectedTab]);

    // Total skills count
    const totalSkillsCount = useMemo(() => {
        return PILLARS.reduce((sum, p) => sum + p.coreSkills.length + p.otherSkills.length, 0);
    }, []);

    return (
        <section id="skills" className="skills-section">
            <div className="section-wrapper">
                <div className="section-head">
                    <span className="section-badge">Core Competencies</span>
                    <h2 className="section-title">
                        Technical <span className="google-gradient-text">Skills</span>
                    </h2>
                    <p className="section-desc">
                        Production-proven engineering toolkit spanning high-scale distributed systems, machine learning research, and cloud infrastructure.
                    </p>
                </div>

                {/* Category Filter Navigation Bar */}
                <div className="skills-filter-bar" role="tablist" aria-label="Skills filter">
                    <button
                        type="button"
                        className={`skills-tab-pill ${selectedTab === 'all' ? 'active' : ''}`}
                        onClick={() => setSelectedTab('all')}
                        role="tab"
                        aria-selected={selectedTab === 'all'}
                    >
                        <FaLayerGroup size={13} />
                        <span>All Competencies</span>
                        <span className="tab-count-badge">{totalSkillsCount}</span>
                    </button>
                    {PILLARS.map(p => (
                        <button
                            key={p.id}
                            type="button"
                            className={`skills-tab-pill ${selectedTab === p.id ? 'active' : ''}`}
                            onClick={() => setSelectedTab(p.id)}
                            role="tab"
                            aria-selected={selectedTab === p.id}
                        >
                            <span>{p.title.split('&')[0].trim()}</span>
                            <span className="tab-count-badge">{p.coreSkills.length + p.otherSkills.length}</span>
                        </button>
                    ))}
                </div>

                {/* Symmetrical 2x2 Bento Grid */}
                <div className={`skills-symmetrical-grid ${displayedPillars.length === 1 ? 'single-card' : ''}`}>
                    {displayedPillars.map((pillar) => (
                        <div key={pillar.id} className={`skill-pillar-card pillar-${pillar.colorVar}`}>
                            {/* Card Header with Icon, Title & Meta */}
                            <div className="pillar-header">
                                <div className="pillar-title-wrap">
                                    <div className={`pillar-icon-box box-${pillar.colorVar}`} aria-hidden="true">
                                        {pillar.icon}
                                    </div>
                                    <div className="pillar-text-group">
                                        <h3 className="pillar-title">{pillar.title}</h3>
                                        <p className="pillar-subtitle">{pillar.subtitle}</p>
                                    </div>
                                </div>
                                <div className="pillar-meta-badge">
                                    <span className="pillar-total-pill">
                                        {pillar.coreSkills.length + pillar.otherSkills.length} Skills
                                    </span>
                                </div>
                            </div>

                            {/* Pillar Body with Structured Tiers */}
                            <div className="pillar-body">
                                {/* Core Competencies Tier */}
                                <div className="skill-tier-block">
                                    <div className="tier-header">
                                        <span className="tier-label">
                                            <FaStar size={10} className="tier-star-icon" aria-hidden="true" />
                                            <span>Core Competencies</span>
                                        </span>
                                    </div>
                                    <div className="tier-chips-cloud">
                                        {pillar.coreSkills.map((skill, idx) => (
                                            <span key={idx} className={`skill-chip core-chip chip-${pillar.colorVar}`}>
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Applied Tooling & Frameworks Tier */}
                                <div className="skill-tier-block">
                                    <div className="tier-header">
                                        <span className="tier-label">Frameworks & Methodologies</span>
                                    </div>
                                    <div className="tier-chips-cloud">
                                        {pillar.otherSkills.map((skill, idx) => (
                                            <span key={idx} className="skill-chip standard-chip">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillsBento;
