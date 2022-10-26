import React from "react";
import '../styles/Input.css';
import exclamation_mark from '../img/exclaimation_mark.png';
import tick_mark from '../img/tick_mark.png';


const Input = (props) => {

    const renderInputAlert= () => {
        if (props.isValid !== undefined) {
            if (props.isValid) {
                return (
                    <div className='info valid'>
                        <img src={tick_mark} alt='exclamation mark'></img>
                        ValidText
                    </div>
                );
            } else {
                return (
                    <div className='info invalid'>
                        <img src={exclamation_mark} alt='exclamation mark'></img>
                        InvalidText
                    </div>
                );
            }
        } 
        return (
            <div className='info invisible'>Invisible</div>
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