function Checkbox(props) {
    return (
        <div>
            {/* <h1>Choose your gender:</h1> */}
            <input type="checkbox" 
             style={{ backgroundColor:props.color, 
                width:props.width, 
                height:props.height, 
                margin:props.margin, 
                borderRadius:props.border}}
            />
            {props.text}
        </div>
    )
}
export default Checkbox;