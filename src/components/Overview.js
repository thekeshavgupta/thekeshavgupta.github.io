import './Overview.css'
import { useState, useEffect } from 'react';
function Overview() {
    const wordList = [
        'Hello!',      // English
        '¡Hola!',      // Spanish
        'नमस्ते',      // Hindi (Namaste)
        'Bonjour!',    // French
        'Hallo',      // German
        '你好',       // Mandarin Chinese (Nǐ hǎo)
        'Ciao',       // Italian
        'مرحبا',      // Arabic (Marhaba)
        'Привет',     // Russian (Privet)
        'Olá',        // Portuguese
        '안녕하세요'   // Korean (Annyeonghaseyo)
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % wordList.length);
        }, 2000); // change word every 2 seconds

        return () => clearInterval(interval); // cleanup on unmount
    }, []);

    return (
        <div className="overview-main-class">
            <div className='overview-box'>
                <div className='overview-headings'>
                    <p className='overview-h1'>
                        <span className="magic-word-overview">{' it\'s Keshav, ' + wordList[currentIndex]}</span>
                    </p>
                </div>
                <p className='overview'>
                    "Passionate about the intersection of data and innovation, I specialize in Machine Learning, Deep Learning, and Natural Language Processing (NLP) to craft intelligent systems that solve real-world challenges."
                </p>
                <p className='overview'>
                    "My expertise spans from leveraging complex healthcare datasets like MIMIC-III to developing engaging web applications, always driven by a commitment to blend technology, data, and creativity for meaningful impact."
                </p>
            </div>
        </div>
    );
}

export default Overview