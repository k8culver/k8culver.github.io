import { useState } from "react";
import Word from "./Word";

function WordMap(props) {
    const { words } = props;

    const [flipped, setFlipped] = useState(-1);

    const handleFlip = (e, id) => {
        e.preventDefault();
        setFlipped(id);
    };

    return (
        <ul className="list-none flex flex-wrap items-center justify-center max-w-3xl m-auto">
            {
                words.map((word, index) => {
                    return (
                        <li key={index} className="px-4">
                            <Word word={word} isFlipped={flipped === index} handleFlip={handleFlip} id={index} />
                        </li>
                    )
                })
            }
        </ul>
    );
  }
  
  export default WordMap;
  