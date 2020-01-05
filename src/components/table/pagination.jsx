import React from 'react';


function Pagination(props){

    const { numberPage, setCurrentPage, pageCurrent } = props

    let li = []

    for(var i = 1; i <= numberPage; i++){
        li.push(i)    
    }

    return(
        <div className="dataTables_paginate paging_simple_numbers" id="example1_paginate">
            <ul className="pagination">
                <li className={pageCurrent <= 1 ? "page-item previous disabled" : "page-item"}>
                    <div className="page-link btn" onClick={() => setCurrentPage(pageCurrent >= 1 ? pageCurrent - 1 : numberPage)}>Previous</div>
                </li>
                {li.map( n => (
                    <li key={n} className={n == pageCurrent ? 'page-item active' : 'page-item' }>
                        <div className="page-link btn" onClick={() => setCurrentPage(n)}>{n}</div>
                    </li>
                ))}
                <li className={pageCurrent >= numberPage ? "page-item previous disabled" : "page-item"}>
                    <div className="page-link btn" onClick={() => setCurrentPage(pageCurrent <= numberPage ? pageCurrent + 1 : numberPage)}>Next</div>
                </li>
            </ul>
        </div>
    )
}

export default Pagination;