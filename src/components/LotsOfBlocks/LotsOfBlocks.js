import BlockPizzazz from "./BlockPizzazz";

function LotsOfBlocks(props) {
    const { components, color } = props; // for tailwind generator: color: bg-teal border-teal bg-black border-black
    return (
        <div className="mt-4">
            <div className="flex items-end">
                <BlockPizzazz color={color} />
            </div>
            <div className={`bg-${ color }`}>
                <div className="container m-auto py-10">
                    <div className="md:-mt-40">
                        { components }
                    </div>
                </div>
            </div>
            <div className="flex items-start flex-row-reverse">
                <BlockPizzazz color={color} isBottom />
            </div>
        </div>
    );
}

export default LotsOfBlocks;
