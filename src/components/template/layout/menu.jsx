import React from 'react';

import MenuLink from '../../menu/menuLink';

// import MenuTreeView from '../../menu/menuTreeView';

function Menu(){
    return(
        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <MenuLink description={`Dashboard`} path={`/`} icon={`fas fa-tachometer-alt`}  active={``} />
                <MenuLink description={`Inscritos`} path={`/inscritos`} icon={`fas fa-check`} active={``} />
                {/* <MenuTreeView description={`Forma de pagamento`} path={`#`} icon={`fas fa-check`} >
                    <MenuLink description={`Debito`} path={`/forma-pagamento/debito`} icon={`fas fa-check`} active={``} />
                    <MenuLink description={`Credito`} path={`/forma-pagamento/credito`} icon={`fas fa-check`} active={``}/>
                </MenuTreeView> */}
            </ul>
        </nav>
    )
}

export default Menu;