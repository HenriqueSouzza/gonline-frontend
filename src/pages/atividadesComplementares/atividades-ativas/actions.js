import axios from 'axios';

import { toastr } from 'react-redux-toastr';

import type from  './types';

import { BASE_API } from '../../../config/const';

const URL = `${BASE_API}`;

/**
 * Actions Creator para salvar uma categoria
 */
export const buscarAtividadesAtivas = (params) => {

    // const endPoint = URL;
    const endPoint = 'http://desenv.iesb.br/henrique.souza/sistemasAcademicos/web-service/atividades-complementares/atividadesAtivas';

    const parametros = {
        atividade: params.atividade ? params.atividade : '',
        dataInicio: params.dataInicio ? params.dataInicio : '',
        dataFim: params.dataFim ? params.dataFim : '',
        ativo: params.ativo ? params.ativo : ''
    }

    return dispatch => {
        dispatch({type: type.LOAD, payload: true})

        axios.post(endPoint, parametros)
        .then(response => {
            dispatch({ type: type.BUSCAR_ATIVIDADES, payload: response })
        })
        .catch(error => {
            dispatch({type: type.LOAD, payload: false})
            console.log(error)
        })

    }

}