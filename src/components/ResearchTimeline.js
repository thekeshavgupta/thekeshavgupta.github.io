import './ResearchTimeline.css';
import { FaBookOpen, FaExternalLinkAlt } from 'react-icons/fa';

const PAPERS = [
    {
        id: 'grain',
        year: '2025',
        title: "Gated Recurrent Adaptive Integration Network",
        authors: "Gupta K",
        venue: "Research Square Preprints (2025)",
        badge: "RNN Architecture",
        badgeClass: "chip-blue",
        tags: ["GRAIN", "Dual-Pathway Gating", "Context-Aware Gating", "Temporal Representation", "Sequence Learning"],
        abstract: "Developed GRAIN, an adaptive gated recurrent architecture with dual-pathway context-aware gating to enhance temporal representation learning and long-range dependency modeling across benchmark sequence-learning tasks.",
        doi: "https://dx.doi.org/10.21203/rs.3.rs-8070545/v1"
    },
    {
        id: 'air',
        year: '2025',
        title: "Activation based Isotropic Regularisation",
        authors: "Gupta K",
        venue: "Research Square Preprints (2025)",
        badge: "Regularization Theory",
        badgeClass: "chip-yellow",
        tags: ["AIR", "Isotropic Regularization", "Subspace Smoothing", "AIR + L2 Hybrid", "Generalization"],
        abstract: "Developed AIR (Activation-based Isotropic Regularization), a novel regularization framework that smooths activation variance across high-variance subspaces to improve training stability and generalization. Further introduced an AIR + L2 hybrid combining subspace-level smoothing with weight decay, evaluating both approaches across MLP and CNN architectures on benchmark classification tasks.",
        doi: "https://dx.doi.org/10.21203/rs.3.rs-8005826/v1"
    },
    {
        id: 'aura',
        year: '2025',
        title: "A.U.R.A (Adaptive Unified Regularization Approach)",
        authors: "Gupta K",
        venue: "Research Square Preprints (2025)",
        badge: "Optimization Theory",
        badgeClass: "chip-red",
        tags: ["AURA", "Dynamic Gradient Penalization", "Curvature-Aware", "Convergence Stability", "Hyperparameter Robustness"],
        abstract: "Developed AURA (Adaptive Unified Regularization Approach), an adaptive regularization framework that applies dynamic gradient penalization through a curvature-aware update mechanism to improve its optimization stability, convergence, and hyperparameter robustness. Evaluated AURA across multiple deep learning architectures, demonstrating improved training stability and generalization on benchmark tasks.",
        doi: "https://doi.org/10.21203/rs.3.rs-7480833/v1"
    },
    {
        id: 'springer',
        year: '2020',
        title: "Image watermarking using T.S.V.R and Genetic Algo.",
        authors: "Mehta R, Gupta K, and Yadav AK",
        venue: "Multimed Tools Appl (Springer Nature, 2020)",
        badge: "Springer Nature Published",
        badgeClass: "chip-green",
        tags: ["Twin SVR", "Genetic Algorithm", "Lifting Wavelet Transform", "Grayscale Watermarking"],
        abstract: "Researched on a tool which can be used to embed a watermark into the image which is grayscale using Genetic Algorithm and Lifting Wavelet Transform with more robustness and efficiency. Published in Multimedia Tools and Applications, Springer (2020).",
        doi: "https://dl.acm.org/doi/10.1007/s11042-020-08634-x"
    }
];

function ResearchTimeline() {
    return (
        <section id="research" className="research-section">
            <div className="section-wrapper">
                <div className="section-head">
                    <span className="section-badge">Publications & Theoretical AI</span>
                    <h2 className="section-title">
                        Research <span className="google-gradient-text">Publications</span>
                    </h2>
                    <p className="section-desc">
                        Peer-reviewed publications and research preprints advancing deep learning architectures, adaptive regularization techniques, and optimization algorithms.
                    </p>
                </div>

                {/* Research Timeline Tree */}
                <div className="research-timeline-tree">
                    {PAPERS.map((paper) => (
                        <div key={paper.id} className="research-milestone">
                            <div className="research-node-wrap" aria-label={`Published in ${paper.year}`}>
                                <span>{paper.year}</span>
                            </div>

                            <div className="research-timeline-card">
                                <div className="paper-card-header">
                                    <div className="paper-badge-row">
                                        <span className={`interactive-chip ${paper.badgeClass}`}>
                                            {paper.badge}
                                        </span>
                                        <span className="mobile-year-pill">
                                            {paper.year}
                                        </span>
                                        <span className="paper-venue-text">
                                            <FaBookOpen size={13} />
                                            <span>{paper.venue}</span>
                                        </span>
                                    </div>

                                    <h3 className="paper-main-title">{paper.title}</h3>
                                </div>

                                <div className="paper-authors-row">
                                    <strong>Authors:</strong> {paper.authors}
                                </div>

                                <div className="paper-tags-cluster">
                                    {paper.tags.map((tag, i) => (
                                        <span key={i} className="interactive-chip">{tag}</span>
                                    ))}
                                </div>

                                <p className="paper-abstract-p">{paper.abstract}</p>

                                <div className="paper-actions-bar">
                                    <a
                                        href={paper.doi}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary"
                                        style={{ padding: '0.65rem 1.4rem' }}
                                    >
                                        <span>Read DOI Paper</span>
                                        <FaExternalLinkAlt size={12} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ResearchTimeline;
