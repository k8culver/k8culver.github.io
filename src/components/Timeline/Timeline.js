function Timeline() {
    const datesBounds = [201308, 202306];
    const events = [
        {date: 202212, importance: 3, title: 'Software Engineer', company: 'Pela', event: 'Stopped working at Pela'},
        {date: 202107, importance: 2, title: 'Software Engineer', company: 'Pela', event: 'Promoted to Software Engineer'},
        {date: 202002, importance: 3, title: 'Jr. Developer', company: 'Pela', event: 'Started working at Pela'},
        {date: 202002, importance: 3, title: 'Intermediate Full Stack Developer', company: 'Cheeky Monkey Media', event: 'Stopped working at Cheeky Monkey Media'},
        {date: 201910, importance: 3, title: 'Intermediate Full Stack Developer', company: 'Cheeky Monkey Media', event: 'Started working at Cheeky Monkey Media'},
        {date: 201908, importance: 3, title: 'Full Stack Software Developer', company: 'ChatterBlock', event: 'Stopped working at ChatterBlock'},
        {date: 201709, importance: 3, title: 'Full Stack Software Developer', company: 'ChatterBlock', event: 'Started working at ChatterBlock'},
        {date: 201708, importance: 3, title: 'Bachelor of Science', company: 'University of Victoria', event: 'Graduated from University of Victoria'},
        {date: 201309, importance: 3, title: 'Bachelor of Science', company: 'University of Victoria', event: 'Started attending University of Victoria'},
    ]
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

    // const numberArray = Array.from({ length: upperBound - lowerBound + 1 }, (_, index) => lowerBound + index);
    const dates = [];
    for(let i = 0; i < events.length - 1; i++) {
        dates.push(getDatesBetween(events[i].date, events[i+1].date));
    }

    function getDatesBetween(endDate, startDate) {
        const datesRange = [];
        let i = endDate;
        while(i >= startDate) {
            if(i % 100 > 0) {
                if(i !== endDate && i !== startDate) {
                    datesRange.push(i);
                }
                i--;
            } else {
                i = Math.floor(i*0.01 - 1)*100 + 12;
            }
        }
        console.log(datesRange)
        return datesRange;
    }


    return (
        <div>
            <div className="max-w-[200px] m-auto">                
                <div className="m-auto h-full text-center">
                    <p className="caption text-teal-light">The Future</p>
                    <div className="border-solid border-4 border-teal-light border-b-0 border-l-0 h-4 w-4 -rotate-45 -mb-5 mx-auto"></div>
                    <div className="w-1 h-full bg-teal-light m-auto h-12 inline-block"></div>
                </div>
            </div>
            {
                events.map((event, index) => {
                    return (
                        <div key={index}>
                            <div className="grid grid-cols-3 max-w-[400px] m-auto">
                                <div className={`flex items-center ${index % 2 === 1 ? 'order-last' : ''}`}>
                                    <p className={`caption text-teal-light my-0 ${index % 2 === 0 ? 'ml-auto mr-2' : 'ml-2'}`}>
                                        {months[event.date % 100 - 1]} {Math.floor(event.date*0.01)}
                                    </p>
                                </div>
                                <div className="grid grid-cols-smallcenter">
                                    <div className={`w-full h-1 bg-teal-light m-auto ${index % 2 === 1 ? 'order-last' : ''}`}></div>
                                    <div className="w-1 h-full bg-teal-light m-auto"></div>
                                    <div className={`${index % 2 === 1 ? 'order-first' : ''}`}></div>
                                </div>
                                <div className={`${index % 2 === 1 ? 'order-first' : ''}`}>

                                </div>
                            </div>
                            {/* <h1 className="text-white">{dates[index]}</h1> */}
                            {
                                index < dates.length && dates[index].map((date, dateIndex) => {
                                    return (
                                        <div key={dateIndex} className="grid grid-cols-3 max-w-[400px] m-auto">
                                            <div className={`flex items-center ${index % 2 === 1 ? 'order-last' : ''}`}>
                                                <p className={`caption text-white my-0 ${index % 2 === 0 ? 'ml-auto mr-2' : 'ml-2'}`}>
                                                    {months[date % 100 - 1]} {Math.floor(date*0.01)}
                                                </p>
                                            </div>
                                            <div className="grid grid-cols-smallcenter">
                                                <div className={`w-full h-1 bg-white m-auto ${index % 2 === 1 ? 'order-last' : ''}`}></div>
                                                <div className="w-1 h-full bg-white m-auto"></div>
                                                <div className={`${index % 2 === 1 ? 'order-first' : ''}`}></div>
                                            </div>
                                            <div className={`${index % 2 === 1 ? 'order-first' : ''}`}>

                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    );
                })
            }
            <div className="max-w-[200px] m-auto">                
                <div className="m-auto h-full text-center">
                    <div className="w-1 h-full bg-teal-light m-auto h-8"></div>
                    <div className="border-solid border-4 border-teal-light border-t-0 border-l-0 h-4 w-4 rotate-45 -mt-5 mx-auto"></div>
                    <p className="caption text-teal-light">The Beginning of Time</p>
                </div>
            </div>
        </div>
    );
  }
  
  export default Timeline;
  