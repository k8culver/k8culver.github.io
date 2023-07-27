function Timeline() {
    const events = [
        {date: 202212, importance: 3, title: 'Software Engineer', company: 'Pela', event: 'Stopped working at Pela', image: 'pela.png'},
        {date: 202204, hideDate: true, importance: 2, title: 'Software Engineer', company: 'Pela', event: 'Started acting as lead developer'},
        {date: 202112, hideDate: true, importance: 2, title: 'Software Engineer', company: 'Pela', event: 'Started training and mentoring Jr. Developers'},
        {date: 202107, importance: 2, title: 'Software Engineer', company: 'Pela', event: 'Promoted to Software Engineer'},
        {date: 202012, hideDate: true, importance: 2, title: 'Software Engineer', company: 'Pela', event: 'Introduced to Node.js and AWS Lambda development'},
        {date: 202009, hideDate: true, importance: 2, title: 'Software Engineer', company: 'Pela', event: 'Introduced to GraphQL, TypeScript, and Gatsby Cloud'},
        {date: 202003, hideDate: true, importance: 2, title: 'Software Engineer', company: 'Pela', event: 'Introduced to Shopify and ecommerce development'},
        {date: 202002, importance: 3, title: 'Jr. Developer', company: 'Cheeky Monkey Media', event: 'Started working at Pela', image: 'cheekymonkey.png'},
        {date: 201911, hideDate: true, importance: 2, title: 'Intermediate Full Stack Developer', company: 'Cheeky Monkey Media', event: 'Introduced to PHP'},
        {date: 201910, hideDate: true, importance: 3, title: 'Intermediate Full Stack Developer', company: 'Cheeky Monkey Media', event: 'Started working at Cheeky Monkey Media'},
        {date: 201908, importance: 3, title: 'Full Stack Software Developer', company: 'ChatterBlock', event: 'Stopped working at ChatterBlock', image: 'chatterblock.png'},
        {date: 201907, hideDate: true, importance: 2, title: 'Full Stack Software Developer', company: 'ChatterBlock', event: 'Introduced to React'},
        {date: 201906, hideDate: true, importance: 2, title: 'Full Stack Software Developer', company: 'ChatterBlock', event: 'Independently designed and built front-end web application user dashboard.'},
        {date: 201806, hideDate: true, importance: 2, title: 'Full Stack Software Developer', company: 'ChatterBlock', event: 'Rebuilt customer user dashboard and business listing pages'},
        {date: 201710, hideDate: true, importance: 2, title: 'Full Stack Software Developer', company: 'ChatterBlock', event: 'Introduced to Django, PostgreSQL, ElasticSearch, HTML, CSS, and JavaScript'},
        {date: 201709, hideDate: true, importance: 3, title: 'Full Stack Software Developer', company: 'ChatterBlock', event: 'Started working at ChatterBlock'},
        {date: 201708, importance: 3, title: 'Bachelor of Science', company: 'University of Victoria', event: 'Graduated from University of Victoria', image: 'uvic.png'},
        {date: 201704, hideDate: true, importance: 2, title: 'Bachelor of Science', company: 'University of Victoria', event: 'Introduced to UI/UX design and SQL'},
        {date: 201501, hideDate: true, importance: 2, title: 'Bachelor of Science', company: 'University of Victoria', event: 'Introduced to Assembly, C, and Python'},
        {date: 201310, hideDate: true, importance: 2, title: 'Bachelor of Science', company: 'University of Victoria', event: 'Introduced to Java and Software Engineering concepts'},
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
        return datesRange;
    }


    return (
        <div>
            <div className="max-w-[200px] mx-auto text-center h-20">                
                <p className="caption text-teal-light">The Future</p>
                <div className="border-solid border-4 border-teal-light border-b-0 border-l-0 h-4 w-4 -rotate-45 -mb-5 mx-auto"></div>
                <div className="w-1 h-full bg-teal-light mx-auto inline-block"></div>
            </div>
            {
                events.map((event, index) => {
                    return (
                        <div key={index}>
                            
                                <div className="grid grid-cols-5 max-w-[800px] m-auto h-4">
                                    <div className={`col-span-2 flex items-center relative ${event.importance !== 3 ? 'order-last' : ''}`}>
                                        <div className={`absolute top-0 max-w-[300px] ${event.importance !== 3 ? 'left-0' : 'right-0'}`}>
                                            <p className={`caption--small text-teal-light my-0 ${event.importance === 3 ? 'ml-auto mr-2' : 'ml-2'}`}>
                                                {event.event}
                                            </p>
                                            {
                                                !event.hideDate &&
                                                <p className={`caption text-teal-light my-0 ${event.importance === 3 ? 'ml-auto mr-2' : 'ml-2'}`}>
                                                    {months[event.date % 100 - 1]} {Math.floor(event.date*0.01)}
                                                </p>
                                            }
                                            {
                                                event.image ?
                                                <div className="w-10 h-10 flex items-center justify-center rounded-full m-auto bg-white border-solid border-teal-light border-4 p-4 mt-2 mr-0">
                                                    <img src={require(`../../static/${event.image}`)} className="max-h-full max-w-full" />
                                                </div>
                                                :
                                                <></>
                                            }
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-smallcenter">
                                        <div className={`w-full h-1 bg-teal-light m-auto ${event.importance !== 3 ? 'order-last' : ''}`}></div>
                                        <div className="w-1 h-full bg-teal-light m-auto"></div>
                                        <div className={`${event.importance !== 3 ? 'order-first' : ''}`}></div>
                                    </div>
                                    <div className={`col-span-2 ${event.importance !== 3 ? 'order-first' : ''}`}></div>
                                </div>
                   
                            
                            {
                                index < dates.length && dates[index].map((date, dateIndex) => {
                                    return (
                                        <div key={dateIndex} className="grid grid-cols-3 max-w-[90px] m-auto">
                                            <div></div>
                                            <div className="w-7 m-auto grid grid-cols-smallcenter h-4">
                                                <div></div>
                                                <div className="w-1 h-full bg-teal-light m-auto"></div>
                                                <div className="w-full h-1 bg-teal-light mx-auto my-1 -ml-2 opacity-40"></div>
                                            </div>
                                            <div className={`flex items-center ${event.importance !== 3 ? 'order-last' : ''}`}>
                                                {
                                                    date % 100 === 1 &&
                                                    <p className={`caption--small text-teal-light my-0`}>
                                                        {Math.floor(date*0.01)}
                                                    </p>
                                                }
                                                
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    );
                })
            }
            <div className="max-w-[200px] mx-auto text-center h-20">                
                <div className="w-1 h-full bg-teal-light m-auto"></div>
                <div className="border-solid border-4 border-teal-light border-t-0 border-l-0 h-4 w-4 rotate-45 -mt-5 mx-auto"></div>
                <p className="caption text-teal-light">The Beginning of Time</p>
            </div>
        </div>
    );
  }
  
  export default Timeline;
  