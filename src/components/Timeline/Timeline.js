import BetweenDates from "./BetweenDates";
import EventDisplay from "./EventDisplay";
import Button from "../Button";

function Timeline(props) {
    const { events } = props;

    return (
        <div className="px-4">
            <div className="text-center h-20">                
                <p className="caption text-teal-light">The Future</p>
                <div className="border-solid border-4 border-teal-light border-b-0 border-l-0 h-4 w-4 -rotate-45 -mb-5 mx-auto"></div>
                <div className="w-1 h-full bg-teal-light inline-block"></div>
            </div>
            {
                events.map((event, index) => {
                    return (
                        <div key={index}>
                            <EventDisplay event={event} />
                            {
                                index < events.length - 1 &&
                                <BetweenDates endDate={event.date} startDate={events[index+1].date} />
                            }
                        </div>
                    );
                })
            }
            <div className="text-center h-20">                
                <div className="w-1 h-full bg-teal-light m-auto"></div>
                <div className="border-solid border-4 border-teal-light border-t-0 border-l-0 h-4 w-4 rotate-45 -mt-5 mx-auto"></div>
                <p className="caption text-teal-light">The Beginning of Time</p>
            </div>
            <div className="sm:flex sm:justify-center mt-32 text-center">
                <div className="mb-4 sm:mb-0 sm:mr-4 inline-block">
                    <Button text="Check out my LinkedIn" styleType="outline--purple" link="https://www.linkedin.com/in/kate-culver-333388143" />
                </div>
                <div className="inline-block">
                    <Button text="Download my resume" styleType="outline--purple" />
                </div>
            </div>
        </div>
    );
}
  
export default Timeline;
