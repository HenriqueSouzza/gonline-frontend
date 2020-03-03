import React from 'react';
import { Link } from 'react-router-dom';

import Menu from './menu';

import imgPerfil  from '../images/perfil.png';

import imgLogo  from '../images/logo.png';
 
function Sidebar() {

    const user_temp = sessionStorage.getItem('user')

    const user = JSON.parse(user_temp)

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link to={`#`} className="brand-link">
                <img src={imgLogo} className="brand-image img-circle elevation-3" alt={`LogoImage`}/>
                <span className="brand-text font-weight-light">IESB</span>
            </Link>
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src={imgPerfil} className="img-circle elevation-2" alt={`UserImage`} />
                    </div>
                    <div className="info">
                        <Link to={`#`} className="d-block">{ user.user ? user.user : 'Logue novamente' }</Link>
                    </div>
                </div>
                <Menu />
            </div>
        </aside>
    )
}

export default Sidebar;