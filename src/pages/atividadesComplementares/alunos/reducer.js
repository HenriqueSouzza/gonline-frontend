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

        //Caso para buscar as caterias e atualizar os estados
        case type.BUSCAR_CATEGORIA:
            return { ...state, list: action.payload.data || INITIAL_STATE.list, loading: false }        

        //Caso para buscar as caterias e atualizar os estados
        case type.SALVAR_CATEGORIA:
            return { ...state, loading: false } 

        //Caso para trazer o resultado se for deletado ou não 
        case type.REMOVER_ALUNO:
            return { ...state, list: action.payload.data || INITIAL_STATE.list, loading: false } 
        
        default:
            return state;   

    }

}