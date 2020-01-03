import React from 'react';

import MenuHeader from '../../components/menu/menuHeader'

function Inscritos(props){

    return(
        <div className="">
            <MenuHeader title={`Inscritos`} history={props.location.pathname} />
        </div>
    )
}

export default Inscritos;