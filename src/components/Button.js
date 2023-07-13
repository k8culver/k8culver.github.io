function Button(props) {
    // prop:styleType can be "outline", "outline--purple", or blank for primary
    const { text, styleType, link, type, isDisabled } = props;

    return (
        <div>
            {
                link ?
                <a href={ link } className={`button ${ styleType && "button--" + styleType}`} disabled={isDisabled} type={type}><span>{ text }</span></a>
                :
                <button className={`button ${ styleType && "button--" + styleType}`} disabled={isDisabled} type={type}><span>{ text }</span></button>
            }
        </div>
    );
  }
  
  export default Button;
  