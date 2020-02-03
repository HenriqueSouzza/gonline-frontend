import React, { Component } from 'react';

import MenuHeader from '../../../components/template/menu/menuHeader';

import Input from '../../../components/form/input';

import Button from '../../../components/form/button';


class Novo extends Component{


    constructor(props){
        
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(e){

    }

    handleSubmit(e){
        e.preventDefault();
    }

    render(){
        return(
            <section className="content">
                <MenuHeader title={`Nova inscrição`} history={this.props.location.pathname} />
                <div className="content-fluid">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit}>
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
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )

    }
}

export default Novo;