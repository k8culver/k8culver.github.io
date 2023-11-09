import { useState, useEffect } from 'react';


function BlockPizzazz(props) {
    const { color, isBottom } = props;
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
                    randClasses = `bg-${ color }`; // color square
                    break;
                case 1:
                    randClasses = 'bg-white'; // white square
                    break;
                case 2:
                    randClasses = `box-border border-4 border-solid border-${ color } bg-white`; // color border, white square
                    break;
                case 3:
                    randClasses = `box-border border-4 border-solid border-white bg-${ color }`; // white border, color square
                    break;
                case 4:
                    randClasses = `box-border border-8 border-solid border-${ color } bg-white`; // thick color border, white square
                    break;
                case 5:
                    randClasses = `box-border border-8 border-solid border-white bg-${ color }`; // thick white border, color square
                    break;
                default:
                    randClasses = `bg-${ color }`; // color square
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
                    <div key={i} className={`flex flex-col ${isBottom ? 'flex-col-reverse' : ''}`}>
                        {blockCol.map((block, j) => {
                            return (
                                <div key={j} className={`h-10 w-10 ${block}`}></div>
                            );
                        })}
                        {[...Array(Math.floor((blockCount - i)/3))].map((e, h) => {
                            return (
                                <div key={h} className={`bg-${ color } h-10 w-10`}></div>
                            );
                        })}
                    </div>
                );
            })}
        </>
    );
}

export default BlockPizzazz;
