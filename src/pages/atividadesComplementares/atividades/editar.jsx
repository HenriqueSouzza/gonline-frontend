import React, { Component } from 'react';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import { Form, Field } from 'react-final-form';

import MenuHeader from '../../../components/menu/menuHeader';

import Select from '../../../components/form/select';

import Button from '../../../components/form/button';

import Input from '../../../components/form/input';

import { alterarAtividade } from './actions';

import { FORM_RULES } from '../../../helpers/validations';


/**
 * @param {*} props 
 */
class Editar extends Component{

    constructor(props){
        super(props);
    }

    onSubmit = async value => {
        console.log(value)
    }

    render(){

        const dataSelect = [{
            id: 1,
            name: 'Ano'
        }]

        return(
            <section className="content">
                <MenuHeader title={`Editar atividade`} history={this.props.location.pathname} />
                <div className="content-fluid">
                    <div className="card">
                        <div className="card-body">
                            <Form
                                onSubmit={this.onSubmit}
                                render={({ handleSubmit }) => (
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <Field 
                                                    component={Select} 
                                                    name={`grupo`} 
                                                    data={dataSelect}
                                                    label={`Grupo:`}
                                                    validate={FORM_RULES.required}
                                                    />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <Field 
                                                    component={Input} 
                                                    type={`text`}
                                                    name={`atividade`} 
                                                    placeholder={`Nome completo`}
                                                    label={`Atividade:`}
                                                    icon={'fa fa-list-alt'}
                                                    validate={FORM_RULES.required}
                                                    />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <Field 
                                                    component={Select} 
                                                    name={`classificacao`} 
                                                    data={dataSelect}
                                                    label={`Classificacao:`}
                                                    validate={FORM_RULES.required}
                                                    />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <Field 
                                                    component={Input} 
                                                    type={`text`}
                                                    name={`requisitos`} 
                                                    placeholder={`Requisitos`}
                                                    label={`Requisitos:`}
                                                    icon={'fa fa-align-center'}
                                                    validate={FORM_RULES.required}
                                                    />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <Field 
                                                    component={Input} 
                                                    type={`text`}
                                                    name={`cargaHoraria`} 
                                                    placeholder={`Carga horária`}
                                                    label={`Carga horária máxima:`}
                                                    icon={'fa fa-hourglass-end'}
                                                    validate={FORM_RULES.required}
                                                    />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-2">
                                                <Field
                                                    component={Button}
                                                    type={`submit`}
                                                    icon={`fa fa-edit`} 
                                                    color={`btn-success`}
                                                    description={`Alterar`}
                                                    />
                                            </div>
                                            <div className="col-md-2">
                                                <button type={`button`} className={`btn btn-default btn-block`} onClick={() => this.props.history.goBack()}>
                                                    <i className="fa fa-arrow-left"></i> Voltar
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}  
                            />
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

/**
 * 
 * @param {*} state 
 */
const mapStateToProps = state => ({ atividades: state.atvAtividades })


/**
 * @param {*} dispatch 
 */
const mapDispatchToProps = dispatch => bindActionCreators({ alterarAtividade }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps )(Editar);