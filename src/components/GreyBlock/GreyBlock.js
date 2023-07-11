import GreyBlockPizzazzTop from "./GreyBlockPizzazzTop";
import GreyBlockPizzazzBottom from "./GreyBlockPizzazzBottom";

function GreyBlock(props) {
    const { components } = props;
    return (
        <>
            <div class="flex items-end">
                <GreyBlockPizzazzTop />
            </div>
            <div className='bg-black h-20'>
                <div className="container m-auto">{ components }</div>
            </div>
            <div class="flex items-start flex-row-reverse">
                <GreyBlockPizzazzBottom />
            </div>
        </>
    );
}

export default GreyBlock;
