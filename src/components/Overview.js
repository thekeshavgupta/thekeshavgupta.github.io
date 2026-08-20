import './Overview.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function Overview() {
    const sectionRef = useScrollAnimation();

    return (
        <section id="about" className="about-section">
            <div className="section-container scroll-hidden" ref={sectionRef}>
                <h2 className="section-heading">
                    <span className="gradient-text">About</span> Me
                </h2>
                <div className="about-content">
                    <div className="about-text">
                        <p className="about-paragraph">
                            Passionate about the intersection of data and innovation, I specialize in
                            <span className="about-highlight"> Machine Learning</span>,
                            <span className="about-highlight"> Deep Learning</span>, and
                            <span className="about-highlight"> Natural Language Processing (NLP)</span> to
                            craft intelligent systems that solve real-world challenges.
                        </p>
                        <p className="about-paragraph">
                            My expertise spans from leveraging complex healthcare datasets like MIMIC-III
                            to developing engaging web applications, always driven by a commitment to
                            blend technology, data, and creativity for meaningful impact.
                        </p>
                    </div>

                    {/* Quick Stats */}
                    <div className="about-stats">
                        <div className="stat-card">
                            <span className="stat-number">4+</span>
                            <span className="stat-label">Years of Experience</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">4</span>
                            <span className="stat-label">Research Publications</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">3</span>
                            <span className="stat-label">Companies</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Overview;