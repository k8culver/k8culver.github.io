import { useState, useEffect } from "react";


function AboutMe() {
    const fullTitle = 'About Me';
    const fullText = `I am a software engineer with over 5 years of professional experience. 
    I love thinking outside the box, problem solving, and puzzles. 
    I'm passionate about creating exceptional customer journeys, designing intuitive interfaces, and crafting clean and readable code. 
    When it comes to my work, I'm highly engaged, eager to contribute, learn, and develop my skills further.`

    const [textStart, setTextStart] = useState('');
    const [textEnd, setTextEnd] = useState(fullText);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        if (textIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setTextStart(prevText => prevText + fullText[textIndex]);
                setTextEnd(prevText => prevText.substring(1));
                setTextIndex(prevIndex => prevIndex + 1);
            }, 60);
      
            return () => clearTimeout(timeout);
        }
    }, [textIndex, fullText]);


    return (
        <div className="px-4 max-w-3xl m-auto mt-20">
            <h1 className="text-teal">{fullTitle}</h1>
            <p className="text-white"><span>{textStart}</span><span className="text-teal-dark">{textEnd}</span></p>
        </div>
    );
}

export default AboutMe;
