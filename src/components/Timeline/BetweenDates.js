function BetweenDates(props) {
    const { endDate, startDate } = props;

    const dates = [];
    let i = endDate;
    while(i >= startDate) {
        if(i % 100 > 0) {
            if(i !== endDate && i !== startDate) {
                dates.push(i);
            }
            i--;
        } else {
            i = Math.floor(i*0.01 - 1)*100 + 12;
        }
    }


    return (
        <>         
            {
                dates.map((date, dateIndex) => {
                    return (
                        <div key={dateIndex} className="grid grid-cols-3 max-w-[90px] m-auto">
                            <div></div>
                            <div className="w-7 m-auto grid grid-cols-smallcenter h-4">
                                <div></div>
                                <div className="w-1 h-full bg-gold m-auto"></div>
                                <div className="w-full h-1 bg-gold mx-auto my-1 -ml-2 opacity-30"></div>
                            </div>
                            <div className="flex items-center">
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
        </>
    );
}
  
export default BetweenDates;
