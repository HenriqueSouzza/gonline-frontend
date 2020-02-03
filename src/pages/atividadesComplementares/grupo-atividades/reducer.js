import type from './types';

//Estado inicial da componente
const INITIAL_STATE = {
    list: [],
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        //Caso para apresentar o load na tela quando for true
        case type.LOAD:
            return { ...state, loading: action.payload }

        //Caso retornar algum erro
        case type.ERROR:
            return { ...state, list: action.payload.data || INITIAL_STATE.list, loading: false }

        //Caso para buscar grupo de atividades
        case type.BUSCAR_GRUPO_ATIVIDADE:
            return { ...state, list: action.payload.data || INITIAL_STATE.list, loading: false }        

        //Caso para salvar um grupo de atividade
        case type.SALVAR_GRUPO_ATIVIDADE:
            return { ...state, list: action.payload.data || INITIAL_STATE.list, loading: false }        

        //Caso para salvar um grupo de atividade
        case type.ALTERAR_GRUPO_ATIVIDADE:
            return { ...state, list: action.payload.data || INITIAL_STATE.list, loading: false }        

        //Caso para remover um grupo de atividades
        case type.REMOVER_GRUPO_ATIVIDADE:
            return { ...state, list: action.payload.data || INITIAL_STATE.list, loading: false }        

        default:
            return state;   

    }

}