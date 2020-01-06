import React from 'react';

import DataTable from 'react-data-table-component';

import Button from './button';

function Table(props){
    
    const { selectAll, data, columns, btnNovoLink } = props

    columns.push({
        cell: () => <input type={`checkbox`} />,
        allowOverflow: true,
        button: true,
        width: '56px'
    })
    
    //função para colocar o botão de adicionar em cima da tabela
    const actions = (<Button description={`Nova inscrição`} btnNovoLink={btnNovoLink} />)

    return(
        <DataTable
            title="Lista de inscritos"
            columns={columns}
            data={data}
            actions={actions}
            // Clicked
            selectableRows={selectAll}
            pagination
        />
    )
}

export default Table;