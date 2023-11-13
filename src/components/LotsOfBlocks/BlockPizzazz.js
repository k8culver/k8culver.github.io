import { useState, useEffect } from 'react';


function BlockPizzazz(props) {
    const { color, isBottom } = props;
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // const [blocks, setBlocks] = useState([]);


    const randClasses = [
        `bg-${ color }`, // 0: color square
        'bg-teal-darker', // 1: teal-darker square
        `box-border border-4 border-solid border-${ color } bg-teal-darker`, // 2: color border, teal-darker square
        `box-border border-4 border-solid border-teal-darker bg-${ color }`, // 3: teal-darker border, color square
        `box-border border-8 border-solid border-${ color } bg-teal-darker`, // 4: thick color border, teal-darker square
        `box-border border-8 border-solid border-teal-darker bg-${ color }`, // 5: thick teal-darker border, color square
        `bg-${ color } box-border border-4 border-solid border-gold`, // 6: color square, gold border
        `box-border border-4 border-solid border-${ color } bg-teal-darker shadow-border shadow-gold`, // 7: color border, gold border, teal-darker square
        `box-border border-8 border-solid border-teal-darker bg-${ color } shadow-border-thick shadow-gold` // 8: thick teal-darker border, thick gold border, color square
    ]

    const blockCount = Math.floor(windowWidth / 40);
    const blockBuilder = [];

    for (let i = 0; i < blockCount; i++) {
        const blockCol = [];
        for (let j = 0; j < 2; j++) {
            const allowed = j === 0 ? [0, 2, 4, 6, 7] : [0, 1, 2, 3, 4, 5, 6, 7, 8];
            const rand = Math.floor(Math.random() * allowed.length);
            blockCol.push(allowed[rand]);
        }
        blockBuilder.push(blockCol);
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
            {blockBuilder.map((blockCol, i) => {
                return (
                    <div key={i} className={`flex flex-col ${isBottom ? 'flex-col-reverse' : ''}`}>
                        {blockCol.map((block, j) => {
                            return (
                                <div key={j} className={`h-10 w-10 ${randClasses[block]}`}></div>
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
