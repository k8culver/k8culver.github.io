function StyleGuide() {
  return (
    <div className="bg-white h-screen">
        <div className="container m-auto pt-20">
            <div>
                <div className="bg-teal h-20 w-20 inline-block"></div>
                <div className="bg-teal-light h-20 w-20 inline-block"></div>
                <div className="bg-purple h-20 w-20 inline-block"></div>
                <div className="bg-white h-20 w-20 inline-block"></div>
                <div className="bg-black h-20 w-20 inline-block"></div>
            </div>
            <h1 className="text-teal font-light font-sans">Hello my name is Kate</h1>
            <p className="text-teal-black font-serif">This is my style guide.</p>
            <a href="/">This is a link</a>
            <div class="grid grid-cols-4 gap-4 mt-10">
                <div><button><span>Primary Action</span></button></div>
                <div><button className="button button--outline"><span>Secondary Action</span></button></div>
                <div><button className="button button--outline--purple"><span>Secondary Action</span></button></div>
            </div>
        </div>
    </div>
  );
}

export default StyleGuide;
