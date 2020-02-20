import axios from 'axios';

import { toastr } from 'react-redux-toastr';

import type from  './types';

import { BASE_API } from '../../../config/const';

const URL = `${BASE_API}`;


/**
 * 
 */
export const buscarDadosSubAtividadeForm = (params = []) => {

    const endPoint = URL + 'atividades-complementares/sub-atividade/formSelect';

    const parametro = params

    return dispatch => {

        dispatch({type: type.LOAD_SELECT, payload: true})

        axios.post(endPoint, parametro)
        .then(response => {

            dispatch({ type: type.FORM_SUB_ATIVIDADE, payload: response })

        })
        .catch(error => {
            dispatch({type: type.ERROR, payload: false})
        })

    }
}

export const buscarDadosEditarSubAtividade = () => {

    const endPoint = URL + 'atividades-complementares/sub-atividade/formData';

    return dispatch => {
        
        dispatch({type: type.LOAD_SELECT, payload: true})

        axios.post(endPoint, {})
            .then(response => {

                dispatch({ type: type.FORM_EDIT_SUB_ATIVIDADE, payload: response })

            })
            .catch(error => {
                dispatch({type: type.ERROR, payload: false})
        })

    }

}

export const buscarSubAtividade = (params) => {

    const endPoint = URL + 'atividades-complementares/sub-atividade'

    const parametro = {
        tipo: params.grupo,
        atividade: params.atividade
    }

    return dispatch => {

        dispatch({type: type.LOAD, payload: true})

        axios.post(endPoint, parametro)
        .then(response => {

            dispatch({ type: type.BUSCAR_SUB_ATIVIDADE, payload: response })

        })
        .catch(error => {
            dispatch({type: type.ERROR, payload: false})
        })

    }

}


/**
 * Action Creator para guardar um aluno vinculado a uma atividade
 */
export const salvarAluno = (params) => {

    const endPoint = URL;

}

/**
 * @param {*} params 
 */
export const removerSubatividade = (params) => {

    const endPoint = URL + 'atividades-complementares/sub-atividade/deletar'
    
    const parametro = params
    
    return dispatch => {

        dispatch({type: type.LOAD, payload: true})

        axios.post(endPoint, parametro)
        .then(response => {

            console.log(response)
            dispatch(buscarSubAtividade(parametro))
            
        })
        .catch(error => {
            dispatch({type: type.ERROR, payload: false})
            console.log(error)
        })

    }

}