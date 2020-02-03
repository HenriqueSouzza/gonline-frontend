import React, { Component } from 'react';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import { Form, Field } from 'react-final-form';

import MenuHeader from '../../../components/menu/menuHeader';

import Select from '../../../components/form/select';

import Button from '../../../components/form/button';

import Input from '../../../components/form/input';

import { salvarAluno } from './actions';

import { FORM_RULES } from '../../../helpers/validations';


/**
 * @param {*} props 
 */
class Novo extends Component{

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
                <MenuHeader title={`Nova inscrição`} history={this.props.location.pathname} />
                <div className="content-fluid">
                    <div className="card">
                        <div className="card-body">
                            <Form
                                onSubmit={this.onSubmit}
                                render={({handleSubmit, submitting, pristine}) => (
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <Field 
                                                    component={Select} 
                                                    name={`periodo`} 
                                                    data={dataSelect}
                                                    label={`Ano/Semestre:`}
                                                    validate={FORM_RULES.required}
                                                    />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <Field 
                                                    component={Select} 
                                                    name={`tipo`} 
                                                    data={dataSelect}
                                                    label={`Tipo:`}
                                                    validate={FORM_RULES.required}
                                                    />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <Field 
                                                    component={Select} 
                                                    name={`atividade`} 
                                                    data={dataSelect}
                                                    label={`Atividade:`}
                                                    validate={FORM_RULES.required}
                                                    />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <Field 
                                                    component={Select} 
                                                    name={`subatividade`} 
                                                    data={dataSelect}
                                                    label={`Sub-atividade:`}
                                                    validate={FORM_RULES.required}
                                                    />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <Field 
                                                    component={Input} 
                                                    type={`text`}
                                                    name={`nameAluno`} 
                                                    placeholder={`Nome completo`}
                                                    label={`Nome do aluno:`}
                                                    icon={'fa fa-user'}
                                                    validate={FORM_RULES.required}
                                                    />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-2">
                                                <Field
                                                    component={Button}
                                                    type={`submit`}
                                                    icon={`fa fa-save`} 
                                                    color={`btn-success`}
                                                    description={`Salvar`}
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
const mapStateToProps = state => ({ alunos: state.atvAlunos })


/**
 * @param {*} dispatch 
 */
const mapDispatchToProps = dispatch => bindActionCreators({ salvarAluno }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps )(Novo);