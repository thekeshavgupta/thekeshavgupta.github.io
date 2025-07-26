import './Overview.css'
import { useState, useEffect } from 'react';
function Overview() {
    const wordList = ['Hello,', 'Hola!!', 'Namaste,', 'Bonjour!'];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % wordList.length);
        }, 1000); // change word every 2 seconds

        return () => clearInterval(interval); // cleanup on unmount
    }, []);

    return (
        <div className="overview-main-class">
            <div className='overview-box'>
                <div className='overview-headings'>
                    <p className='overview-h1'>
                        <span className="magic-word-overview">{wordList[currentIndex]}</span>
                    </p>
                    <p className='overview-h1'>
                        I'm Keshav
                    </p>
                </div>
                <p className='overview'>
                    "Passionate about the intersection of data and innovation, I specialize in machine learning, deep learning, and natural language processing (NLP) to craft intelligent systems that solve real-world challenges."
                </p>
                <p className='overview'>
                    "My expertise spans from leveraging complex healthcare datasets like MIMIC-III to developing engaging web applications, always driven by a commitment to blend technology, data, and creativity for meaningful impact."
                </p>
            </div>
        </div>
    );
}

export default Overview