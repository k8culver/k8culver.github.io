function Timeline() {
    const datesBounds = [2013, 2023]
    const dates = Array.from({ length: datesBounds[1] - datesBounds[0] + 1 }, (_, index) => datesBounds[0] + index).reverse();


    return (
        <div>
            {
                dates.map((date, index) => {
                    return (
                        <div key={index}>
                            <div class="grid grid-cols-3 max-w-[200px] m-auto">
                                <p className={`caption text-teal-light ${index % 2 === 1 ? 'order-last' : 'text-right'}`}>
                                    {date}
                                </p>
                                <div className="w-1 h-full bg-teal-light m-auto">
                                </div>
                                <div className={`${index % 2 === 1 && 'order-first'}`}>

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
  