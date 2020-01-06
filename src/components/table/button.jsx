import React from 'react';

import { Link } from 'react-router-dom';

function button(props){

    const { description, btnNovoLink } = props

    return(
        <Link to={btnNovoLink} className="btn">
            <button className="btn btn-success">
                <i className={`fa fa-plus`}></i> {description}
            </button>
        </Link>
    )
}

export default button;