import React from 'react';

function menuHeader(props){

    const { title, history } = props;

    return(
        <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-0 text-dark">{title}</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            {/* <li className="breadcrumb-item"><a href="#"></a></li> */}
                            <li className="breadcrumb-item active">Inscrições{history}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default menuHeader;