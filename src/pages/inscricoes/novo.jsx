import React from 'react';

import MenuHeader from '../../components/menu/menuHeader';

import Input from '../../components/form/input';
import Button from '../../components/form/button';

function Novo(props){
    return(
        <section className="content">
            <MenuHeader title={`Nova inscrição`} history={props.location.pathname} />
            <div className="content-fluid">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                <Input label={`Nome completo:`} placeholder={`Nome completo`} icon={'fa fa-user'}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <Input label={`Telefone:`} placeholder={`(61) 9 0000-0000`} icon={'fa fa-phone'}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <Input label={`Email:`} placeholder={`@email.com`} icon={'fa fa-envelope'} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <Button type={`submit`} icon={`fa fa-save`} description={`Salvar`}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Novo;