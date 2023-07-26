function Timeline() {
    const datesBounds = [2013, 2023]
    const dates = Array.from({ length: datesBounds[1] - datesBounds[0] + 1 }, (_, index) => datesBounds[0] + index).reverse();


    return (
        <div>
            {
                dates.map((date, index) => {
                    return (
                        <div key={index}>
                            <div className="grid grid-cols-3 max-w-[200px] m-auto h-28">
                                <div className={`flex items-center ${index % 2 === 1 ? 'order-last' : ''}`}>
                                    <p className={`caption text-teal-light ${index % 2 === 0 ? 'ml-auto mr-2' : 'ml-2'}`}>
                                        {date}
                                    </p>
                                </div>
                                
                                <div className="grid grid-cols-smallcenter">
                                    <div className={`w-full h-1 bg-teal-light m-auto ${index % 2 === 1 ? 'order-last' : ''}`}>
                                    </div>
                                    <div className="w-1 h-full bg-teal-light m-auto">
                                    </div>
                                    <div className={`${index % 2 === 1 ? 'order-first' : ''}`}></div>
                                </div>
                                <div className={`${index % 2 === 1 ? 'order-first' : ''}`}>

                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
  }
  
  export default Timeline;
  