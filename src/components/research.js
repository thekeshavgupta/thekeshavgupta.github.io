import './research.css';
import { useScrollAnimationChildren } from '../hooks/useScrollAnimation';
import { FaExternalLinkAlt, FaBookOpen, FaFlask } from 'react-icons/fa';
import Carousel from './Carousel';

function Research() {
    const cardsRef = useScrollAnimationChildren({ childSelector: '.google-research-card' });

    const publications = [
        {
            title: "An adaptive framework to image watermarking based on the twin support vector regression and genetic algorithm in lifting wavelet transform domain",
            authors: "Mehta R, Gupta K, and Yadav AK",
            venue: "Multimed Tools Appl (Springer, 2020)",
            tags: ["Image Processing", "Wavelet Transform", "Genetic Algorithms", "SVR"],
            badgeClass: "chip-green",
            description: "Proposes a robust image watermarking framework using twin support vector regression and genetic algorithms in the lifting wavelet domain. Published in Multimedia Tools and Applications, Springer (2020).",
            link: "https://doi.org/10.1007/s11042-020-08634-x"
        },
        {
            title: "GRAIN: Gated Recurrent Adaptive Integration Network",
            authors: "Gupta K",
            venue: "Research Square Preprints (2025)",
            tags: ["Recurrent Networks", "EWMA Smoothing", "Deep Learning", "Generalization"],
            badgeClass: "chip-blue",
            description: "GRAIN introduces a modified GRU architecture that integrates a dynamic EWMA of past hidden states to smooth transitions and reduce training instability, consistently outperforming standard GRU and LSTM baselines.",
            link: "https://dx.doi.org/10.21203/rs.3.rs-8070545/v1"
        },
        {
            title: "AIR: Activation based Isotropic Regularisation",
            authors: "Gupta K",
            venue: "Research Square Preprints (2025)",
            tags: ["Regularization", "Activation Variance", "CNN/MLP", "Model Stability"],
            badgeClass: "chip-yellow",
            description: "AIR proposes a regularization strategy acting directly on activation variance across samples to build stable internal feature representations, demonstrating superior convergence robustness over conventional regularizers.",
            link: "https://dx.doi.org/10.21203/rs.3.rs-8005826/v1"
        },
        {
            title: "AURA: An Adaptive Unified Regularization Approach for Gradient-Based Optimization",
            authors: "Gupta K",
            venue: "Research Square Preprints (2025)",
            tags: ["Optimization", "Adaptive Momentum", "Gradient Descent", "Convergence"],
            badgeClass: "chip-red",
            description: "AURA adapts momentum based on loss patterns, gradient magnitude, and update direction alignment while maintaining a constant learning rate, matching or outperforming Adam and RMSProp across benchmarks.",
            link: "https://dx.doi.org/10.21203/rs.3.rs-7480833/v1"
        }
    ];

    return (
        <section id="research" className="google-section-research">
            <div className="section-container">
                <div className="section-heading-wrapper">
                    <span className="section-tag">Publications & AI Research</span>
                    <h2 className="section-heading">
                        <span className="highlight-blue">Research</span> Papers
                    </h2>
                    <p className="section-subtitle">
                        Novel contributions to Deep Learning architectures, adaptive regularization, and optimization algorithms.
                    </p>
                </div>

                <Carousel label="research publication cards" trackRef={cardsRef} className="google-research-grid">
                    {publications.map((pub) => (
                        <div key={pub.link || pub.title} className="google-research-card animate-child">
                            <div className="google-research-header">
                                <div className="research-icon-badge">
                                    <FaFlask size={18} />
                                </div>
                                <div className="research-title-area">
                                    <h3 className="research-paper-title">{pub.title}</h3>
                                    <div className="venue-row">
                                        <FaBookOpen size={12} />
                                        <span className="venue-text">{pub.venue}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="google-research-body">
                                <p className="research-authors-text">
                                    <strong>Authors:</strong> {pub.authors}
                                </p>

                                <div className="research-tags-row">
                                    {pub.tags.map((tag, idx) => (
                                        <span key={idx} className="google-chip">{tag}</span>
                                    ))}
                                </div>

                                <p className="research-desc-text">{pub.description}</p>

                                {pub.link && (
                                    <div className="research-action-row">
                                        <a
                                            href={pub.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-google-outline research-doi-btn"
                                            aria-label="View DOI publication"
                                        >
                                            <span>Read Publication (DOI)</span>
                                            <FaExternalLinkAlt size={12} />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
}

export default Research;