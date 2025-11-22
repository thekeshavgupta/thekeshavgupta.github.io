import './research.css';
import React, { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaLink } from "react-icons/fa";

function Research() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const carouselRef = useRef(null);

    const publications = [
        {
            title: "An adaptive framework to image watermarking based on the twin support vector regression and genetic algorithm in lifting wavelet transform domain",
            authors: "Mehta R, Gupta K, and Yadav AK",
            description: "Proposes a robust image watermarking framework using twin support vector regression and genetic algorithms in the lifting wavelet domain. Multimed Tools Appl 2020 79:18657-18678.",
            link: "https://doi.org/10.1007/s11042-020-08634-x"
        },
        {
            title: "GRAIN: Gated Recurrent Adaptive Integration Network",
            authors: "Gupta K",
            description: "GRAIN introduces a modified GRU architecture that integrates a dynamic EWMA of past hidden states. This smooths the transition between timesteps and reduces instability during training. The approach improves generalization without increasing model complexity significantly. Experiments show consistent accuracy gains over GRU, LSTM and GRU + dropout baselines.",
            link: "https://dx.doi.org/10.21203/rs.3.rs-8070545/v1"
        },
        {
            title: "AIR: Activation based Isotropic Regularisation",
            authors: "Gupta K",
            description: "AIR proposes a new regularization strategy that acts directly on activation outputs rather than weights. By reducing activation variance across samples, networks develop more stable internal feature representations. A hybrid version(AIR + L2) combines weight - and activation - level control for stronger generalization. Tests on MLP and CNN models demonstrate improved convergence robustness over conventional regularizers.",
            link: "https://dx.doi.org/10.21203/rs.3.rs-8005826/v1"
        },
        {
            title: "AURA: An Adaptive Unified Regularization Approach for Gradient-Based Optimization",
            authors: "Gupta K",
            description: "AURA is a new optimization strategy that keeps the learning rate constant while dynamically adjusting momentum. Momentum is adapted based on loss patterns, gradient magnitude, and update direction alignment. This helps the optimization process react intelligently to training conditions and avoid divergence. Across regression and classification tasks, AURA outperforms or matches Adam, RMSProp and other adaptive optimizers.",
            link: "https://dx.doi.org/10.21203/rs.3.rs-7480833/v1"
        },
        // Add more publications as needed, with title, authors, description, and link
    ];

    const handleNext = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % publications.length);
            setFade(true);
        }, 10);
    };

    const handlePrev = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + publications.length) % publications.length);
            setFade(true);
        }, 10);
    };

    // Trigger fade on index change
    React.useEffect(() => {
        setFade(true);
        return () => setFade(false);
    }, [currentIndex]);

    const currentPub = publications[currentIndex];

    return (
        <div className="research-main-class">
            <p className='research-head'><span className="magic-word"> Research</span> Publications</p>
            <div className="projects-carousel-container">
                <button className="carousel-arrow carousel-arrow-left" onClick={handlePrev}>
                    <FaChevronLeft size={28} />
                </button>

                <div className="projects-carousel" ref={carouselRef}>
                    <div className={`research-box${fade ? ' fade' : ''}`} key={currentIndex}>
                        <h3 className='research-head-location'>
                            <span className="magic-word">{currentPub.title}</span>
                            {currentPub.link && (
                                <a href={currentPub.link} target="_blank" rel="noopener noreferrer" className="research-link" style={{ marginLeft: '0.5rem' }}>
                                    <FaLink style={{ fontSize: '22px', verticalAlign: 'middle', color: 'white' }} title="View Publication" />
                                </a>
                            )}
                        </h3>
                        <div className='research-authors'><b>Authors:</b> {currentPub.authors}</div>
                        <p className='research'>{currentPub.description}</p>
                    </div>
                </div>

                <button className="carousel-arrow carousel-arrow-right" onClick={handleNext}>
                    <FaChevronRight size={28} />
                </button>
            </div>

            <div className="carousel-indicators">
                {publications.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Research;