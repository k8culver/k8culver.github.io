function Button(props) {
    // prop:type can be "outline", "outline--purple", or blank for primary
    const { text, type, link } = props;

    return (
        <div>
            {
                link ?
                <a href={ link } className={`button ${ type && "button--" + type}`}><span>{ text }</span></a>
                :
                <button className={`button ${ type && "button--" + type}`}><span>{ text }</span></button>
            }
        </div>
    );
  }
  
  export default Button;
  