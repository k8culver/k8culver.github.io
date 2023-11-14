import Button from "../Button";

function Review(props) {
    const { text, author, link, classes, first } = props;

    return (
        <div className={`
            flex items-center justify-center
            border-solid border-gold border-4
            bg-teal-darker
            p-4
            ${first ? '' : 'mt-10'}
            shadow-pixels shadow-purple-hover
            ${classes}
        `}>
            <div>
                <p className="text-white mb-2">{text}</p>
                <div className="sm:flex justify-between items-end">
                    <p className="caption italic text-teal-light mb-0">~ {author}</p>
                    {
                        !!link &&
                        <div className="sm:ml-4 mt-4 sm:mt-0">
                            <Button text="Read full review" link={link} newTab={true} styleType="outline--gold" />
                        </div>
                    }
                
                </div>
            </div>
        </div>
    );
}

export default Review;
