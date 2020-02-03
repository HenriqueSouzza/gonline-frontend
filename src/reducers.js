import { combineReducers } from 'redux';

// import { reducer as formReducer } from 'redux-form'; //redux-form

import { reducer as toastrReducer } from 'react-redux-toastr'; //redux do componente de mensagens

import AtvAlunosReducer from './pages/atividadesComplementares/alunos/reducer';
import AtvAtividadesAtivasReducer from './pages/atividadesComplementares/atividades-ativas/reducer';
import AtvGrupoAtividadesReducer from './pages/atividadesComplementares/grupo-atividades/reducer';

const rootReducer = combineReducers({
    dashboard: () => ({ test: 1500 }),
    toastr: toastrReducer,
    atvAlunos: AtvAlunosReducer,
    atvAtividadesAtivas: AtvAtividadesAtivasReducer,
    atvGrupoAtividades: AtvGrupoAtividadesReducer
})

export default rootReducer; 