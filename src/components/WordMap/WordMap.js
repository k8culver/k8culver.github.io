import { useState } from "react";
import Word from "./Word";

function WordMap(props) {
    const { words } = props;

    const [flipped, setFlipped] = useState(-1);

    const handleFlip = (e, id) => {
        e.preventDefault();
        setFlipped(id);
    };

    const exitFlip = (e, id) => {
        e.preventDefault();
        setFlipped(-1);
    };

    return (
        <ul className="list-none px-4 flex flex-wrap items-center justify-center max-w-3xl m-auto">
            {
                words.map((word, index) => {
                    return (
                        <li key={index} className="px-4">
                            <Word word={word} isFlipped={flipped === index} handleFlip={handleFlip} exitFlip={exitFlip} id={index} />
                        </li>
                    )
                })
            }
        </ul>
    );
  }
  
  export default WordMap;
  