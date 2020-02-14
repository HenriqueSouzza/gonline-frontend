import axios from 'axios';

import { toastr } from 'react-redux-toastr';

import type from  './types';

import { BASE_API } from '../../../config/const';

const URL = `${BASE_API}`;

/**
 * Action Creator para guardar um aluno vinculado a uma atividade
 */
export const buscarDadosForm = (params = []) => {

    const endPoint = URL + 'atividades-complementares/alunos-inscritos/formSelect';

    const parametro = params

    return dispatch => {

        dispatch({type: type.LOAD_SELECT, payload: true})

        axios.post(endPoint, parametro)
        .then(response => {
            dispatch({ type: type.ALUNOS_INSCRITOS_FORM, payload: [response, Object.keys(params)] })
        })
        .catch(error => {
            dispatch({type: type.ERROR, payload: false})
            console.log(error)
        })

    }

}

/**
 * Action Creator para guardar um aluno vinculado a uma atividade
 */
export const buscarAluno = (params) => {

    const endPoint = URL + 'atividades-complementares/alunos-inscritos';

    const parametro = {
        periodo: params.periodo ? params.periodo : '',
        tipo: params.tipo ? params.tipo : '',
        atividade: params.atividade ? params.atividade : '',
        subatividade: params.subatividade ? params.subatividade : '',
        nomeAluno: params.nameAluno ? params.nameAluno : ''
    }

    return dispatch => {

        dispatch({type: type.LOAD, payload: true})

        axios.post(endPoint, parametro)
        .then(response => {
            dispatch({ type: type.BUSCAR_ALUNOS_INSCRITOS, payload: response })
        })
        .catch(error => {
            dispatch({type: type.LOAD, payload: false})
            console.log(error)
        })

    }

}

/**
 * Action Creator para guardar um aluno vinculado a uma atividade
 */
export const salvarAluno = (params, router) => {

    const endPoint = URL + 'atividades-complementares/alunos-inscritos/salvar';

    const parametro = params

    return dispatch => {

        dispatch({type: type.LOAD, payload: true})

        axios.post(endPoint, parametro)
        .then(response => {

            console.log(response)
            router.goBack();
            dispatch(buscarAluno(parametro))

        })
        .catch(error => {
            dispatch({type: type.ERROR, payload: false})
            console.log(error)
        })

    }

}

/**
 * Função para salvar aluno no lyceum
 * @param {*} params 
 */
export const salvarAlunoLyceum = (params) => {

    const endPoint = URL + 'atividades-complementares/alunos-inscritos/export-lyceum';

    const parametro = params

    return dispatch => {

        dispatch({type: type.LOAD, payload: true})

        axios.post(endPoint, parametro)
        .then(response => {

            dispatch(buscarAluno(parametro[0]))

        })
        .catch(error => {
            dispatch({type: type.LOAD, payload: false})
            console.log(error)
        })

    }

}

/**
 * Action Creator para guardar um aluno vinculado a uma atividade
 */
export const alterarAluno = (params, router, replicar) => {

    const endPoint = URL + 'atividades-complementares/alunos-inscritos/alterar';

    const parametro = params

    return dispatch => {

        dispatch({type: type.LOAD, payload: true})

        axios.post(endPoint, parametro)
        .then(response => {

            if(!replicar){

                dispatch([router.goBack(), buscarAluno(parametro[0])])
                
            }else{
                
                dispatch(buscarAluno(parametro[0]))

            }
            
        })
        .catch(error => {
            dispatch({type: type.LOAD, payload: false})
            console.log(error)
        })

    }

}

/**
 * @param {*} params 
 */
export const removerAluno = (params) => {

    const endPoint = URL + 'atividades_complementares/deleteAlunosInscritos';
    
    const parametro = params
    
    return dispatch => {

        dispatch({type: type.LOAD, payload: true})

        axios.post(endPoint, parametro)
        .then(response => {

            console.log(response)
            dispatch(buscarAluno(parametro))

        })
        .catch(error => {
            dispatch({type: type.ERROR, payload: false})
            console.log(error)
        })

    }

}