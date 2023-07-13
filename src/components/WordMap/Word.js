function Word(props) {
    const { word } = props; // prop:word is an object with a word, a value, a description, and classes

    const calculateFontSize = (value) => {
        const minSize = 12;
        const maxSize = 54;
        const minValue = 1;
        const maxValue = 5;
        const sizeRange = maxSize - minSize;
        return minSize + (value - minValue) * (sizeRange / (maxValue - minValue));
    };

    return (
        <a href="#" style={{ fontSize: calculateFontSize(word.value) }}>
            <span className={`${word.classes}`}>
                {word.text}
            </span>
        </a>
    );
  }
  
  export default Word;
  