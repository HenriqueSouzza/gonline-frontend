import React from 'react';

import MenuLink from '../menu/menuLink';

import MenuTreeView from '../menu/menuTreeView';

function Menu(){
    return(
        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <MenuLink description={`Dashboard`} path={`/`} icon={`fas fa-tachometer-alt`}  active={``} />
                <MenuTreeView description={`Atividades Compl.`} path={`#`} icon={`fas fa-check`} >
                    <MenuLink description={`Alunos`} path={`/atividades-complementares/alunos`} icon={`fas fa-check`} active={``} />
                    <MenuLink description={`Atividades`} path={`/atividades-complementares/atividades`} icon={`fas fa-check`} active={``}/>
                    <MenuLink description={`Categorias`} path={`/atividades-complementares/categorias`} icon={`fas fa-check`} active={``}/>
                </MenuTreeView>
            </ul>
        </nav>
    )
}

export default Menu;