
function Textarea(props) {
    return (
        <div>
            <h2>Add Comments:</h2>
            <textarea placeholder="Enter your comments here"
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