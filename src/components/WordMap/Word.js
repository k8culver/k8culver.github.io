function Word(props) {
    const { word, isFlipped, handleFlip, id } = props; // prop:word is an object with a word, a value, a description, and classes

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
            <div className={`
                ${isFlipped ? 'absolute' : 'hidden'}
                z-10
                bg-teal
                p-4
                rounded
                after:content-[''] 
                after:top-full
                after:absolute after:left-1/3
                after:w-0 after:h-0 
                after:border-solid after-border-transparent after:border-8 after:border-b-0 after:border-t-teal
                `}
                style={{ bottom: (calculateFontSize(word.value) + 14)}}
            >
                <p className="m-0 text-teal-light font-medium">{ word.description }</p>
            </div>
            <button style={{ fontSize: calculateFontSize(word.value), pointerEvents: isFlipped ? 'none' : 'auto' }} className={`unstyled ${isFlipped ? 'disabled' : ''}`} onClick={(e) => handleFlip(e, id)}>
                <span className={`${word.classes} font-semibold`}>
                    {word.text}
                </span>
            </button>
        </div>
    );
  }
  
  export default Word;
  