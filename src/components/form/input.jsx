import React from 'react';

function Input(props){

    const { label, type, placeholder, icon } = props

    return(
        <div className="form-group">
            <label>{label}</label>
            <div className="input-group mb-3">
                <input type={type} className="form-control" placeholder={placeholder} />
                <div className="input-group-append">
                    <div className="input-group-text">
                        <i className={icon}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Input;