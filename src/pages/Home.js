import Canvas from "../components/Canvas/Canvas";
import ContactForm from "../components/ContactForm";
import LotsOfBlocks from "../components/LotsOfBlocks/LotsOfBlocks";
import WordMap from "../components/WordMap/WordMap";
import AboutMe from "../copy/AboutMe";
import Resume from "../copy/Resume";
import Reviews from "../copy/Reviews";

function Home() {
    const words = [
        { text: 'React', value: 5, classes: 'text-teal' },
        { text: 'CSS', value: 5, classes: 'text-teal' },
        { text: 'SCSS', value: 3, classes: 'text-teal' },
        { text: 'LESS', value: 3, classes: 'text-teal' },
        { text: 'TypeScript', value: 4, classes: 'text-teal' },
        { text: 'Node.js', value: 2, classes: 'text-purple' },
        { text: 'Python', value: 4, classes: 'text-purple' },
        { text: 'Git', value: 4, classes: 'text-teal-light' },
        { text: 'GraphQL', value: 3, classes: 'text-purple' },
        { text: 'Java', value: 3, classes: 'text-purple' },
        { text: 'C', value: 2, classes: 'text-purple' },
        { text: 'SQL', value: 2, classes: 'text-purple' },
        { text: 'JavaScript', value: 5, classes: 'text-teal' },
        { text: 'HTML', value: 5, classes: 'text-teal' },
        { text: 'MongoDB', value: 1, classes: 'text-purple' },
        { text: 'Jest', value: 2, classes: 'text-teal-light' },
        { text: 'PostgreSQL', value: 1, classes: 'text-purple' },
        { text: 'Django', value: 4, classes: 'text-teal' },
        { text: 'PHP', value: 1, classes: 'text-teal' },
        { text: 'AWS', value: 2, classes: 'text-teal-light' },
        { text: 'Gatsby', value: 3, classes: 'text-teal-light' },
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
