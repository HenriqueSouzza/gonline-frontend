import axios from 'axios';

import { toastr } from 'react-redux-toastr';

import type from  './types';

import { BASE_API } from '../../../config/const';

const URL = `${BASE_API}`;

/**
 * Action Creator para buscar atividades existentes
 */
export const buscarAtividade = (params) => {

    const endPoint = URL;

}
/**
 * Action Creator para salvar uma nova atividade
 */
export const salvarAtividade = (params) => {

    const endPoint = URL;

}
/**
 * Action Creator para alterar uma atividade
 */
export const alterarAtividade = (params) => {

    const endPoint = URL;

}

/**
 * Action creator para remover uma determina atividade
 * @param {*} params 
 */
export const removerAtividade = (params) => {

    const endPoint = URL
    
    const parametro = {
        aluno: ''
    }
    
    return dispatch => {

        dispatch({type: type.LOAD, payload: true})

        setTimeout(function(){ 
            dispatch({ type: type.REMOVER_ALUNO, payload: [] })
        }, 1000);

        // axios.post(endPoint, parametros)
        // .then(response => {
        //     dispatch({ type: type.BUSCAR_ATIVIDADES, payload: response })
        // })
        // .catch(error => {
        //     dispatch({type: type.LOAD, payload: false})
        //     console.log(error)
        // })

    }

}