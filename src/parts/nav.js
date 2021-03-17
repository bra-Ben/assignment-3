
function Nav(props) {
    return (
        <div>
            <h1>PRE-MEST ASSESSMENT</h1>
            <nav 
            style={{ justifyContent:props.justify, 
                alignContent:props.align,
                backgroundColor:props.color, 
                paddingTop:props.top,}}>

            {/* {props.text} */}
            </nav>
        </div>
    )
}
export default Nav;