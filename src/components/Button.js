function Button(props) {
    // prop:styleType can be "outline", "outline--purple", "outline--gold", or blank for primary
    const { text, styleType, link, type, isDisabled, newTab } = props;

    return (
        <div className="inline-block">
            {
                link ?
                <a href={ link } className={`button ${ styleType && "button--" + styleType}`} disabled={isDisabled} type={type} target={newTab ? "_blank" : "_self"}><span>{ text }</span></a>
                :
                <button className={`button ${ styleType && "button--" + styleType}`} disabled={isDisabled} type={type}><span>{ text }</span></button>
            }
        </div>
    );
  }
  
  export default Button;
  