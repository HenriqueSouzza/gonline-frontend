import React from 'react';

import MenuHeader from '../../components/menu/menuHeader';
import Table from '../../components/table/dataTable';

function Inscricoes(props){
    return(
        <section className="content">
            <MenuHeader title={`Inscrições`} history={props.location.pathname} />
            <div className="content-fluid">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Lista de inscritos</h3>
                    </div>
                    <div className="card-body">
                        <Table /> 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Inscricoes;