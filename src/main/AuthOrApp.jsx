import React from 'react';

import '../components/template/dependencies';
import App from'./App';
import Login from'./login';

function AuthOrApp(){

    // const acessToken = localStorage.getItem('','')
    const acessToken = `a`

    if(acessToken){
        return(<App />)
    }else{
        return(<Login />)
    }
}

export default AuthOrApp;