import Word from "./Word";

function WordMap(props) {
    const { words } = props;

    return (
        <ul className="list-none flex flex-wrap items-center justify-center max-w-3xl m-auto">
            {
                words.map((word, index) => {
                    return (
                        <li key={index} className="px-4">
                            <Word word={word} />
                        </li>
                    )
                })
            }
        </ul>
    );
  }
  
  export default WordMap;
  