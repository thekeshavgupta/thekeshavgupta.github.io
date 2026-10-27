import { useState, useRef, useEffect } from 'react';
import './ProjectsSlider.css';
import {
    FaGithub,
    FaExternalLinkAlt,
    FaChevronLeft,
    FaChevronRight,
    FaTimes,
    FaImage,
    FaExpand
} from 'react-icons/fa';

const PROJECTS = [
    {
        id: 'iris',
        badge: 'Semantic Search & NLP',
        badgeClass: 'chip-blue',
        title: 'IRIS: Intent Reactive Intelligent Search',
        tech: 'Python, Natural Language Processing, Machine Learning',
        description: 'Built IRIS, an intent-aware search system on the Google Natural Questions dataset using fine-grained intent modeling and contrastive triplet construction. Benchmarked retrieval baselines (BM25, BERT-CLS, Sentence-BERT) using MRR and NDCG, and designed a multi-encoder ranking architecture with intent–document alignment for stronger relevance modeling.',
        tags: [
            'Python',
            'Natural Language Processing',
            'Machine Learning',
            'Google Natural Questions',
            'Contrastive Triplets',
            'BM25 / BERT-CLS / Sentence-BERT',
            'MRR & NDCG Multi-Encoder'
        ],
        github: null,
        artifacts: []
    },
    {
        id: 'vibe',
        badge: 'Representation Learning & Debiasing',
        badgeClass: 'chip-red',
        title: 'VIBE: Variational Information Bottleneck for Embedding',
        tech: 'Python, Principal Component Analysis',
        description: 'Developed VIBE to reduce bias in text embeddings while preserving task-relevant information for downstream use. Applied adversarial learning and dimensionality reduction techniques to learn fairer representations for gender debiasing.',
        tags: [
            'Python',
            'PyTorch',
            'Principal Component Analysis',
            'Adversarial Learning',
            'Variational Information Bottleneck',
            'Fair NLP / Debiasing'
        ],
        github: 'https://github.com/thekeshavgupta/VIBE',
        artifacts: [
            { src: '/images/vibe/v2.png', title: 'VIBE Architecture Pipeline Diagram', label: 'Architecture Diagram' },
            { src: '/images/vibe/v3.png', title: 'Empirical Benchmark Results', label: 'Benchmark Results' }
        ]
    },
    {
        id: 'kisanmate',
        badge: 'AgriTech AI Mobile App',
        badgeClass: 'chip-green',
        title: 'KisanMate — Crop Health & Soil Nutrient Platform',
        tech: 'Flutter, Python, Deep Learning, Flask, Heroku — Under Prof. Dr. P.S. Rana',
        description: 'Implemented a CNN based model with approximately 90% accuracy, built a mobile application for crop disease prediction and nutrient guidance to support farmers in improving crop quality. Developed under the mentorship of Prof. Dr. P.S. Rana.',
        tags: [
            'Flutter Mobile',
            'Python',
            'Deep Learning (CNN ~90% Acc)',
            'Flask API',
            'Heroku Cloud',
            'Computer Vision',
            'Prof. Dr. P.S. Rana'
        ],
        github: null,
        artifacts: []
    },
    {
        id: 'smart-stick',
        badge: 'Assistive Edge AI & IoT',
        badgeClass: 'chip-yellow',
        title: 'Aid for Blind Smart Stick — Embedded Vision Navigation',
        tech: 'Python, Deep Learning, YOLO, OpenCV, Raspberry Pi — Under Prof. Dr. Rajesh Mehta',
        description: 'Developed a smart stick to assist visually impaired users with navigation using a machine learning-based obstacle detection system achieving an accuracy of approximately 85%. Powered by YOLO, OpenCV, and Raspberry Pi. Developed under the mentorship of Prof. Dr. Rajesh Mehta.',
        tags: [
            'Raspberry Pi',
            'Python',
            'Deep Learning (~85% Acc)',
            'YOLO Object Detection',
            'OpenCV',
            'Edge AI Hardware',
            'Prof. Dr. Rajesh Mehta'
        ],
        github: null,
        artifacts: []
    }
];

function ProjectsSlider() {
    const trackRef = useRef(null);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [lightboxImage, setLightboxImage] = useState(null);

    const scrollToProject = (index) => {
        const track = trackRef.current;
        if (!track || !track.children[index]) return;
        const target = track.children[index];
        const left = target.offsetLeft - (track.clientWidth - target.offsetWidth) / 2;
        track.scrollTo({ left: Math.max(0, left), behavior: 'smooth' });
        setCurrentIdx(index);
    };

    const handlePrev = () => {
        const next = Math.max(currentIdx - 1, 0);
        scrollToProject(next);
    };

    const handleNext = () => {
        const next = Math.min(currentIdx + 1, PROJECTS.length - 1);
        scrollToProject(next);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setLightboxImage(null);
            }
        };
        if (lightboxImage) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxImage]);

    // Synchronize currentIdx when user swipes or scrolls the track horizontally
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let timeoutId = null;
        const handleScroll = () => {
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                const scrollLeft = track.scrollLeft;
                const cardWidth = track.clientWidth;
                if (!cardWidth) return;
                const index = Math.round(scrollLeft / cardWidth);
                if (index >= 0 && index < PROJECTS.length) {
                    setCurrentIdx(index);
                }
            }, 50);
        };

        track.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            track.removeEventListener('scroll', handleScroll);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    return (
        <section id="projects" className="projects-section">
            <div className="section-wrapper">
                <div className="section-head">
                    <span className="section-badge">Open Source & Applied Systems</span>
                    <h2 className="section-title">
                        Featured <span className="google-gradient-text">Projects</span>
                    </h2>
                    <p className="section-desc">
                        Applied AI platforms, edge computer vision hardware, and open-source machine learning frameworks built with modern engineering practices.
                    </p>
                </div>

                <div className="projects-slider-container">
                    {/* Horizontal Track of Consistent Sized Cards */}
                    <div className="projects-slider-track" ref={trackRef}>
                        {PROJECTS.map((proj) => (
                            <div key={proj.id} className="project-slide-card">
                                {/* Top Category Badge */}
                                <div className="project-card-toprow">
                                    <span className={`interactive-chip ${proj.badgeClass}`}>
                                        {proj.badge}
                                    </span>
                                </div>

                                <h3 className="project-card-title">{proj.title}</h3>

                                <p className="project-card-desc">{proj.description}</p>

                                <div className="project-tags-wrap">
                                    {proj.tags.map((tag, i) => (
                                        <span key={i} className="interactive-chip">{tag}</span>
                                    ))}
                                </div>

                                {/* Bottom Row: Actions & Artifact Viewing Chips */}
                                <div className="project-action-row">
                                    {proj.github && (
                                        <a
                                            href={proj.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary"
                                        >
                                            <FaGithub size={15} />
                                            <span>View on GitHub</span>
                                            <FaExternalLinkAlt size={11} />
                                        </a>
                                    )}

                                    {/* Interactive Artifact Chips — Click to View in Lightbox */}
                                    {proj.artifacts && proj.artifacts.length > 0 && (
                                        <div className="project-artifacts-chips">
                                            {proj.artifacts.map((art, aIdx) => (
                                                <button
                                                    key={aIdx}
                                                    type="button"
                                                    className="project-artifact-chip"
                                                    onClick={() => setLightboxImage(art)}
                                                    title={`Click to view ${art.title}`}
                                                >
                                                    <FaImage size={13} className="art-chip-icon" />
                                                    <span>{art.label}</span>
                                                    <FaExpand size={10} className="art-chip-expand" />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Navigation Controls: Project 1 of X and Slider Icons */}
                    <div className="projects-bottom-controls">
                        {/* Project 1 of X Counter */}
                        <div className="projects-count-indicator">
                            Project <span className="count-current">{currentIdx + 1}</span> of <span className="count-total">{PROJECTS.length}</span>
                        </div>

                        {/* Slider Icons & Pagination */}
                        <div className="projects-slider-nav">
                            <button
                                type="button"
                                className="project-slider-btn"
                                onClick={handlePrev}
                                disabled={currentIdx === 0}
                                aria-label="Previous project"
                            >
                                <FaChevronLeft size={15} />
                            </button>

                            <div className="projects-pagination" role="tablist">
                                {PROJECTS.map((p, idx) => (
                                    <button
                                        key={p.id}
                                        type="button"
                                        className={`projects-dot-btn ${idx === currentIdx ? 'active' : ''}`}
                                        onClick={() => scrollToProject(idx)}
                                        role="tab"
                                        aria-selected={idx === currentIdx}
                                        aria-label={`View project ${idx + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                type="button"
                                className="project-slider-btn"
                                onClick={handleNext}
                                disabled={currentIdx === PROJECTS.length - 1}
                                aria-label="Next project"
                            >
                                <FaChevronRight size={15} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox Modal for Artifacts */}
            {lightboxImage && (
                <div className="diagram-modal-overlay" onClick={() => setLightboxImage(null)}>
                    <div className="diagram-modal-card" onClick={(e) => e.stopPropagation()}>
                        <div className="diagram-modal-header">
                            <h4 className="diagram-modal-title">{lightboxImage.title}</h4>
                            <button
                                type="button"
                                className="diagram-modal-close"
                                onClick={() => setLightboxImage(null)}
                                aria-label="Close modal"
                            >
                                <FaTimes size={18} />
                            </button>
                        </div>
                        <div className="diagram-modal-body">
                            <img src={lightboxImage.src} alt={lightboxImage.title} className="diagram-modal-img" />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default ProjectsSlider;
