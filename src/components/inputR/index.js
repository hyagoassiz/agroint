import React from "react";
import "./InputR.css"

function InputR(props) {
    return (
        <div>
            <input
                style={{ width: props.size}}
                className="inputR"
                placeholder={props.name}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
            />

        </div>
    );
}

export default InputR;