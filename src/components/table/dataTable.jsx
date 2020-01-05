import React, { useState } from 'react';

import Pagination from './pagination';

const row = [
    { a: 1, b: 2, c: 3, d: 4, e: 5},
    { a: 2, b: 2, c: 3, d: 4, e: 5},
    { a: 3, b: 2, c: 3, d: 4, e: 5},
    { a: 4, b: 2, c: 3, d: 4, e: 5},
    { a: 5, b: 2, c: 3, d: 4, e: 5},
    { a: 6, b: 2, c: 3, d: 4, e: 5},
    { a: 7, b: 2, c: 3, d: 4, e: 5},
    { a: 8, b: 2, c: 3, d: 4, e: 5},
    { a: 9, b: 2, c: 3, d: 4, e: 5},
    { a: 10, b: 2, c: 3, d: 4, e: 5},
    { a: 11, b: 2, c: 3, d: 4, e: 5},
    { a: 12, b: 2, c: 3, d: 4, e: 5},
    { a: 13, b: 2, c: 3, d: 4, e: 5},
    { a: 14, b: 2, c: 3, d: 4, e: 5},
    { a: 15, b: 2, c: 3, d: 4, e: 5},
    { a: 16, b: 2, c: 3, d: 4, e: 5},
    { a: 17, b: 2, c: 3, d: 4, e: 5},
    { a: 18, b: 2, c: 3, d: 4, e: 5},
    { a: 19, b: 2, c: 3, d: 4, e: 5},
    { a: 20, b: 2, c: 3, d: 4, e: 5},
    { a: 21, b: 2, c: 3, d: 4, e: 5},
    { a: 22, b: 2, c: 3, d: 4, e: 5},
    { a: 23, b: 2, c: 3, d: 4, e: 5},
    { a: 24, b: 2, c: 3, d: 4, e: 5},
    { a: 25, b: 2, c: 3, d: 4, e: 5},
    { a: 26, b: 2, c: 3, d: 4, e: 5},
    { a: 27, b: 2, c: 3, d: 4, e: 5},
    { a: 28, b: 2, c: 3, d: 4, e: 5},
    { a: 29, b: 2, c: 3, d: 4, e: 5},
    { a: 30, b: 2, c: 3, d: 4, e: 5},
    { a: 31, b: 2, c: 3, d: 4, e: 5}
]

const head = { a: 'Col 1', b: 'Col 2', c: 'Col 3', d: 'Col 4', e: 'Col 5'}


function DataTable(){

    const [value, setSelect ] = useState(10)

    const [pageCurrent, setCurrentPage] = useState(1)
    
    const pageLength = Math.ceil(row.length / value)

    //linhas por paginas
    let rowPage = [];
    let array = [];

    let inicial = 0;
    let final = value;

    for(var j = 1; j <= pageLength; j++){

        for(var i = inicial; i < final; i++){
            array.push(row[i])
        }

        rowPage[j] = array
        array = []

        inicial = value * j
        final = (j + 1) == pageLength ? row.length : inicial + value
    }
    

    return(
        <div id="example1_wrapper" className="dataTables_wrapper dt-bootstrap4">
            <div className="dataTables_length" id="example1_length">
                <label>
                    Mostrar 
                    <select onChange={(e) => setSelect(e.target.value)} name="example1_length" aria-controls="example1" className="custom-select custom-select-sm form-control form-control-sm">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select> 
                    Linhas 
                </label> 
            </div>
            <div className="row">
                <div className="col-sm-12" style={{ overflowY: 'auto' }}>    
                    <table id="example1" className="table table-bordered table-striped dataTable table-fixed" role="grid" arial-describedby="example1_info">
                        <thead> 
                            <tr role="row">
                                <th>{head.a}</th>
                                <th>{head.b}</th>
                                <th>{head.c}</th>
                                <th>{head.d}</th>
                                <th>{head.e}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rowPage[pageCurrent].map( (response,index) => (
                                <tr key={index}>
                                    <td>{response.a}</td>
                                    <td>{response.b}</td>
                                    <td>{response.c}</td>
                                    <td>{response.d}</td>
                                    <td>{response.e}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="example1_info" role="status" aria-live="polite">Mostrando de 1 até {value} de {row.length} entries</div>
                </div>
                <div className="col-sm-12 col-md-7">
                    <Pagination numberPage={pageLength} pageCurrent={pageCurrent} setCurrentPage={setCurrentPage} />
                </div>
            </div>
        </div>
    )
}

export default DataTable;