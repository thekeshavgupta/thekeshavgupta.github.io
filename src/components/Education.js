import './Education.css'
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Education() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const educations = [
        {
            degree: "Master's in Artificial Intelligence",
            school: "University of Texas at Austin, USA | (Jan. 2024 - Present)",
            description: "I am currently pursuing a Master's degree in Artificial Intelligence, where I have gained foundational and practical knowledge in key areas such as Machine Learning (ML), Deep Learning (DL), and Generative Models. Through coursework and hands-on projects, I have developed a solid understanding of these domains and continue to build on this knowledge with real-world applications. My current GPA stands at 3.66 out of 4, reflecting consistent academic performance in this field."
        },
        {
            degree: "Bachelor's in Computer Engineering",
            school: "Thapar Institute of Engineering & Technology, Patiala | (2016 - 2020)",
            description: "I completed my Bachelor of Engineering (B.E.) with a CGPA of 9.41 out of 10 and gained a strong foundation in core computer science subjects like Programming, Data Structures, Algorithms, and Databases. Through academic projects and hands-on work, I developed key technical and problem-solving skills, which sparked my interest in Artificial Intelligence and led me to pursue further studies in the field."
        }
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % educations.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + educations.length) % educations.length);
    };

    const currentEducation = educations[currentIndex];

    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)

    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 50

    const onTouchStart = (e) => {
        setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
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
        <div className="education-main-class" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            <p className='education-head-title'><span className="magic-word">Education</span></p>
            <div className="education-carousel-container">
                <button className="carousel-arrow carousel-arrow-left" onClick={handlePrev}>
                    <FaChevronLeft size={28} />
                </button>

                <div className="education-carousel">
                    <div className="education-box" key={currentIndex}>
                        <p className='education-head'><span className="magic-word">{currentEducation.degree}</span></p>
                        <p className='education-head-location'>{currentEducation.school}</p>
                        <p className='education'>
                            {currentEducation.description}
                        </p>
                    </div>
                </div>

                <button className="carousel-arrow carousel-arrow-right" onClick={handleNext}>
                    <FaChevronRight size={28} />
                </button>
            </div>

            <div className="carousel-indicators-edu">
                {educations.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator-edu ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Education