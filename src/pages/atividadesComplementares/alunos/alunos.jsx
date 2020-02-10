import React, { Component } from 'react';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import { Form, Field } from 'react-final-form';

import MenuHeader from '../../../components/menu/menuHeader';

import Button from '../../../components/form/button';

import Table from '../../../components/table/dataTable';

import { FORM_RULES } from '../../../helpers/validations';

import { ACTION_RULES } from '../../../helpers/authorization';

import Input from '../../../components/form/input';

import Select from '../../../components/form/select';

import { removerAluno } from './actions';


const data = [
    { ordem: 1, aluno: '123456789', name: 'Teste da Ti', abandono: '1982', dataFim: 'm' },
    { ordem: 2, aluno: '123456789', name: 'Donan the Barbarian', abandono: '1982', dataFim: 'm' },
    { ordem: 3, aluno: '123456789', name: 'Ivan texeira', abandono: '1982', dataFim: 'm' },
]

class Alunos extends Component{

    constructor(props){
        super(props)

        //
        this.state = {
            checkbox: []
        }
    }

    setCheckbox = dados => {
        this.setState({checkbox: dados.selectedRows})
    }

    //Função para replicar data de finalização da atividade para todos os alunos selecionados
    onSubmitReplicar = async (values) => {
        console.log(values)
    }

    //Função para registrar o abandono dos alunos que foram selecionados
    onAbandono = () => {
        console.log(this.state.checkbox)
    } 

    //Função para realizar a exportação dos alunos que foram selecionados para o lyceum
    onExportLyceum = () => {
        console.log(this.state.checkbox)
    }

    //Função para buscar os dados da atividade para listar na tabela
    onSubmit = async (values) => {
        console.log(values)
    }

    render(){

        const { loading, list } = this.props.alunos

        const columns = [
            {
                name: 'Ordem',
                selector: 'ordem',
                sortable: true,
            },
            {
                name: 'Aluno',
                selector: 'aluno',
                sortable: true,
            },
            {
                name: 'Nome',
                selector: 'name',
                sortable: true,
            },
            {
                name: 'Abandono',
                selector: 'abandono',
                sortable: true,
            },
            {
                name: 'Finalizar atividade',
                selector: 'dataFim',
                sortable: true,
            }
        ];

        const dataSelect = [{
            id: 1,
            name: 'Ano'
        }]

        return(
            <section className="content">
                <MenuHeader title={`Alunos`} history={this.props.location.pathname} />
                <div className="content-fluid">
                    <div className="card">
                        <div className="card-body">
                            <Form
                                onSubmit={this.onSubmit}
                                render={({handleSubmit}) => (
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-2">
                                                <Field 
                                                    component={Select} 
                                                    name={`periodo`} 
                                                    data={dataSelect}
                                                    label={`Ano/Semestre:`}
                                                    validate={FORM_RULES.required}
                                                    />
                                            </div>
                                            <div className="col-md-3">
                                                <Field 
                                                    component={Select} 
                                                    name={`tipo`} 
                                                    data={dataSelect}
                                                    label={`Tipo:`}
                                                    validate={FORM_RULES.required}
                                                    />
                                            </div>
                                            <div className="col-md-3">
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
                                                    component={Select} 
                                                    name={`subatividade`} 
                                                    data={dataSelect}
                                                    label={`Sub-atividade:`}
                                                    validate={FORM_RULES.required}
                                                    />
                                            </div>
                                        </div>
                                        <div className="row">
                                             <div className="col-md-6">
                                                <Field 
                                                    component={Input} 
                                                    type={`text`}
                                                    name={`nameAluno`} 
                                                    label={`Nome do aluno:`}
                                                    placeholder={`Nome completo`}
                                                    icon={'far fa-user'}
                                                    // validate={FORM_RULES.required}
                                                    />
                                            </div>
                                            <div className="col-md-2">
                                                <label>&nbsp;</label>
                                                <Field
                                                    component={Button}
                                                    type={`submit`} 
                                                    color={`btn-success`}
                                                    icon={`fa fa-search`} 
                                                    description={`Buscar`}
                                                    />
                                            </div>
                                        </div>
                                    </form>
                                )}  
                            />
                        </div>
                    </div>
                    <div className={data.length <= 0 ? `d-md-none` : `card`}>
                        <div className="card-header">
                            <h5>Aplicar na tabela</h5>
                        </div>
                        <div className="card-body">
                            <Form
                                onSubmit={this.onSubmitReplicar}
                                render={({handleSubmit}) => (
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label>&nbsp;</label>
                                                <div className="input-group mb-3 justify-content-center">
                                                    <button className="btn btn-info btn-block" type="button" disabled={this.state.checkbox.length <= 0 ? true : false} onClick={() => this.onAbandono()} name="exportLyceum">
                                                        <i className="fa fa-save"></i> Salvar abandono
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <label>&nbsp;</label>
                                                <div className="input-group mb-3 justify-content-center">
                                                    <button className="btn btn-secondary btn-block" type="button" disabled={this.state.checkbox.length <= 0 ? true : false} onClick={() => this.onExportLyceum()} name="exportLyceum">
                                                        <i className="fa fa-upload"></i> Export para lyceum
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-md-3 offset-1">
                                                <Field 
                                                    component={Input} 
                                                    name={`data`}
                                                    type={`date`} 
                                                    icon={`fa fa-calendar`}
                                                    data={dataSelect}
                                                    label={`Data`}
                                                    validate={FORM_RULES.required}
                                                    />
                                            </div>
                                            <div className="col-md-2">
                                                <label>&nbsp;</label>
                                                <Field
                                                    component={Button}
                                                    type={`submit`} 
                                                    color={`btn-success`}
                                                    icon={`fa fa-save`} 
                                                    description={`Aplicar`}
                                                    disabled={this.state.checkbox.length <= 0 ? true : false}
                                                    />
                                            </div>
                                        </div>
                                    </form>
                                )}  
                            />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <Table 
                                description={`Lista de inscritos`}
                                checkbox={true} //Se essa propriedade for habilitada como true, será obrigatório passar a propriedade setCheckbox
                                setCheckbox={this.setCheckbox} //Propriedade que será salvo os checkbox selecionados
                                columns={columns} //colunas da tabela
                                data={list} 
                                router={this.props.history}
                                actionDelete={this.props.removerAluno}
                                btnExportCSV //Propriedade para adicionar o botão de csv
                                btnAdd
                                actions={[ACTION_RULES.can_remove, ACTION_RULES.can_edit]}
                                loading={loading}
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
const mapDispatchToProps = dispatch => bindActionCreators({ removerAluno }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps )(Alunos);