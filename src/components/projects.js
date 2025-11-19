import './projects.css'
import { FaGithub } from "react-icons/fa";
import { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    const projects = [
        {
            title: "V.I.B.E : Variational Information Bottleneck for Embedding",
            description: "VIBE is a machine learning framework designed to remove unwanted biases from text embeddings while preserving useful information for downstream tasks. It uses adversarial learning and dimensionality reduction techniques to achieve fair representations.",
            images: ["/images/vibe/v2.png", "/images/vibe/v3.png"],
            link: "https://github.com/thekeshavgupta/VIBE"
        },
        {
            title: "AURA : Adaptive Unified Regularization Approach in Gradient Descent",
            description: "AURA is a novel optimization approach inspired from reinforcement learning, Adam as well as AdamW, designed to enhance the performance of gradient descent. By observing the current state of environment variables and adapting the update strategy accordingly, AURA aims to achieve faster convergence and lower error rates compared to traditional gradient descent methods.",
            images: ["/images/optimizer_comparison_hf.gif"],
            link: null
        },
        {
            title: "KisanMate",
            description: "KisanMate is a mobile application developed under the guidance of Prof. Dr. P.S. Rana to assist farmers in crop disease prediction and nutrient analysis. It uses a CNN model with ~90% accuracy to enhance crop quality. The app was built using Flutter, Python, Deep Learning, Flask, and deployed via Heroku.",
            images: [],
            link: null
        },
        {
            title: "Aid for blind - Smart Stick",
            description: "Aid for Blind is a smart stick developed under the guidance of Prof. Dr. Rajesh Mehta to assist visually impaired and elderly individuals with easier navigation. It incorporates a machine learning model with ~85% accuracy and leverages technologies such as Python, Deep Learning, YOLO, OpenCV, and Raspberry Pi.",
            images: [],
            link: null
        }
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    const currentProject = projects[currentIndex];

    return (
        <div className="projects-main-class">
            <p className='projects-head'>Side <span className="magic-word"> Projects</span></p>
            <div className="projects-carousel-container">
                <button className="carousel-arrow carousel-arrow-left" onClick={handlePrev}>
                    <FaChevronLeft size={28} />
                </button>

                <div className="projects-carousel" ref={carouselRef}>
                    <div className="projects-box" key={currentIndex}>
                        <h3 className='projects-head-location'>{currentProject.title}
                            {currentProject.link && (
                                <a href={currentProject.link} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '1rem' }}>
                                    <FaGithub style={{ fontSize: '20px' }} color='white' />
                                </a>
                            )}
                        </h3>
                        <p className='projects'>
                            {currentProject.description}
                        </p>
                        {currentProject.images.length > 0 && (
                            <div className='projects-images'>
                                {currentProject.images.map((image, index) => (
                                    <img key={index} className='project-image' src={image} alt={`Project Image ${index + 1}`} style={{ width: '50%', height: '50%' }} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <button className="carousel-arrow carousel-arrow-right" onClick={handleNext}>
                    <FaChevronRight size={28} />
                </button>
            </div>

            <div className="carousel-indicators">
                {projects.map((_, index) => (
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

export default Projects