import { useState, useEffect } from "react";


function AboutMe() {
    const fullTitle = 'About Me';
    const fullText = `I am a software engineer and self-proclaimed math enthusiast who finds joy in belting out show tunes and impromptu dancing. 
    With over five years of experience as a full-stack Software Engineer, I have worked with a diverse array of languages, including (but not limited to) Python, JavaScript, React, HTML, CSS, PHP, GraphQL, and Node.JS.
    I graduated from the University of Victoria in 2017 with a Bachelor of Science in Mathematics, a minor in Computer Science, and the knowledge that two parallel lines intersect at infinity. 
    My capacity for creative thinking, complemented by strong analytical skills, makes me an exceptional problem solver. 
    I can write readable and efficient code, design and build beautiful intuitive interfaces, and I have all the lyrics to Rent's La Vie Boheme memorized. 
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
            }, 40);
      
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
