import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from '../inscritos';

function Router(){
    return(
        <Switch>
            <Route exact path='/inscritos' component={ props => <Index {...props} />} />
        </Switch>
    )
}

export default Router;