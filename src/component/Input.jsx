import React from "react"

function Input(props) {
    return (
        <div>
            <input name={props.name} type={props.type} placeholder="Enter Amount" onInput={props.calc} value = {props.value} />
        </div>
    )
}

export default Input