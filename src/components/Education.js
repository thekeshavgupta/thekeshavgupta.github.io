import './Education.css';
import { useScrollAnimationChildren } from '../hooks/useScrollAnimation';
import { FaGraduationCap, FaCalendarAlt, FaAward, FaUniversity } from 'react-icons/fa';
import Carousel from './Carousel';

function Education() {
    const cardsRef = useScrollAnimationChildren({ childSelector: '.google-edu-card' });

    const educations = [
        {
            degree: "Master's in Artificial Intelligence",
            school: 'University of Texas at Austin, Texas, USA',
            period: 'Jan. 2024 – Dec. 2025',
            gpa: 'GPA: 3.63 / 4.0',
            badgeClass: 'chip-green',
            focus: ['Machine Learning', 'Deep Learning', 'Generative AI', 'Optimization'],
            description: 'Pursued advanced research and coursework in Machine Learning, Deep Neural Networks, and Generative Models with real-world application benchmarks.',
        },
        {
            degree: "Bachelor's in Computer Engineering",
            school: 'Thapar Institute of Engineering & Technology, Patiala, Punjab, India',
            period: 'Jul. 2016 – Jul. 2020',
            gpa: 'CGPA: 9.41 / 10',
            badgeClass: 'chip-blue',
            focus: ['Data Structures', 'Algorithms', 'Distributed Systems', 'Databases'],
            description: 'Built a rigorous engineering foundation across algorithm design, distributed computing, and database architecture.',
        }
    ];

    return (
        <section id="education" className="google-section-education">
            <div className="section-container">
                <div className="section-heading-wrapper">
                    <span className="section-tag">Academic Background</span>
                    <h2 className="section-heading">
                        <span className="highlight-blue">Education</span> & Qualifications
                    </h2>
                    <p className="section-subtitle">
                        Strong academic rigor in Computer Science and specialized Master's level Artificial Intelligence.
                    </p>
                </div>

                <Carousel label="education cards" trackRef={cardsRef} className="google-edu-grid">
                    {educations.map((edu) => (
                        <div key={`${edu.school}-${edu.degree}`} className="google-edu-card animate-child">
                            <div className="google-edu-header">
                                <div className="edu-icon-box">
                                    <FaGraduationCap size={22} />
                                </div>
                                <div className="edu-title-group">
                                    <h3 className="edu-degree-title">{edu.degree}</h3>
                                    <p className="edu-school-name">
                                        <FaUniversity size={13} /> {edu.school}
                                    </p>
                                </div>
                            </div>

                            <div className="google-edu-body">
                                <div className="edu-meta-row">
                                    <span className="period-chip">
                                        <FaCalendarAlt size={12} /> {edu.period}
                                    </span>
                                    <span className={`google-chip ${edu.badgeClass}`}>
                                        <FaAward size={12} /> {edu.gpa}
                                    </span>
                                </div>

                                <div className="edu-focus-pills">
                                    {edu.focus.map((tag, i) => (
                                        <span key={i} className="google-chip">{tag}</span>
                                    ))}
                                </div>

                                <p className="edu-desc-text">{edu.description}</p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
}

export default Education;