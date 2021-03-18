
function Button(props) {
    return (
        <div>
            <button 
                style={{backgroundColor:props.color, 
                    width:props.width, 
                    height:props.height, 
                    margin:props.margin, 
                    borderRadius:props.border, 
                    marginTop:props.margintop, padding:props.padding}}>

                Submit
            </button>
        </div>
    )
}
export default Button;