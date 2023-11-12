import Button from "../Button";

function Review(props) {
    const { text, author, link, classes } = props;

    return (
        <div className={`flex items-center justify-center bg-purple p-4 mt-10 shadow-pixels shadow-purple-hover ${classes}`}>
            <div>
                <p className="text-white">{text}</p>
                <div className="sm:flex justify-between text-center">
                    <p className="caption italic text-purple-hover mb-0">~ {author}</p>
                    {
                        !!link &&
                        <div className="ml-4 mt-4 sm:mt-0">
                            <Button text="Read full review" link={link} styleType="outline" />
                        </div>
                    }
                
                </div>
            </div>
        </div>
    );
}

export default Review;
