import Review from "./Review";
import background from '../../static/background.jpg';

function Reviews() {
    return (
        <div className="bg-cover shadow-inner-top-bottom shadow-teal-darker" style={{ 
            backgroundImage: `url(${background})`
          }}>
            <div className="container m-auto -my-96 py-96">
                <div className="max-w-3xl m-auto">
                    <div className="grid grid-flow-row-dense grid-flow-col auto-cols-auto">
                        <Review
                            text='"Kate is a sharp, resourceful developer who uplifts her team and 
                            encourages quality work... 
                            I often learned from her creative approach, and trusted her to ensure that the users of our applications had a great experience.

                            When given incomplete requirements, she identifies this and seeks to define the problem. 
                            She will collaborate with her colleagues and use her own strengths in problem solving and design to find a solution."'
                            author="Peter, former colleague"
                            link="https://www.linkedin.com/in/kate-culver-333388143"
                            first={true}
                        />
                        <Review
                            text={`"Kate's attention to detail sets her apart, whether code, grammar, design, or UX. She's an excellent source for constructive criticism on projects."`}
                            author="James, former colleague"
                            link="https://www.linkedin.com/in/kate-culver-333388143"
                        />
                        <Review
                            text='"I would describe Kate as socially intelligent and fiercely loyal, with a genuine sense of passion and pride for the work she does, while being professionally critical and realistic in discussions and decision-making."'
                            author="Blake, former colleague"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;
