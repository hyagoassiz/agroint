import React from "react";
import "./button.css"

function Button(props){
    return(
        <div>
            <button style={{ width: props.size }}>{props.name}</button>
        </div>
    )
}

export default Button;