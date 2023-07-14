import Canvas from "../components/Canvas/Canvas";
import ContactForm from "../components/ContactForm";
import LotsOfBlocks from "../components/LotsOfBlocks/LotsOfBlocks";
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
                <h1>Hello my name is Kate</h1>
                <AboutMe />
                
            </div>
            <WordMap words={words} />
            <LotsOfBlocks components={<Resume />} color="teal" />
            <div className="container m-auto">
                <Reviews />
            </div>
            <LotsOfBlocks components={<ContactForm />} color="teal" />
        </>
    );
}

export default Home;
