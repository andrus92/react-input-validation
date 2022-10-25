import React from "react";
import '../styles/Input.css';

const Input = (props) => {

    const renderInputAlert= () => {
        if (props.isValid !== undefined) {
            if (props.isValid) {
                return (
                    <p className='valid'>ValidText</p>
                );
            } else {
                return (
                    <p className='invalid'>InvalidText</p>
                );
            }
        } 
        return (
            <p className='invisible'>Invisible</p>
        );
    }
    return (
        <React.Fragment>
            <label className="label" htmlFor={props.name}>Enter your {props.name}</label>
            <input className="input"
                type={props.type} 
                id={props.name}
                value={props.value}
                onChange={props.handleChange}
            />
            {renderInputAlert()}
        </React.Fragment>
    )
}

export default Input;