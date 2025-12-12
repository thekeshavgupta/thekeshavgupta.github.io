import './WorkExperience.css'
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function WorkExperience() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const experiences = [
        {
            company: "Microsoft",
            position: "Software Engineer 2 - (Nov. 2024 - Present)",
            isMs: true,
            details: [
                "In order to reduce operational costs arising from human intervention, I did deep dive into existing processes and discussion threads to identify inefficiencies and automation opportunities as well as designed an AI-driven agentic automation workflow leveraging Azure technologies so as to streamline manual steps, improve reliability, and minimize recurring human effort.",
                "Optimized triggering logic to improve precision and recall, resulting in more accurate and relevant hotel answers for user queries.",
                "Led analysis and enhancement of Bing Hotel Answers price coverage, expanding hotel price visibility across various geographies."
            ]
        },
        {
            company: "Amazon",
            position: "Software Development Engineer - (Jan. 2021 - Nov. 2024)",
            isAmazon: true,
            details: [
                "Collaborated with multiple teams at Amazon to develop scalable, maintainable systems using Kotlin, Spark, and Scala and played a key role in optimizing the Ordering Checkout Process in Just Walk Out (JWO) systems, significantly reducing on-call operational load and improving system reliability.",
                "Designed and implemented full-stack features for a unified research portal, including frontend webpages and backend services. This portal enabled researchers to efficiently evaluate dataset outputs and review annotation summaries, streamlining the research workflow under Amazon Go.",
                "Delivered impactful features that improved the efficiency and accuracy of annotators working with large datasets, enhancing the overall data annotation pipeline and contributing to higher-quality training data for downstream machine learning models."
            ]
        },
        {
            company: "Optum Global Solutions India Pvt. Ltd.",
            position: "Software Engineer - (Jul. 2020 - Jan. 2021)",
            isOptum: true,
            details: [
                "Understood the key details about healthcare systems as well as learnt certain big data technologies such as Spark & Hadoop during probation period."
            ]
        }
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + experiences.length) % experiences.length);
    };

    const currentExperience = experiences[currentIndex];

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
        <div className="experience-main-class" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            <p className='experience-head-title'>Work <span className="magic-word">Experience</span></p>
            <div className="experience-carousel-container">
                <button className="carousel-arrow carousel-arrow-left" onClick={handlePrev}>
                    <FaChevronLeft size={28} />
                </button>

                <div className="experience-carousel">
                    <div className="experience-box" key={currentIndex}>
                        <p className='experience-head'>
                            <span className={currentExperience.isMs ? "microsoft-text" : currentExperience.isAmazon ? "amazon-text" : "optum-text"}>
                                {currentExperience.company}
                            </span>
                        </p>
                        <p className='experience-head-location'>{currentExperience.position}</p>
                        <p className='experience'>
                            <ul>
                                {currentExperience.details.map((detail, index) => (
                                    <li key={index}>{detail}</li>
                                ))}
                            </ul>
                        </p>
                    </div>
                </div>

                <button className="carousel-arrow carousel-arrow-right" onClick={handleNext}>
                    <FaChevronRight size={28} />
                </button>
            </div>

            <div className="carousel-indicators-exp">
                {experiences.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator-exp ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default WorkExperience