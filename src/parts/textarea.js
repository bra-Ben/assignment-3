
function Textarea(props) {
    return (
        <div>
            <h1>Add Comments:</h1>
            <textarea 
            style={{backgroundColor:props.color, 
                width:props.width, 
                height:props.height,
                padding:props.padding, 
                borderRadius:props.border, 
                margin:props.margin}}>

            </textarea>
        </div>
    )
}
export default Textarea;