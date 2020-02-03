import axios from 'axios';

import { toastr } from 'react-redux-toastr';

import type from  './types';

import { BASE_API } from '../../../config/const';

const URL = `${BASE_API}`;

/**
 * Action creator para buscar um grupo de atividade
 * @param {*} params 
 */
export const buscarGrupoAtividade = (params) => {

    const endPoint = URL;
}

/**
 * Action creator para salvar um grupo de atividade
 * @param {*} params 
 */
export const salvarGrupoAtividade = (params) => {

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

/**
 * Action creator para alterar um grupo de atividade
 * @param {*} params 
 */
export const alterarGrupoAtividade = (params) => {

    const endPoint = URL;

}


/**
 * Action creator para remover um grupo de atividades
 * @param {*} params 
 */
export const removerGrupoAtividade = (params) => {

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