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

    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)

    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 50

    const onTouchStart = (e) => {
        setTouchEnd(null)
        setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance
        if (isLeftSwipe || isRightSwipe) {
            if (isLeftSwipe) handleNext()
            if (isRightSwipe) handlePrev()
        }
    }

    return (
        <div className="projects-main-class" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            <p className='projects-head'>Side <span className="magic-word"> Projects</span></p>
            <div className="projects-carousel-container">
                <button className="carousel-arrow carousel-arrow-left" onClick={handlePrev}>
                    <FaChevronLeft size={28} />
                </button>

                <div className="projects-carousel" ref={carouselRef}>
                    <div className="projects-box" key={currentIndex}>
                        <h3 className='projects-head-location' style={{ marginBottom: '1.2rem', gap: '0.7rem' }}>
                            <span className="magic-word">{currentProject.title}</span>
                            {currentProject.link && (
                                <a href={currentProject.link} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '0.7rem', display: 'flex', alignItems: 'center' }}>
                                    <FaGithub style={{ fontSize: '22px', verticalAlign: 'middle' }} color='white' />
                                </a>
                            )}
                        </h3>
                        <p className='projects projects-desc'>
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