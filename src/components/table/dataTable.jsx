import React from 'react';

import DataTable from 'react-data-table-component';

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
    },
    {
        name: 'Ações',
        selector: 'acoes',
        sortable: true
    }
];

const data = [
    { id: 1, name: 'Conan the Barbarian', year: '1982', sexo: 'm', acoes: 'btn' },
    { id: 2, name: 'Donan the Barbarian', year: '1982', sexo: 'm', acoes: 'btn' },
    { id: 3, name: 'Eonan the Barbarian', year: '1982', sexo: 'm', acoes: 'btn' },
    { id: 4, name: 'Fonan the Barbarian', year: '1982', sexo: 'm', acoes: 'btn' },
    { id: 5, name: 'Fonan the Barbarian', year: '1982', sexo: 'm', acoes: 'btn' },
    { id: 6, name: 'Fonan the Barbarian', year: '1982', sexo: 'm', acoes: 'btn' },
    { id: 7, name: 'Fonan the Barbarian', year: '1982', sexo: 'm', acoes: 'btn' },
    { id: 8, name: 'Fonan the Barbarian', year: '1982', sexo: 'm', acoes: 'btn' },
]   

function Table(){

    return(
        <DataTable
            title="Lista de inscritos"
            columns={columns}
            data={data}
            Clicked
            // selectableRows 
            pagination
        />
    )
}

export default Table;