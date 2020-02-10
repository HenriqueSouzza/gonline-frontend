import axios from 'axios';

import { toastr } from 'react-redux-toastr';

import type from  './types';

import { BASE_API } from '../../../config/const';

const URL = `${BASE_API}`;

/**
 * Action creator para buscar um grupo de atividade
 * @param {*} params 
 */
export const buscarGrupoAtividade = (params = []) => {

    const endPoint = URL + 'atividades-complementares/gruposAtividades';

    const parametro = {
        codigo: params.length > 0 ? params : ''
    }

    return dispatch => {

        dispatch({type: type.LOAD, payload: true})

        axios.post(endPoint, parametro)
        .then(response => {
            dispatch({ type: type.BUSCAR_GRUPO_ATIVIDADE, payload: response })
        })
        .catch(error => {
            dispatch({type: type.LOAD, payload: false})
        })

    }
    
}

/**
 * Action creator para salvar um grupo de atividade
 * @param {*} params 
 */
export const salvarGrupoAtividade = (params, router) => {

    const endPoint = URL + 'atividades-complementares/gruposAtividades/salvar'
    
    const parametro = {
        descricao: params.descricao ? params.descricao : '', 
        grupo: params.grupo ? params.grupo : '',
    }

    return dispatch => {

        dispatch({type: type.LOAD, payload: true})

        axios.post(endPoint, parametro)
        .then(response => {

            console.log(response)
            buscarGrupoAtividade(parametro)
            router.goBack()

        })
        .catch(error => {

            dispatch({type: type.LOAD, payload: false})
            console.log(error)

        })

    }

}

/**
 * Action creator para alterar um grupo de atividade
 * @param {*} params 
 */
export const alterarGrupoAtividade = (params, router) => {

    
    const endPoint = URL + 'atividades-complementares/gruposAtividades/alterar';

    const parametro = {
        descricao: params.descricao ? params.descricao : '',
        grupo: params.grupo ? params.grupo : '',
        codigo: params.codigo ? params.codigo : ''
    }

    return dispatch => {

        dispatch({type: type.LOAD, payload: true})

        axios.post(endPoint, parametro)
        .then(response => {

            console.log(response)
            buscarGrupoAtividade(parametro)
            router.goBack()

        })
        .catch(error => {
            console.log(error)
            dispatch({type: type.LOAD, payload: false})
        })

    }

}


/**
 * Action creator para remover um grupo de atividades
 * @param {*} params 
 */
export const removerGrupoAtividade = (params, router) => {

    const endPoint = URL + 'atividades-complementares/gruposAtividades/deletar'
    
    const parametro = {
        codigo: params ? params : ''
    }

    return dispatch => {

        dispatch({type: type.LOAD, payload: true})

        axios.post(endPoint, parametro)
        .then(response => {

            console.log(response.data)
            router.go()

        })
        .catch(error => {

            dispatch({type: type.LOAD, payload: false})
            console.log(error)

        })

    }

}