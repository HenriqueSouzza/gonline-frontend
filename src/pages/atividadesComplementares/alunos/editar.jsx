import React, { Component } from 'react';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import { Form, Field } from 'react-final-form';

import MenuHeader from '../../../components/menu/menuHeader';

import { FORM_RULES } from '../../../helpers/validations';

import Button from '../../../components/form/button';

import Checkbox from '../../../components/form/checkbox';

import Input from '../../../components/form/input';

import { salvarAluno } from './actions';

/**
 * @param {*} props 
 */
class Editar extends Component{

    constructor(props){
        super(props)
        // if(props.alunos.list.length <= 0){
            // props.history.goBack()
        // }
    }

    onSubmit = async (values) => {
        console.log(values)
    }

    render(){
        
        const checked = '1'

        //Valores que serão inseridos nos input a propriedades tem que ser os mesmos dos names definidos dos input's
        const initialValues = {
            aluno: '201611014',
            name: 'Ivan texeira',
            abandono: checked == '1' ? true : false,
            dataFim: '2020-01-20'
        }

        const dataSelect = [{
            id: 1,
            name: 'Ano'
        }]

        return(
            <section className="content">
                <MenuHeader title={`Editar inscrição`} history={this.props.location.pathname} />
                <div className="content-fluid">
                    <div className="card">
                        <div className="card-body">
                        <Form
                                onSubmit={this.onSubmit}
                                initialValues={initialValues}
                                render={({handleSubmit, submitting, pristine}) => (
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <Field 
                                                    component={Input}
                                                    type={`text`}
                                                    disabled={true}
                                                    icon={`fa fa-key`}
                                                    name={`aluno`} 
                                                    label={`Aluno:`}
                                                    validate={FORM_RULES.required}
                                                    />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <Field 
                                                    component={Input} 
                                                    name={`name`} 
                                                    icon={`fa fa-user`}
                                                    label={`Nome do aluno:`}
                                                    validate={FORM_RULES.required}
                                                    />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <Field 
                                                    component={Checkbox} 
                                                    name={`abandono`}
                                                    checked={true}
                                                    label={`Abandono`}
                                                    validate={FORM_RULES.required}
                                                    />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <Field 
                                                    component={Input}
                                                    type={`date`} 
                                                    icon={`fa fa-calendar`}
                                                    name={`dataFim`} 
                                                    label={`Data fim:`}
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
 * @param {*} state 
 */
const mapStateToProps = state => ({ alunos: state.atvAlunos })


/**
 * @param {*} dispatch 
 */
const mapDispatchToProps = dispatch => bindActionCreators({ salvarAluno }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps )(Editar);