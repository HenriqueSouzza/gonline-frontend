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

        if(props.atividades.list.length <= 0 || props.atividades.listSelect.length <= 0){
            props.history.goBack();
        }
    }

    onSubmit = async value => {
        
        value.atividade = this.props.match.params.atividade
        this.props.alterarAtividade(value, this.props.history)

    }

    render(){

        const { listSelect, list } = this.props.atividades

        //Fazer uma especie de distinct em uma array de objeto para isso escolha uma chave ou propriedade para que seja feito o distinct
        const arrayDistinct = [...new Set(listSelect.map(row => (row.GRUPO + ' - ' + row.DESC_GRUPO)))]

        const grupoSelect = []

        arrayDistinct.map(row => {
            let arr = row.split('-')
            grupoSelect.push({id: arr[0].trim(), name: row})
        })

        const valuesForm = list.find(row => (row.ATIVIDADE == this.props.match.params.atividade))

        const initialValues = {
            grupo: valuesForm ? valuesForm.GRUPO : '',
            descricao: valuesForm ? valuesForm.DESCRICAO : '',
            classificacao: valuesForm ? valuesForm.CLASSIFICACAO : '',
            requisitos: valuesForm ? valuesForm.REQUISITO : '',
            cargaHoraria: valuesForm ? valuesForm.CH : ''
        }

        const classificacaoSelect = [
            {id: 'ENSINO', name: 'ENSINO'},
            {id: 'EXTENSÃO', name: 'EXTENSÃO'},
            {id: 'PESQUISA', name: 'PESQUISA'},
        ]

        return(
            <section className="content">
                <MenuHeader title={`Editar atividade`} history={this.props.location.pathname} />
                <div className="content-fluid">
                    <div className="card">
                        <div className="card-body">
                            <Form
                                onSubmit={this.onSubmit}
                                initialValues={initialValues}
                                render={({ handleSubmit, submitting, pristine }) => (
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <Field 
                                                    component={Select} 
                                                    name={`grupo`} 
                                                    data={grupoSelect}
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
                                                    name={`descricao`} 
                                                    placeholder={`Descricao`}
                                                    label={`Descricao:`}
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
                                                    data={classificacaoSelect}
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
                                                    disabled={submitting || pristine}
                                                    description={`Alterar`}
                                                    />
                                            </div>
                                            <div className="col-md-2">
                                                <button type={`button`} className={`btn btn-danger btn-block`} onClick={() => this.props.history.goBack()}>
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