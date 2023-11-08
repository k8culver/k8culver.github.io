import Button from "../Button";

function Review(props) {
    const { text, author, link, classes } = props;

    return (
        <div className={`flex items-center justify-center rounded-full bg-teal border-solid border-teal-light border-16 p-10 sm:p-16 mt-10 ${classes}`}>
            <div>
                <p className="text-white">{text}</p>
                <div className="sm:flex justify-between text-center">
                    <p className="caption italic text-teal-light mb-0">~ {author}</p>
                    {
                        !!link &&
                        <div className="ml-4 mt-4 sm:mt-0">
                            <Button text="Read full review" link={link} />
                        </div>
                    }
                
                </div>
            </div>
        </div>
    );
}

export default Review;
