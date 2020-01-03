import React from 'react';
import { Link } from 'react-router-dom';

function Box(props){

    const {number, description, icon, link, color} = props;

    return(
        <div className={`small-box `+ color}>
            <div className="inner">
                <h3>{number}</h3>
                <p>{description}</p>
            </div>
            <div className="icon">
                <i className={icon}></i>
            </div>
            <Link to={link} className="small-box-footer">
                More info <i className="fas fa-arrow-circle-right"></i>
            </Link>
        </div>
    )
}

export default Box;