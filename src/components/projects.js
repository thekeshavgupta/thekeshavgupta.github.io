import { useState } from 'react';
import './projects.css';
import { useScrollAnimationChildren } from '../hooks/useScrollAnimation';
import { FaGithub, FaLayerGroup, FaExternalLinkAlt, FaExpand, FaTimes } from 'react-icons/fa';
import Carousel from './Carousel';

const PROJECTS = [
    {
        id: 'vibe',
        title: 'V.I.B.E : Variational Information Bottleneck for Embedding',
        badge: 'ML Framework',
        badgeClass: 'chip-blue',
        description: 'VIBE is a machine learning framework designed to remove unwanted biases from text embeddings while preserving useful information for downstream tasks using adversarial learning and dimensionality reduction.',
        images: [
            { src: '/images/vibe/v2.png', title: 'Architecture Pipeline' },
            { src: '/images/vibe/v3.png', title: 'Empirical Benchmark Results' }
        ],
        tags: ['PyTorch', 'Adversarial Learning', 'NLP', 'Fair Representations'],
        link: 'https://github.com/thekeshavgupta/VIBE'
    },
    {
        id: 'kisanmate',
        title: 'KisanMate — Crop Health & Nutrient AI Platform',
        badge: 'Mobile & Cloud AI',
        badgeClass: 'chip-green',
        description: 'KisanMate assists farmers in real-time crop disease prediction and nutrient analysis using a CNN model with ~90% accuracy, backed by a scalable Flask microservice on Heroku.',
        images: [],
        tags: ['Flutter', 'Python', 'CNN (~90% Acc)', 'Flask', 'Heroku'],
        link: null
    },
    {
        id: 'smart-stick',
        title: 'Aid for Blind — Smart Stick Embedded Vision',
        badge: 'Edge AI & IoT',
        badgeClass: 'chip-yellow',
        description: 'A smart mobility stick assisting visually impaired individuals with obstacle detection using edge deep learning (~85% accuracy) powered by Python, YOLO, OpenCV, and Raspberry Pi.',
        images: [],
        tags: ['Raspberry Pi', 'YOLO', 'OpenCV', 'Edge AI', 'IoT'],
        link: null
    }
];

function Projects() {
    const cardsRef = useScrollAnimationChildren({ childSelector: '.google-project-card' });
    const [modalImage, setModalImage] = useState(null);

    return (
        <section id="projects" className="google-section-projects">
            <div className="section-container">
                <div className="section-heading-wrapper">
                    <span className="section-tag">Open Source & Innovation</span>
                    <h2 className="section-heading">
                        Featured <span className="highlight-blue">Projects</span>
                    </h2>
                    <p className="section-subtitle">
                        Applied AI applications, computer vision tools, and open-source machine learning frameworks.
                    </p>
                </div>

                <Carousel label="project cards" trackRef={cardsRef} className="google-projects-grid">
                    {PROJECTS.map((project) => (
                        <div key={project.id} className="google-project-card animate-child">
                            <div className="google-project-header">
                                <div className="project-title-box">
                                    <div className="project-icon-box">
                                        <FaLayerGroup size={18} />
                                    </div>
                                    <div>
                                        <h3 className="project-card-title">{project.title}</h3>
                                        <span className={`google-chip ${project.badgeClass}`}>{project.badge}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="google-project-body">
                                <div className="project-tags-row">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="google-chip">{tag}</span>
                                    ))}
                                </div>

                                <p className="project-desc-text">{project.description}</p>

                                {project.images && project.images.length > 0 && (
                                    <div className="project-gallery-box">
                                        <p className="gallery-title">Architecture & Diagrams (Click to enlarge)</p>
                                        <div className="project-interactive-grid">
                                            {project.images.map((imgObj, i) => (
                                                <button
                                                    key={i}
                                                    type="button"
                                                    className="interactive-diagram-card"
                                                    onClick={() => setModalImage(imgObj)}
                                                    aria-label={`Enlarge ${imgObj.title || 'diagram'}`}
                                                >
                                                    <div className="diagram-thumb-wrap">
                                                        <img
                                                            src={imgObj.src}
                                                            alt={imgObj.title || 'Diagram'}
                                                            className="diagram-thumb"
                                                            loading="lazy"
                                                        />
                                                        <div className="diagram-overlay">
                                                            <FaExpand size={14} />
                                                            <span>View Diagram</span>
                                                        </div>
                                                    </div>
                                                    <span className="diagram-caption">{imgObj.title}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {project.link && (
                                    <div className="project-footer-action">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-google-primary project-btn"
                                            aria-label="View on GitHub"
                                        >
                                            <FaGithub size={15} />
                                            <span>View Source Code</span>
                                            <FaExternalLinkAlt size={11} />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>

            {/* Lightbox / Diagram Modal */}
            {modalImage && (
                <div className="diagram-modal-overlay" onClick={() => setModalImage(null)}>
                    <div className="diagram-modal-card" onClick={(e) => e.stopPropagation()}>
                        <div className="diagram-modal-header">
                            <h4 className="diagram-modal-title">{modalImage.title || 'Architecture Diagram'}</h4>
                            <button
                                type="button"
                                className="diagram-modal-close"
                                onClick={() => setModalImage(null)}
                                aria-label="Close modal"
                            >
                                <FaTimes size={18} />
                            </button>
                        </div>
                        <div className="diagram-modal-body">
                            <img src={modalImage.src} alt={modalImage.title || 'Enlarged diagram'} className="diagram-modal-img" />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Projects;