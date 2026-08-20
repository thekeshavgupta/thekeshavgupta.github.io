import './skills.css';
import { useScrollAnimationChildren } from '../hooks/useScrollAnimation';
import {
    FaCode,
    FaCloud,
    FaBrain,
    FaDatabase,
    FaTools,
    FaServer
} from 'react-icons/fa';

const SKILL_CATEGORIES = [
    {
        title: 'Programming Languages',
        icon: <FaCode size={18} />,
        badgeClass: 'chip-blue',
        iconBoxClass: 'icon-blue',
        skills: ['Python', 'Java', 'C++', 'TypeScript']
    },
    {
        title: 'Cloud & Infrastructure',
        icon: <FaCloud size={18} />,
        badgeClass: 'chip-yellow',
        iconBoxClass: 'icon-yellow',
        skills: ['Amazon Web Services (AWS)', 'Microsoft Azure', 'CI/CD Pipelines', 'Distributed Microservices']
    },
    {
        title: 'AI, ML & Data Science',
        icon: <FaBrain size={18} />,
        badgeClass: 'chip-green',
        iconBoxClass: 'icon-green',
        skills: ['PyTorch', 'Machine Learning', 'Deep Learning']
    },
    {
        title: 'Databases & Storage',
        icon: <FaDatabase size={18} />,
        badgeClass: 'chip-red',
        iconBoxClass: 'icon-red',
        skills: ['Distributed Data Pipelines', 'MySQL', 'DynamoDB', 'Cosmos DB', 'Redis']
    },
    {
        title: 'Engineering & Tools',
        icon: <FaTools size={18} />,
        badgeClass: 'chip-yellow',
        iconBoxClass: 'icon-yellow',
        skills: ['Git / GitHub', 'Linux / Unix', 'System Design', 'Performance Optimization', 'Testing']
    }
];

function Skills() {
    const gridRef = useScrollAnimationChildren({ childSelector: '.google-skill-card' });

    return (
        <section id="skills" className="google-section-skills">
            <div className="section-container">
                <div className="section-heading-wrapper">
                    <span className="section-tag">Core Competencies</span>
                    <h2 className="section-heading">
                        Technical <span className="highlight-blue">Skills</span>
                    </h2>
                    <p className="section-subtitle">
                        Comprehensive toolkit across languages, distributed infrastructure, AI/ML engineering, and big data systems.
                    </p>
                </div>

                <div className="skills-grid" ref={gridRef}>
                    {SKILL_CATEGORIES.map((category) => (
                        <div key={category.title} className="google-skill-card animate-child">
                            <div className="skill-card-header">
                                <div className={`skill-icon-box ${category.iconBoxClass}`}>
                                    {category.icon}
                                </div>
                                <h3 className="skill-category-title">{category.title}</h3>
                            </div>

                            <div className="skill-chips-container">
                                {category.skills.map((skill, index) => (
                                    <span key={index} className={`google-chip ${category.badgeClass}`}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
