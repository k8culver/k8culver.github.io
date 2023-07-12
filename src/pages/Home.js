import Button from "../components/Button";
import Canvas from "../components/Canvas/Canvas";
import LotsOfBlocks from "../components/LotsOfBlocks/LotsOfBlocks";
import Resume from "../copy/Resume";

function Home() {
    return (
        <>
            <Canvas />
            <div className="container m-auto">
                <h1 className='text-teal font-light font-sans'>Hello my name is Kate</h1>
                <p className='text-teal-black font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                <Button text='Test Button' />
                <Button text='Test Button' type='outline' />
                <Button text='Test Button' type='outline--purple' />
                
            </div>
            <LotsOfBlocks components={<Resume />} color="teal" />
        </>
    );
}

export default Home;
