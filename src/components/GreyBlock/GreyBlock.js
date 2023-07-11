import GreyBlockPizzazzTop from "./GreyBlockPizzazzTop";
import GreyBlockPizzazzBottom from "./GreyBlockPizzazzBottom";

function GreyBlock(props) {
    const { components } = props;
    return (
        <>
            <div className="flex items-end">
                <GreyBlockPizzazzTop />
            </div>
            <div className='bg-black'>
                <div className="container m-auto py-10">{ components }</div>
            </div>
            <div className="flex items-start flex-row-reverse">
                <GreyBlockPizzazzBottom />
            </div>
        </>
    );
}

export default GreyBlock;
