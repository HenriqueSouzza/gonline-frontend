import axios from 'axios';

import { toastr } from 'react-redux-toastr';

import type from  './types';

import { BASE_API } from '../../../config/const';

const URL = `${BASE_API}`;

/**
 * Actions Creator para salvar uma categoria
 */
export const buscarAtividadesAtivas = (params = []) => {

    // const endPoint = URL;
    const endPoint = URL + 'atividades-complementares/atividadesAtivas';

    const parametro = {
        atividade: params.atividade ? params.atividade : '',
        dataInicio: params.dataInicio ? params.dataInicio : '',
        dataFim: params.dataFim ? params.dataFim : '',
        ativo: params.ativo ? params.ativo : ''
    }

    return dispatch => {
        dispatch({type: type.LOAD, payload: true})

        axios.post(endPoint, parametro)
        .then(response => {
            dispatch({ type: type.BUSCAR_ATIVIDADES_ATIVAS, payload: response })
        })
        .catch(error => {
            dispatch({type: type.ERROR, payload: false})
        })

    }

}

export const buscarAtividadesSelect = () => {
    
    const endPoint = URL + 'atividades-complementares/atividadesAtivas';

    const parametro = {
        atividade: '',
        dataInicio: '',
        dataFim: '',
        ativo: ''
    }

    return dispatch => {
        dispatch({type: type.LOAD, payload: true})

        axios.post(endPoint, parametro)
        .then(response => {
            dispatch({ type: type.BUSCAR_ATIVIDADES_ATIVAS_SELECT, payload: response })
        })
        .catch(error => {
            dispatch({type: type.ERROR, payload: false})
        })

    }
}