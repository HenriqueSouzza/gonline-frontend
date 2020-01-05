import React from 'react';
import { Route, Router } from 'react-router-dom';
import { createHashHistory } from 'history';

import Dashboard from '../../../pages/dashboard';
import Inscricoes from '../../../pages/inscricoes';

/*** ***/
export const history = createHashHistory();

function Content(){
    return(
        <div className="content-wrapper">
            <Router history={history}>
                <Route exact path='/' component={Dashboard} />
                <Route path='/inscricoes' component={Inscricoes} />
            </Router>
        </div>
    )
}

export default Content;