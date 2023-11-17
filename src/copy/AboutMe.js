import { useState, useEffect } from "react";


function AboutMe() {
    const fullTitle = 'About Me';
    const fullText = `I have over 5 years of experience working as a software engineer and completed my Bachelor of Science in Mathematics with a minor in Computer Science in 2017. 
    Combining creative thinking with strong analytical skills, I excel in problem-solving, writing efficient code, and designing intuitive interfaces.
    I'm currently spending my spare time knitting, painting, and taking machine learning courses.`

    const [textStart, setTextStart] = useState('');
    const [textEnd, setTextEnd] = useState(fullText);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        if (textIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setTextStart(prevText => prevText + fullText[textIndex]);
                setTextEnd(prevText => prevText.substring(1));
                setTextIndex(prevIndex => prevIndex + 1);
            }, 20);
      
            return () => clearTimeout(timeout);
        }
    }, [textIndex, fullText]);


    return (
        <div className="px-4 max-w-3xl mx-auto my-20">
            <h1 className="text-teal">{fullTitle}</h1>
            <p className="text-white"><span>{textStart}</span><span className="text-teal-dark">{textEnd}</span></p>
        </div>
    );
}

export default AboutMe;
