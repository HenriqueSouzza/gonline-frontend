import React, { Component } from 'react';

import '../components/template/dependencies';

import App from'./App';

import Auth from'../pages/auth/auth';

class AuthOrApp extends Component{
    
    render(){

        const token = sessionStorage.getItem('token')

        const url_string = window.location.href;

        const url = new URL(url_string);

        const token_tmp = url.searchParams.get('key');

        const name_user = url.searchParams.get('user');

        window.history.pushState("/", document.title, window.location.pathname);
        
        if(token_tmp || token){

            sessionStorage.setItem('token', JSON.stringify({ token: token_tmp }))
            sessionStorage.setItem('user', JSON.stringify({ user: name_user }))
            
            return(<App />)

        }else{

            // return(<Auth />)
            return window.location.href = 'http://desenv-gonline.iesb.br'

        }


    }

}

export default AuthOrApp;