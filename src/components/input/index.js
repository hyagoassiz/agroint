import React from "react";
import "./Input.css"



function Input(props) {
    return (
        <div className="input-container">

            <img className="icon-input" src={props.icon} alt="email" />
            <input
                placeholder={props.name}
                type={props.type}
                value={props.value} 
                onChange={props.onChange} 
            />



        </div>
    )
}

export default Input;