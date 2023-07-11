import { useState, useEffect } from 'react';


function GreyBlockPizzazzTop() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const blockCount = Math.floor(windowWidth / 40);
    const blocks = [];

    for (let i = 0; i < blockCount; i++) {
        const blockCol = [];
        for (let j = 0; j < 2; j++) {
            const allowed = j === 0 ? [0, 2, 4] : [0, 1, 2, 3, 4, 5];
            const rand = Math.floor(Math.random() * allowed.length);
            
            let randClasses = '';
            switch(allowed[rand]) {
                case 0:
                    randClasses = 'bg-black'; // black square
                    break;
                case 1:
                    randClasses = 'bg-white'; // white square
                    break;
                case 2:
                    randClasses = 'box-border border-4 border-solid border-black bg-white'; // black border, white square
                    break;
                case 3:
                    randClasses = 'box-border border-4 border-solid border-white bg-black'; // white border, black square
                    break;
                case 4:
                    randClasses = 'box-border border-8 border-solid border-black bg-white'; // thick black border, white square
                    break;
                case 5:
                    randClasses = 'box-border border-8 border-solid border-white bg-black'; // thick white border, black square
                    break;
                default:
                    randClasses = 'bg-black'; // black square
            }
            blockCol.push(randClasses);
        }
        blocks.push(blockCol);
    }
    
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
    }, []);


    return (
        <>
            {blocks.map((blockCol, i) => {
                return (
                    <div key={i} className='flex flex-col'>
                        {blockCol.map((block, j) => {
                            return (
                                <div key={j} className={`h-10 w-10 ${block}`}></div>
                            );
                        })}
                        {[...Array(Math.floor((blockCount - i)/3))].map((e, h) => {
                            return (
                                <div key={h} className="bg-black h-10 w-10"></div>
                            );
                        })}
                    </div>
                );
            })}
            {/* <div>
                <div className='box-border border-4 border-b-0 border-l-0 border-solid border-black h-10 w-10'></div>
                <div className='bg-black h-60 w-20'></div>
            </div>
            <div>
                <div className='bg-black h-10 w-10'></div>
                <div className='h-10 w-10'></div>
                <div className='bg-black h-40 w-10'></div>
            </div>
            <div>
                <div className='bg-black h-50 w-20'></div>
            </div>
            <div>
                <div className='box-border border-2 border-b-0 border-l-0 border-solid border-black h-10 w-10'></div>
                <div className='bg-black h-40 w-10'></div>
            </div>
            <div>
                <div className='box-border border-2 border-t-0 border-solid border-white bg-black h-10 w-10'></div>
                <div className='bg-black h-30 w-10'></div>
            </div>
            <div><div className='bg-black h-40 w-20'></div></div>
            <div><div className='bg-black h-30 w-20'></div></div>
            <div><div className='bg-black h-20 w-20'></div></div>
            <div><div className='bg-black h-10 w-20'></div></div> */}
        </>
    );
}

export default GreyBlockPizzazzTop;
