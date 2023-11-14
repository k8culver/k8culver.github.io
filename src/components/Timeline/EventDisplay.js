function EventDisplay(props) {
    const { event } = props;
    
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    return (
        <div className={`grid grid-cols-7 sm:grid-cols-5 max-w-[560px] m-auto ${event.importance === 3 ? 'h-14' : 'h-4'}`}>
            <div className={`col-span-3 sm:col-span-2 flex items-center relative ${event.importance !== 3 ? 'order-last' : ''}`}>
                <div className={`absolute left-0 ${event.importance !== 3 ? 'top-0' : 'top-4'}`}>
                    <div className="flex">
                        {
                            event.image ?
                            <div className="hidden sm:flex shrink-0 w-8 h-8 items-center justify-center m-auto mr-4">
                                <img src={require(`../../static/${event.image}`)} className="max-h-full max-w-full" />
                            </div>
                            :
                            <></>
                        }
                        <div>
                            <p className={`text-teal-light my-0 ${event.importance === 3 ? 'ml-auto mr-2' : 'ml-2'} ${event.importance !== 1 ? 'caption text-white' : 'caption--small'}`}>
                                {event.event}
                            </p>
                            {
                                !event.hideDate &&
                                <p className={`caption font-medium text-teal-light my-0 ${event.importance === 3 ? 'ml-auto mr-2' : 'ml-2'}`}>
                                    {months[event.date % 100 - 1]} {Math.floor(event.date*0.01)}
                                </p>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-smallcenter">
                <div className={`w-full h-1 bg-gold m-auto ${event.importance !== 3 ? 'order-last' : ''}`}></div>
                <div className="w-1 h-full bg-gold m-auto"></div>
                <div className={`${event.importance !== 3 ? 'order-first' : ''}`}></div>
            </div>
            <div className={`col-span-3 sm:col-span-2 ${event.importance !== 3 ? 'order-first' : ''}`}></div>
        </div>
    );
}
  
export default EventDisplay;
