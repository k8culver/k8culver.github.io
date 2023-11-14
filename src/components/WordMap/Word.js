function Word(props) {
    const { word, isFlipped, handleFlip, exitFlip, id } = props; // prop:word is an object with a word, a value, a description, and classes

    const calculateFontSize = (value) => {
        const minSize = 14;
        const maxSize = 54;
        const minValue = 1;
        const maxValue = 5;
        const sizeRange = maxSize - minSize;
        return minSize + (value - minValue) * (sizeRange / (maxValue - minValue));
    };

    return (
        <div className="relative">
            <div className={``}>
                <div className={`
                    ${isFlipped ? 'absolute' : 'hidden'}
                    z-10
                    fade-in
                    ${isFlipped ? 'fade-in-visible' : ''}
                    pointer-events-none
                    bg-teal
                    border-solid
                    border-gold
                    border-2
                    p-4
                    rounded
                    after:content-[''] 
                    after:-bottom-[10px]
                    after:absolute after:left-1/3
                    after:w-4 after:h-4 
                    after:bg-teal
                    after:border-solid after:border-t-teal after:border-l-teal after:border-b-gold after:border-r-gold after:border-2
                    after:rotate-45
                    `}
                >
                    <p className="m-0 caption--small text-teal-light font-medium pointer-events-none uppercase">{ word.description }</p>
                </div>
            </div>
            
            <button
                style={{ fontSize: calculateFontSize(word.value) }}
                className={`unstyled ${isFlipped ? 'disabled' : ''}`}
                onMouseEnter={(e) => handleFlip(e, id)}
                onMouseLeave={(e) => exitFlip(e, id)}
            >
                <span className={`${word.classes} font-semibold`}>
                    {word.text}
                </span>
            </button>
        </div>
    );
  }
  
  export default Word;
  