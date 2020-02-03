import React, { Component } from 'react';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import { Form, Field } from 'react-final-form';

import Button from '../../../components/form/button';

import Table from '../../../components/table/dataTable';

import { FORM_RULES } from '../../../helpers/validations';

import { ACTION_RULES } from '../../../helpers/authorization';

import Select from '../../../components/form/select';

import MenuHeader from '../../../components/menu/menuHeader';

import { removerAluno } from './actions';


const list = [
    { id: 1, name: 'Conan the Barbarian', year: '1982' },
    { id: 2, name: 'Donan the Barbarian', year: '1982' },
    { id: 3, name: 'Eonan the Barbarian', year: '1982' }
]

class Atividades extends Component{

    /**
     * 
     */
    onSubmit = async (values) => {
        console.log(values)
    }

    render(){

        const { loading } = this.props.alunos

        const dataSelect = [
            {id: 'grupo', name: 'Grupos de Atividades'},
            {id: 'atividade', name: 'Atividades'},
            {id: 'sub_atividade', name: 'Sub-Atividades'}
        ]

        const columns = [
            {
                name: 'Código',
                selector: 'id',
                sortable: true,
            },
            {
                name: 'Grupo',
                selector: 'name',
                sortable: true,
            },
            {
                name: 'Descrição',
                selector: 'year',
                sortable: true,
            }
        ];

        return(
            <section className="content">
                <MenuHeader title={`Atividades`} history={this.props.location.pathname} />
                <div className="content-fluid">
                    <div className="card">
                        <div className="card-body">
                            <Form
                                onSubmit={this.onSubmit}
                                render={({handleSubmit}) => (
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <Field 
                                                    component={Select} 
                                                    name={`atividade`} 
                                                    data={dataSelect}
                                                    label={`Categoria:`}
                                                    validate={FORM_RULES.required}
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
                    <div className="card">
                        <div className="card-body">
                            <Table 
                                description={'Atividades Ativas'}
                                checkbox={false} 
                                columns={columns} 
                                data={list} 
                                router={this.props.history}
                                actionDelete={false}
                                btnAdd={true} 
                                actions={[ACTION_RULES.can_edit, ACTION_RULES.can_remove]}
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


export default connect(mapStateToProps, mapDispatchToProps )(Atividades);