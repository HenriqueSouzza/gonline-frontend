import React, { Component } from 'react';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import { Form, Field } from 'react-final-form';

import MenuHeader from '../../../components/menu/menuHeader';

import Checkbox from '../../../components/form/checkbox';

import Select from '../../../components/form/select';

import Button from '../../../components/form/button';

import Input from '../../../components/form/input';

import TableAction from './tableAction';

import { salvarAluno } from './actions';

import { FORM_RULES } from '../../../helpers/validations';


/**
 * @param {*} props 
 */
class Novo extends Component{

    constructor(props){
        super(props);
        if(props.subAtividades.list.length <= 0){
            props.history.goBack()
        }
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
                <MenuHeader title={`Nova sub-atividade`} history={this.props.location.pathname} />
                <div className="content-fluid">
                    <Form
                        onSubmit={this.onSubmit}
                        render={({ handleSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <Field 
                                                    component={Select} 
                                                    name={`grupo`} 
                                                    data={dataSelect}
                                                    label={`Grupo atividade:`}
                                                    validate={FORM_RULES.required}
                                                    />
                                            </div>
                                            <div className="col-md-4">
                                                <Field 
                                                    component={Select} 
                                                    name={`atividade`} 
                                                    data={dataSelect}
                                                    label={`Atividade:`}
                                                    validate={FORM_RULES.required}
                                                    />
                                            </div>
                                            <div className="col-md-4">
                                                <Field 
                                                    component={Input} 
                                                    type={`text`}
                                                    name={`subAtividade`} 
                                                    placeholder={`Sub Atividade`}
                                                    label={`Nome sub-atividade (nome fantasia):`}
                                                    icon={'fa fa-user'}
                                                    validate={FORM_RULES.required}
                                                    />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <Field 
                                                    component={Input} 
                                                    type={`date`}
                                                    name={`dataInicio`} 
                                                    placeholder={`Data inicio`}
                                                    label={`Data início:`}
                                                    icon={'fa fa-calendar'}
                                                    validate={FORM_RULES.required}
                                                    />
                                            </div>
                                            <div className="col-md-4">
                                                <Field 
                                                    component={Input} 
                                                    type={`date`}
                                                    name={`dataFim`} 
                                                    placeholder={`Data fim`}
                                                    label={`Data fim:`}
                                                    icon={'fa fa-calendar'}
                                                    validate={FORM_RULES.required}
                                                    />
                                            </div>
                                            <div className="col-md-4">
                                                <Field 
                                                    component={Select} 
                                                    name={`instituicao`} 
                                                    data={dataSelect}
                                                    label={`Instituição:`}
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
                                                    label={`Curso responsável:`}
                                                    validate={FORM_RULES.required}
                                                    />
                                            </div>
                                            <div className="col-md-4">
                                                <Field 
                                                    component={Select} 
                                                    name={`docente`} 
                                                    data={dataSelect}
                                                    label={`Docente responsável:`}
                                                    validate={FORM_RULES.required}
                                                    />
                                            </div>
                                            <div className="col-md-4">
                                                <Field 
                                                    component={Input} 
                                                    type={`number`}
                                                    name={`vagas`} 
                                                    placeholder={`Vagas`}
                                                    label={`Vagas:`}
                                                    icon={'fa fa-address-book'}
                                                    validate={FORM_RULES.required}
                                                    />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <Field 
                                                    component={Input} 
                                                    type={`time`}
                                                    name={`horario`} 
                                                    label={`Horário:`}
                                                    icon={'fa fa-hourglass'}
                                                    validate={FORM_RULES.required}
                                                    />
                                            </div>
                                            <div className="col-md-4">
                                                <Field 
                                                    component={Input} 
                                                    type={`text`}
                                                    name={`local`} 
                                                    label={`Local:`}
                                                    icon={'fa fa-globe'}
                                                    validate={FORM_RULES.required}
                                                    />
                                            </div>
                                            <div className="col-md-4">
                                                <Field 
                                                    component={Input} 
                                                    type={`file`}
                                                    name={`ementa`} 
                                                    label={`Ementa:`}
                                                    icon={'fa fa-upload'}
                                                    validate={FORM_RULES.required}
                                                    />
                                            </div>
                                            <div className="col-md-4">
                                                <Field 
                                                    component={Input} 
                                                    type={`text`}
                                                    name={`cursoAssociado`} 
                                                    label={`Cursos associados:`}
                                                    placeholder={'Cursos associados'}
                                                    icon={'fa fa-course'}
                                                    validate={FORM_RULES.required}
                                                    />
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="card">
                                    <div className="card-body">
                                        <TableAction /> 
                                    </div>
                                </div>


                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p>
                                                    <h5>Habilitar inscrição no Aluno On-line</h5>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <Field 
                                                    component={Input} 
                                                    type={`date`}
                                                    name={`dataInicioAonline`} 
                                                    label={`Data Inicial divulgação no aonline:`}
                                                    placeholder={'Data inicio'}
                                                    icon={'fa fa-calendar'}
                                                    validate={FORM_RULES.required}
                                                    />
                                            </div>
                                            <div className="col-md-4">
                                                <Field 
                                                    component={Input} 
                                                    type={`date`}
                                                    name={`dataFimAonline`} 
                                                    label={`Data Final divulgação no aonline:`}
                                                    placeholder={'Data final'}
                                                    icon={'fa fa-calendar'}
                                                    validate={FORM_RULES.required}
                                                    />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <Field 
                                                    component={Checkbox} 
                                                    type={`checkbox`}
                                                    name={`aonline_inscr`} 
                                                    label={`Habilitação inscrição on-line`}
                                                    />
                                            </div>
                                            <div className="col-md-3">
                                                <Field 
                                                    component={Checkbox} 
                                                    type={`checkbox`}
                                                    name={`hab_donline`} 
                                                    label={`Habilitar Atividade no Docente On-line`}
                                                    />
                                            </div>
                                            <div className="col-md-3">
                                                <Field 
                                                    component={Checkbox} 
                                                    type={`checkbox`}
                                                    name={`blackboard`} 
                                                    label={`Essa disciplina será ministrada no blackboard`}
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
                                    </div>
                                </div>
                            </form>
                        )}  
                    />
                </div>
            </section>
        )
    }

}

/**
 * 
 * @param {*} state 
 */
const mapStateToProps = state => ({ subAtividades: state.AtvSubAtividades })


/**
 * @param {*} dispatch 
 */
const mapDispatchToProps = dispatch => bindActionCreators({ salvarAluno }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps )(Novo);