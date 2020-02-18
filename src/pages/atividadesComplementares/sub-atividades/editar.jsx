import React, { Component } from 'react';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import { Form, Field } from 'react-final-form';

import MenuHeader from '../../../components/menu/menuHeader';

import Select from '../../../components/form/select';

import Button from '../../../components/form/button';

import Input from '../../../components/form/input';

import TableAction from './tableAction';

import { salvarAluno } from './actions';

import { FORM_RULES } from '../../../helpers/validations';

import arrayMutators from "final-form-arrays";

import { FieldArray } from 'react-final-form-arrays';


/**
 * @param {*} props 
 */
class Editar extends Component{

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

        const { list } = this.props.subAtividades

        const dataSelect = [{
            id: 1,
            name: 'Ano'
        }]

        const dados = list.find(row => (row.SUB_ATIVIDADE == this.props.match.params.subatividade))
        
        const keys = [{customers: []}];

        return(
            <section className="content">
                <MenuHeader title={`Editar grupo de atividade`} history={this.props.location.pathname} />
                <div className="content-fluid">
                    <div className="card">
                        <div className="card-body">
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
                                                <div>
                                                    <label>Cursos associados</label>
                                                </div>
                                                <div className="buttons">
                                                    <button type="button" onClick={() => push('cursosAssociados', undefined)}>
                                                        Adicionar curso
                                                    </button>
                                                    <button type="button" onClick={() => pop('cursosAssociados')}>
                                                        Remover curso
                                                    </button>
                                                </div>
                                                <FieldArray name="cursosAssociados">
                                                    {({ fields }) => 
                                                        {
                                                            let nameCurrent = 0
                                                            let indexCurrent = 0
                                                            
                                                            const html = ""
                                                            fields.map( (name, index) => {
                                                                nameCurrent = name
                                                                indexCurrent = index 
                                                                
                                                                // html = <div className="row">
                                                                //     <div key={keys[index] + `curso`} className="col-md-4">
                                                                //         {/* <label>{index + 1}</label> */}
                                                                //         <Field
                                                                //             name={`${name}.curso`}
                                                                //             label={`Curso`}
                                                                //             component={Input}
                                                                //             placeholder="curso"
                                                                //         />
                                                                //         <span onClick={() => { fields.remove(index); queueMicrotask(() => keys.splice(index, 1)); }} style={{ cursor: "pointer" }}>
                                                                //             x
                                                                //         </span>
                                                                //     </div>
                                                                // </div>

                                                            })
                                                            
                                                            if(fields.value && fields.value.length > 0){
                                                                return(
                                                                    <div className="row">
                                                                        <div className="col-md-4">
                                                                            <Field
                                                                                name={`${nameCurrent}.curso`}
                                                                                label={`curso`}
                                                                                component={Input}
                                                                            />
                                                                        </div>
                                                                        <div className="col-md-4">
                                                                            <Field
                                                                                name={`${nameCurrent}.semestre`}
                                                                                label={`semestre`}
                                                                                component={Input}
                                                                            />
                                                                        </div>
                                                                        <div className="col-md-4">
                                                                            <Field
                                                                                name={`${nameCurrent}.cargaHoraria`}
                                                                                label={`cargaHoraria`}
                                                                                component={Input}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                )
                                                            }else{
                                                                return ''
                                                            }

                                                        }
                                                    }
                                                </FieldArray>
                                                <pre>{JSON.stringify(values, 0, 2)}</pre>
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
const mapStateToProps = state => ({ subAtividades: state.AtvSubAtividades })


/**
 * @param {*} dispatch 
 */
const mapDispatchToProps = dispatch => bindActionCreators({ salvarAluno }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps )(Editar);