import Canvas from "../components/Canvas/Canvas";
import ContactForm from "../components/ContactForm";
import LotsOfBlocks from "../components/LotsOfBlocks/LotsOfBlocks";
import Timeline from "../components/Timeline/Timeline";
import WordMap from "../components/WordMap/WordMap";
import AboutMe from "../copy/AboutMe";
import Resume from "../copy/Resume";
import Reviews from "../copy/Reviews";

function Home() {
    const words = [
        { text: 'Python', value: 4, classes: 'text-purple', description: '2 years professional, university training' },
        { text: 'React', value: 5, classes: 'text-teal', description: '3 years professional' },
        { text: 'AWS', value: 2, classes: 'text-teal-light', description: '3 years professional' },
        { text: 'CSS', value: 5, classes: 'text-teal', description: '5 years professional' },
        { text: 'TypeScript', value: 3, classes: 'text-teal', description: '2.5 years professional' },
        { text: 'Node.js', value: 2, classes: 'text-purple', description: '2 years professional' },
        { text: 'Git', value: 4, classes: 'text-teal-light', description: '5 years professional' },
        { text: 'GraphQL', value: 3, classes: 'text-purple', description: '2.5 years professional' },
        { text: 'Java', value: 2, classes: 'text-purple', description: 'university training' },
        { text: 'MongoDB', value: 1, classes: 'text-purple', description: '2 years professional' },
        { text: 'Elasticsearch', value: 2, classes: 'text-teal-light', description: '2.5 years professional' },
        { text: 'SQL', value: 2, classes: 'text-purple', description: '2 years professional, university training' },
        { text: 'JavaScript', value: 5, classes: 'text-teal', description: '5 years professional' },
        { text: 'Jest', value: 2, classes: 'text-teal-light', description: '2 years professional' },
        { text: 'HTML', value: 5, classes: 'text-teal', description: '5 years professional' },
        { text: 'PostgreSQL', value: 1, classes: 'text-purple', description: '2 years professional' },
        { text: 'Agile', value: 4, classes: 'text-teal-light', description: '5 years professional' },
        { text: 'PHP', value: 1, classes: 'text-purple', description: '0.5 years professional' },
        { text: 'Assembly', value: 2, classes: 'text-purple', description: 'university training' },
        { text: 'Gatsby', value: 3, classes: 'text-teal-light', description: '2.5 years professional' },
        { text: 'C', value: 2, classes: 'text-purple', description: 'university training' },
        { text: 'Django', value: 4, classes: 'text-teal', description: '2 years professional' },
        { text: 'Figma', value: 3, classes: 'text-teal-light', description: '2 years professional' },
        { text: 'Insomnia', value: 3, classes: 'text-teal-light', description: '3 years professional' },
      ];


    return (
        <>
            <Canvas />
            <div className="container m-auto">
                <AboutMe />
            </div>
            <WordMap words={words} />
            <LotsOfBlocks components={<><Timeline /></>} color="teal" />
            <div className="container m-auto">
                <Reviews />
            </div>
            <LotsOfBlocks components={<ContactForm />} color="teal" />
            <p className="caption--small text-teal mb-0 pb-4">Conceptualized, designed, and developed by Kate Culver © 2023</p>
        </>
    );
}

export default Home;
