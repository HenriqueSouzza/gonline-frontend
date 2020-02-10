import React, { Component } from 'react';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import Table from '../../../components/table/dataTable';

import { ACTION_RULES } from '../../../helpers/authorization';

import MenuHeader from '../../../components/menu/menuHeader';

import { buscarGrupoAtividade, removerGrupoAtividade } from './actions';


const list = [
    { id: 1, name: 'Conan the Barbarian', year: '1982' },
    { id: 2, name: 'Donan the Barbarian', year: '1982' },
    { id: 3, name: 'Eonan the Barbarian', year: '1982' }
]

class GrupoAtividades extends Component{


    componentDidMount(){
        this.props.buscarGrupoAtividade();
    }

    onDelete = (codigo) => {

        this.props.removerGrupoAtividade(codigo, this.props.history)
        
    }

    render(){

        const { loading, list } = this.props.grupoAtividade

        const columns = [
            {
                name: 'Código',
                selector: 'TIPO_ATIV_COMPL',
                sortable: true,
            },
            {
                name: 'Grupo',
                selector: 'GRUPO',
                sortable: true,
            },
            {
                name: 'Descrição',
                selector: 'DESCRICAO',
                sortable: true,
            }
        ];

        return(
            <section className="content">
                <MenuHeader title={`Grupos de Atividades`} history={this.props.location.pathname} />
                <div className="content-fluid">
                    <div className="card">
                        <div className="card-body">
                            <Table 
                                description={false}
                                checkbox={false} 
                                columns={columns} 
                                data={list} 
                                router={this.props.history}
                                actionDelete={this.onDelete}
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
const mapStateToProps = state => ({ grupoAtividade: state.atvGrupoAtividades })

/**
 * @param {*} dispatch 
 */
const mapDispatchToProps = dispatch => bindActionCreators({ buscarGrupoAtividade, removerGrupoAtividade }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps )(GrupoAtividades);