import axios from 'axios';

import { toastr } from 'react-redux-toastr';

import type from  './types';

import { BASE_API } from '../../../config/const';

const URL = `${BASE_API}`;

/**
 * Action Creator para buscar atividades existentes
 */
export const buscarAtividade = (params = []) => {

    const endPoint = URL + 'atividades-complementares/atividades';

    const parametro = {
        grupo: params.grupo ? params.grupo : ''
    }

    return dispatch => {

        dispatch({type: type.LOAD, payload: true})

        axios.post(endPoint, parametro)
        .then(response => {
            dispatch({ type: type.BUSCAR_ATIVIDADES, payload: response })
        })
        .catch(error => {
            console.log(error)
            dispatch({type: type.LOAD, payload: false})
        })

    }

}


/**
 * Action Creator para buscar atividades para listar no select
 */
export const buscarAtividadeSelect = (params = []) => {

    const endPoint = URL + 'atividades-complementares/atividades';

    const parametro = {
        grupo: ''
    }

    return dispatch => {

        dispatch({type: type.LOAD, payload: true})

        axios.post(endPoint, parametro)
        .then(response => {
            dispatch({ type: type.BUSCAR_ATIVIDADES_SELECT, payload: response })
        })
        .catch(error => {
            dispatch({type: type.LOAD, payload: false})
        })

    }

}


/**
 * Action Creator para salvar uma nova atividade
 */
export const salvarAtividade = (params, router) => {

    const endPoint = URL + 'atividades-complementares/atividades/salvar';

    const parametro = {
        atividade: params.atividade,
        grupo: params.grupo,
        descricao: params.descricao, 
        requisito: params.requisitos,
        classificacao: params.classificacao,
        cargaHoraria: params.cargaHoraria
    }

    return dispatch => {

        dispatch({type: type.LOAD, payload: true})

        axios.post(endPoint, parametro)
        .then(response => {

            // console.log(response)
            router.goBack()
            toastr.success('Sucesso', response.data.message)
            
        })
        .catch(error => {

            // console.log(error.response)
            toastr.error('Erro', error.response.data.message)
            dispatch({type: type.LOAD, payload: false})

        })

    }

}

/**
 * Action Creator para alterar uma atividade
 */
export const alterarAtividade = (params) => {

    const endPoint = URL + 'atividades-complementares/atividades/alterar';

    const parametro = {
        atividade: params.atividade,
        grupo: params.grupo,
        descricao: params.descricao, 
        requisito: params.requisitos,
        classificacao: params.classificacao,
        cargaHoraria: params.cargaHoraria
    }

    return dispatch => {

        dispatch({type: type.LOAD, payload: true})

        axios.post(endPoint, parametro)
        .then(response => {

            // console.log(response)
            toastr.success('Sucesso', response.data.message)
            dispatch(buscarAtividade({grupo: params.grupo}))
            
        })
        .catch(error => {

            // console.log(error.response)
            toastr.error('Erro', error.response.data.message)
            dispatch({type: type.LOAD, payload: false})
            
        })

    }

}

/**
 * Action creator para remover uma determina atividade
 * @param {*} params 
 */
export const removerAtividade = (params) => {

    const endPoint = URL + 'atividades-complementares/atividades/deletar'
    
    const parametro = {
        atividade: params.atividade ? params.atividade : '',
        codigo: params.codigo ? params.codigo : ''
    }
    
    return dispatch => {

        dispatch({type: type.LOAD, payload: true})

        axios.post(endPoint, parametro)
        .then(response => {

            // console.log(response)
            toastr.success('Sucesso', response.data.message)
            dispatch(buscarAtividade({grupo: params.grupo}))

        })
        .catch(error => {

            // console.log(error.response)
            toastr.error('Erro', error.response.data.message)
            dispatch({type: type.LOAD, payload: false})

        })

    }

}