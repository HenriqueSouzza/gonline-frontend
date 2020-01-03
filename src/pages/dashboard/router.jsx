import React from 'react';

import Index from '../dashboard';

function Router(){
    return(
        <Switch>
            <Route exact path='/' component={ props => <Index {...props} />} />
        </Switch>
    )
}

export default Router;