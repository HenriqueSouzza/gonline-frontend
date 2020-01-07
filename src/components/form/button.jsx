import React from 'react';

function Button(props){

    const { type, icon, description } = props

    return(
        <div className="input-group mb-3">
            <button type={type} className={`btn btn-success btn-block`}>
                <i className={icon}></i> {description}
            </button>
        </div>
    )
}

export default Button;