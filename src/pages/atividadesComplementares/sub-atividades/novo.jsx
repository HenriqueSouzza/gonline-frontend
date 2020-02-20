import React, { Component } from 'react';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import { Form, Field } from 'react-final-form';

import MenuHeader from '../../../components/menu/menuHeader';

import Checkbox from '../../../components/form/checkbox';

import Select from '../../../components/form/select';

import SelectMultiple from '../../../components/form/selectMultiple';

import Button from '../../../components/form/button';

import Input from '../../../components/form/input';

import TableAction from './tableAction';

import { salvarAluno, buscarDadosSubAtividadeForm, buscarDadosEditarSubAtividade } from './actions';

import { FORM_RULES } from '../../../helpers/validations';

import arrayMutators from "final-form-arrays";

import { FieldArray } from 'react-final-form-arrays';


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

    componentDidMount(){
        this.props.buscarDadosEditarSubAtividade()
    }

    handleChange = (values) => {
        if(values.grupo){
            this.props.buscarDadosSubAtividadeForm(values)
        }
    }

    /**
     * 
     */
    cursosSelecionados = (values, fields) => {

        if(values){
            return (
                <table className="table">
                    <thead>
                        <tr className="row">
                            <td className="col-md-8">Curso</td>
                            <td className="col-md-2">Semestre</td>
                            <td className="col-md-1">Carga Horaria</td>
                            <td className="col-md-1">Ações</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            values.map( (row, index) => (
                                <tr key={index + 1} className="row">
                                    <td className="col-md-8">
                                        {
                                            row.curso ?
                                                row.curso.map( (cursos, i) => (cursos.label + (row.curso.length > (i+1) ? ', ' : '') ))
                                            : ''
                                        }
                                    </td>  
                                    <td className="col-md-2">
                                        {
                                            row.semestre ? 
                                                row.semestre.map( (semestres, i) => (semestres.label  + (row.semestre.length > (i+1) ? '-' : '') ))
                                            : ''
                                        }
                                    </td>  
                                    <td className="col-md-1">
                                        { row.cargaHoraria ? row.cargaHoraria : ''}
                                    </td>  
                                    <td className="col-md-1">
                                        <button type={`button`} onClick={() => fields.remove(index)} className="btn btn-danger">
                                            <i className="">x</i>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            )
        }
    }

    onSubmit = async value => {
        console.log(value)
    }

    render(){

        const { formEditData, grupoSelect, atividadeSelect, loadingSelect } = this.props.subAtividades

        const grupo = []

        if(grupoSelect.grupo){
            grupoSelect.grupo.map(row => {
                grupo.push({id: row.TIPO_ATIV_COMPL, name: row.GRUPO + ' - ' + row.DESCRICAO})
            })
        }

        const atividade = []

        if(atividadeSelect.atividade){
            atividadeSelect.atividade.map(row => {
                atividade.push({id: row.ATIVIDADE, name: row.DESCRICAO})
            })
        }

        const docente = []

        if(formEditData.docente){
            formEditData['docente'].map( row => {
                docente.push({id: row.NUM_FUNC, name: row.NOME_COMPL})
            })  
        } 

        
        const cursos = [];

        const cursosSelect = [];
        
        if(formEditData.curso){
            formEditData['curso'].map( row => {
                cursos.push({ value: row.CURSO, label: row.CURSO + ' - ' + row.NOME })
                cursosSelect.push({ id: row.CURSO, name: row.CURSO + ' - ' + row.NOME })
            })  
        } 
        
        const semestre = [
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
            { value: '4', label: '4' },
            { value: '5', label: '5' },
            { value: '6', label: '6' },
            { value: '7', label: '7' },
            { value: '8', label: '8' },
            { value: '10', label: '10' },
            { value: '11', label: '11' },
            { value: '12', label: '12' },
        ];

        return(
            <section className="content">
                <MenuHeader title={`Nova sub-atividade`} history={this.props.location.pathname} />
                <div className="content-fluid">
                    <Form
                        onSubmit={this.onSubmit}
                        mutators={{
                            ...arrayMutators
                        }}
                        render={({
                                    handleSubmit, 
                                    submitting, 
                                    pristine, 
                                    values,
                                    form: {
                                        mutators: { push, pop }
                                    }
                                }) => (
                                    <form onSubmit={handleSubmit} onChange={(e) => this.handleChange({[e.target.name]: e.target.value}, values)}>
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <Field 
                                                            component={Select} 
                                                            name={`grupo`} 
                                                            data={grupo}
                                                            label={`Grupo atividade:`}
                                                            validate={FORM_RULES.required}
                                                            />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <Field 
                                                            component={Select} 
                                                            name={`atividade`} 
                                                            data={atividade}
                                                            disabled={loadingSelect}
                                                            label={`Atividade:`}
                                                            validate={FORM_RULES.required}
                                                            />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <Field 
                                                            component={Input} 
                                                            type={`text`}
                                                            name={`descSubAtividade`} 
                                                            label={`Descrição da Sub-Atividade:`}
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
                                                            />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <Field 
                                                            component={Select} 
                                                            name={`instituicao`} 
                                                            data={grupo}
                                                            label={`Instituição:`}
                                                            validate={FORM_RULES.required}
                                                            />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <Field 
                                                            component={Select} 
                                                            name={`docente`} 
                                                            data={docente}
                                                            label={`Docente responsável:`}
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
                                                    <div className="col-md-4">
                                                        <Field 
                                                            component={Input} 
                                                            type={`time`}
                                                            name={`horario`} 
                                                            label={`Horário:`}
                                                            icon={'fa fa-hourglass'}
                                                            />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <Field 
                                                            component={Input} 
                                                            type={`text`}
                                                            name={`local`} 
                                                            label={`Local:`}
                                                            icon={'fa fa-globe'}
                                                            />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <Field 
                                                            component={Input} 
                                                            type={`file`}
                                                            name={`ementa`} 
                                                            label={`Ementa:`}
                                                            icon={'fa fa-upload'}
                                                            />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <Field 
                                                            component={Select} 
                                                            name={`cursoResp`} 
                                                            data={cursosSelect}
                                                            label={`Curso responsável:`}
                                                            validate={FORM_RULES.required}
                                                            />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <div>
                                                    <label>Selecione os cursos</label>
                                                </div>
                                                <div className="row justify-content-center">
                                                    <div className="col-md-4 offset-1">
                                                        <div className={`form-group`}>
                                                            <div className="">
                                                                <label>&nbsp;</label>
                                                            </div>
                                                            <button className="btn btn-success" type="button" onClick={() => push('cursosAssociados', {})}>
                                                                Adicionar
                                                            </button>
                                                        </div>  
                                                    </div> 
                                                    <div className="col-md-4 offset-1">
                                                        <div className={`form-group`}>
                                                            <div className="">
                                                                <label>&nbsp;</label>
                                                            </div>  
                                                            <button className="btn btn-danger" type="button" onClick={() => pop('cursosAssociados')}>
                                                                Remover
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div> 
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <FieldArray name="cursosAssociados">
                                                            {({ fields }) => 
                                                                {
                                                                    let nameCurrent = 0
                                                                    
                                                                    fields.map( (name) => {
                                                                        nameCurrent = name
                                                                    })

                                                                    if(fields.value && fields.value.length > 0){
                                                                        return(
                                                                            <div>
                                                                                <div className="row">
                                                                                    <div className="col-md-6">
                                                                                        <Field
                                                                                            component={SelectMultiple}
                                                                                            name={`${nameCurrent}[curso]`}
                                                                                            options={cursos}
                                                                                            label={`Curso`}
                                                                                            isMulti
                                                                                            closeMenu={false}
                                                                                            multiple={true}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="col-md-4">
                                                                                        <Field
                                                                                            component={SelectMultiple}
                                                                                            name={`${nameCurrent}[semestre]`}
                                                                                            options={semestre}
                                                                                            label={`Semestre`}
                                                                                            isMulti
                                                                                            closeMenu={false}
                                                                                            multiple={true}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="col-md-2">
                                                                                        <Field
                                                                                            component={Input} 
                                                                                            type={`number`}
                                                                                            name={`${nameCurrent}[cargaHoraria]`} 
                                                                                            placeholder={`10h`}
                                                                                            label={`Carga Horária:`}
                                                                                            icon={'fa fa-time'}
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    {this.cursosSelecionados(values.cursosAssociados, fields)}
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    }else{
                                                                        return ''
                                                                    }
                                                                    
                                                                }
                                                            }
                                                        </FieldArray>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <div>
                                                    <label>Habilitar inscrição no aluno on-line</label>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <Field 
                                                            component={Input} 
                                                            type={`date`}
                                                            name={`aonlineDtIni`} 
                                                            placeholder={`Data inicio`}
                                                            label={`Data início de divulgação no on-line:`}
                                                            icon={'fa fa-calendar'}
                                                            validate={FORM_RULES.required}
                                                        />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <Field 
                                                            component={Input} 
                                                            type={`date`}
                                                            name={`aonlineDtFim`} 
                                                            placeholder={`Data inicio`}
                                                            label={`Data fim de divulgação no on-line:`}
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
                                                            name={`aonlineInscr`} 
                                                            label={`Inscrição on-line`}
                                                        />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <Field 
                                                            component={Checkbox} 
                                                            type={`checkbox`}
                                                            name={`atv_aonline`} 
                                                            label={`Atividade no Docente On-line`}
                                                        />
                                                    </div>
                                                    <div className="col-md-5">
                                                        <Field 
                                                            component={Checkbox} 
                                                            type={`checkbox`}
                                                            name={`blackboard`} 
                                                            label={`Disciplina será ministrada no blackboard ?`}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="row justify-content-center">
                                                    <div className="col-md-3">
                                                        <Field
                                                            component={Button}
                                                            type={`submit`}
                                                            icon={`fa fa-save`} 
                                                            color={`btn-primary`}
                                                            disabled={loadingSelect} 
                                                            description={`Salvar`}
                                                        />
                                                    </div>
                                                    <div className="col-md-3">
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
const mapDispatchToProps = dispatch => bindActionCreators({ salvarAluno, buscarDadosSubAtividadeForm, buscarDadosEditarSubAtividade }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps )(Novo);