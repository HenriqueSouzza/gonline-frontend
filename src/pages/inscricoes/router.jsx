import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from '../inscricoes';
import Novo from '../inscricoes/novo';

function Router(){
    return(
        <Switch>
            <Route exact path='/inscritos' component={ props => <Index {...props} />} />
            <Route exact path='/inscritos/novo' component={ props => <Novo {...props} />} />
        </Switch>
    )
}

export default Router;