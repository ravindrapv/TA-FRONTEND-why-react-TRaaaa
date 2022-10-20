function Colors(props){
    return(
        <>
            <div className="container">
                <div>
                    <div>{props.name}</div>
                    <ul>
                        {props.allCOlors.map((color,i) => (
                           <li>
                             <div className="color-box" style={{backgroundColor:color}}>
                             <div className="card-info">
                             <span>{i === 0 ?50: i * 100}</span>
                             <span>{color}</span>
                             </div>
                             </div>
                         </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Colors;