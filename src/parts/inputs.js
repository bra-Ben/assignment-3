function Input(props) {
    return (
        <div>
            <h1>Enter Your Full Name:</h1>
            <input type='text' 
                style={{backgroundColor:props.color, 
                width:props.width, 
                height:props.height, 
                margin:props.margin, 
                borderRadius:props.border}}/>
            {props.text}
        </div>
    )
}
export default Input;