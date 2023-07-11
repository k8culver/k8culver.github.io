import Button from "../components/Button";
import GreyBlock from "../components/GreyBlock/GreyBlock";
import Resume from "../copy/Resume";

function Home() {
    return (
        <>
            <div className="container m-auto">
                <h1 className='text-teal font-light font-sans'>Hello my name is Kate</h1>
                <p className='text-teal-black font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                <Button text='Test Button' />
                <Button text='Test Button' type='outline' />
                <Button text='Test Button' type='outline--purple' />
                
            </div>
            <GreyBlock components={<Resume />} />
        </>
    );
}

export default Home;
