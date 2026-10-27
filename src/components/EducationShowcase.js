import './EducationShowcase.css';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaAward, FaMapMarkerAlt, FaBookOpen } from 'react-icons/fa';

const EDUCATIONS = [
    {
        id: 'utaustin',
        degree: 'Masters in Artificial Intelligence',
        school: 'The University of Texas at Austin',
        period: 'Jan. 2024 – Dec. 2025',
        location: 'Austin, TX, USA',
        gpa: 'GPA: 3.63 / 4.00',
        badge: 'Masters in AI',
        badgeClass: 'chip-utaustin',
        gpaClass: 'gpa-utaustin',
        nodeClass: 'edu-node-utaustin',
        icon: <FaGraduationCap size={22} />,
        highlight: 'Specialization: Distributed Machine Learning & Deep Architectures',
        highlightClass: 'chip-red',
        description: 'Specialization in Distributed Machine Learning & Deep Architectures. Advanced graduate coursework and research focusing on distributed model training, gradient curvature dynamics, and adaptive regularization in deep neural networks.',
        coursework: ['Distributed Machine Learning', 'Deep Architectures', 'Optimization Theory', 'Generative AI', 'Computer Vision']
    },
    {
        id: 'thapar',
        degree: 'Bachelors in Computer Engineering',
        school: 'Thapar Institute of Engineering and Technology',
        period: 'Jul. 2016 – Jul. 2020',
        location: 'Patiala, Punjab, India',
        gpa: 'CGPA: 9.41 / 10.00',
        badge: 'B.E. Computer Engineering',
        badgeClass: 'chip-thapar',
        gpaClass: 'gpa-thapar',
        nodeClass: 'edu-node-thapar',
        icon: <FaUniversity size={20} />,
        highlight: 'Honors: Graduated with First Class Degree',
        highlightClass: 'chip-green',
        description: 'Graduated with First Class Degree. Established strong foundation in concurrent systems, algorithmic efficiency, and distributed software design. Researched and published image processing watermarking research in Springer Nature.',
        coursework: ['Data Structures & Algorithms', 'Distributed Systems', 'Database Architecture', 'Operating Systems', 'Computer Networks']
    }
];

function EducationShowcase() {
    return (
        <section id="education" className="education-section">
            <div className="section-wrapper">
                <div className="section-head">
                    <span className="section-badge">Academic Qualifications</span>
                    <h2 className="section-title">
                        Academic <span className="google-gradient-text">Journey</span>
                    </h2>
                    <p className="section-desc">
                        Rigorous computer engineering fundamentals combined with specialized graduate-level research in Artificial Intelligence.
                    </p>
                </div>

                {/* Vertical Education Timeline Tree */}
                <div className="edu-timeline-tree">
                    {EDUCATIONS.map((edu) => (
                        <div key={edu.id} className="edu-milestone">
                            {/* Branded Timeline Node */}
                            <div className={`edu-node-wrap ${edu.nodeClass}`} aria-label={edu.school}>
                                {edu.icon}
                            </div>

                            {/* Timeline Card */}
                            <div className="edu-timeline-card">
                                <div className="edu-card-header">
                                    <div className="edu-title-group">
                                        <div className="edu-degree-row">
                                            <span className={`mobile-edu-icon ${edu.nodeClass}`} aria-hidden="true">
                                                {edu.icon}
                                            </span>
                                            <h3 className="edu-degree-name">{edu.degree}</h3>
                                        </div>
                                        <p className="edu-institution">
                                            <FaUniversity size={13} />
                                            <span>{edu.school}</span>
                                        </p>
                                    </div>

                                    <div className="edu-header-badges">
                                        <span className={`interactive-chip ${edu.badgeClass}`}>
                                            {edu.badge}
                                        </span>
                                        <span className="period-pill">
                                            <FaCalendarAlt size={12} />
                                            <span>{edu.period}</span>
                                        </span>
                                    </div>
                                </div>

                                <div className="edu-card-body">
                                    {/* Accolades & Metadata Row */}
                                    <div className="edu-accolades-row">
                                        <span className="location-pill">
                                            <FaMapMarkerAlt size={12} />
                                            <span>{edu.location}</span>
                                        </span>
                                        <span className={`gpa-accolade-badge ${edu.gpaClass}`}>
                                            <FaAward size={13} />
                                            <span>{edu.gpa}</span>
                                        </span>
                                        <span className={`interactive-chip ${edu.highlightClass}`}>
                                            <FaBookOpen size={11} />
                                            <span>{edu.highlight}</span>
                                        </span>
                                    </div>

                                    <p className="edu-summary-text">{edu.description}</p>

                                    {/* Coursework & Focus Areas */}
                                    <div className="edu-coursework-wrap">
                                        <span className="coursework-title">Specialization & Core Areas</span>
                                        <div className="coursework-pills">
                                            {edu.coursework.map((course, idx) => (
                                                <span key={idx} className="interactive-chip">{course}</span>
                                            ))}
                                        </div>
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

export default EducationShowcase;
