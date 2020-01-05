import React from 'react';

function Input(props){

    const { type, placeholder, icon } = props

    return(
        <div className="input-group mb-3">
            <input type={type} className="form-control" placeholder={placeholder} />
            <div className="input-group-append">
                <div className="input-group-text">
                    <span className={icon}></span>
                </div>
            </div>
        </div>
    )
}

export default Input;