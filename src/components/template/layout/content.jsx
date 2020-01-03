import React from 'react';
import { Route, Router } from 'react-router-dom';
import { createHashHistory } from 'history';

import Dashboard from '../../../pages/dashboard';
import Inscritos from '../../../pages/inscritos';

/*** ***/
export const history = createHashHistory();

function Content(){
    return(
        <div className="content-wrapper">
            <Router history={history}>
                <Route exact path='/' component={Dashboard} />
                <Route path='/inscritos' component={Inscritos} />
            </Router>
        </div>
    )
}

export default Content;