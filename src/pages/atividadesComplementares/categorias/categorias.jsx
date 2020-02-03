import React from 'react';

import MenuHeader from '../../../components/template/menu/menuHeader';

import Table from '../../../components/table/dataTable';

const data = [
    { id: 1, name: 'Conan the Barbarian', year: '1982', sexo: 'm' },
    { id: 2, name: 'Donan the Barbarian', year: '1982', sexo: 'm' },
    { id: 3, name: 'Eonan the Barbarian', year: '1982', sexo: 'm' }
]

const columns = [
    {
        name: '#',
        selector: 'id',
        sortable: true,
    },
    {
        name: 'Nome',
        selector: 'name',
        sortable: true,
    },
    {
        name: 'Idade',
        selector: 'year',
        sortable: true,
    },
    {
        name: 'Sexo',
        selector: 'sexo',
        sortable: true,
    }
];

function Categorias(props){
    return(
        <section className="content">
            <MenuHeader title={`Categorias`} history={props.location.pathname} />
            <div className="content-fluid">
                <div className="card">
                    <div className="card-body">
                        {/* <Table selectAll={false} data={data} columns={columns} btnNovoLink={props.location.pathname + `/novo`} />  */}
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Categorias;