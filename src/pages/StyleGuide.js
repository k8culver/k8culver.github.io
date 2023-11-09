import Button from "../components/Button";

function StyleGuide() {
  return (
    <div className="container m-auto">
        <div className="pt-20">
            <div>
                <div className="bg-teal-light h-20 w-20 inline-block"></div>
                <div className="bg-teal h-20 w-20 inline-block"></div>
                <div className="bg-teal-dark h-20 w-20 inline-block"></div>
                <div className="bg-teal-darker h-20 w-20 inline-block"></div>
                <div className="bg-purple h-20 w-20 inline-block"></div>
                <div className="bg-purple-hover h-20 w-20 inline-block"></div>
                <div className="bg-gold h-20 w-20 inline-block"></div>
                <div className="bg-white h-20 w-20 inline-block"></div>
                <div className="bg-black h-20 w-20 inline-block"></div>
            </div>
            <h1>Hello my name is Kate</h1>
            <p>This is my style guide.</p>
            <a href="/">This is a link</a>
            <div class="grid md:grid-cols-4 gap-4 mt-10">
                <Button text='Test Button' />
                <Button text='Test Button' styleType='outline' />
                <Button text='Test Button' styleType='outline--purple' />
            </div>
        </div>
    </div>
  );
}

export default StyleGuide;
