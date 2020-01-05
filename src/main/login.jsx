import React from 'react';

import Input from '../components/form/input';
import Button from '../components/form/button';

function Login(){
    return(
        <div className="container-fluid">
            <div className="row justify-content-center" style={{marginTop: 130}}>
                <div className="login-box">
                    <div className="login-logo">
                        <span>Logo</span>
                        {/* <a href="../../index2.html"><b>Admin</b>LTE</a> */}
                    </div>
                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">Informe seu login e senha para acessar</p>
                            <form action="" method="">
                                <Input type={`text`} placeholder={`CPF`} icon={`fas fa-user`} />
                                <Input type={`password`} placeholder={`Senha`} icon={`fas fa-key`} />
                                <div className="row">
                                    <div className="col-md-12">
                                        <Button type={`submit`} icon={`fas fa-sign-in`} description={`Entrar`} />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login;