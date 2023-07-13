import Canvas from "../components/Canvas/Canvas";
import ContactForm from "../components/ContactForm";
import LotsOfBlocks from "../components/LotsOfBlocks/LotsOfBlocks";
import AboutMe from "../copy/AboutMe";
import Resume from "../copy/Resume";
import Reviews from "../copy/Reviews";

function Home() {
    return (
        <>
            <Canvas />
            <div className="container m-auto">
                <h1>Hello my name is Kate</h1>
                <AboutMe />
                
            </div>
            <LotsOfBlocks components={<Resume />} color="teal" />
            <div className="container m-auto">
                <Reviews />
            </div>
            <LotsOfBlocks components={<ContactForm />} color="teal" />
        </>
    );
}

export default Home;
