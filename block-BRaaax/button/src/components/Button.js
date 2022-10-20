function Button(props) {
    function GetStyles(){
        let {type , size} = props
        return `button btn--color${type} ${size}`
    }
  return (
    <>
        <button className={GetStyles}>
            {props.label || "button"}
            </button>
    </>
  );
}

export default Button;
