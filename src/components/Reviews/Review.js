import Button from "../Button";

function Review(props) {
    const { text, author, link } = props;

    return (
        <div className="rounded-full bg-teal border-solid border-teal-light border-16 p-16 mt-10">
            <p className="text-white">{text}</p>
            <div className="flex justify-between">
                <p className="caption italic text-teal-light mb-0">~ {author}</p>
                {
                    !!link &&
                     <div className="ml-4">
                        <Button text="Read full review" styleType="outline--purple" link={link} />
                    </div>
                }
               
            </div>
        </div>
    );
}

export default Review;
