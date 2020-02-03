import React from 'react';

import '../components/template/dependencies';

import App from'./App';

import Auth from'../pages/auth/auth';

function AuthOrApp(){
    
    // const acessToken = localStorage.getItem('','')
    const acessToken = `a`

    if(acessToken){
        return(<App />)
    }else{
        return(<Auth />)
    }
}

export default AuthOrApp;