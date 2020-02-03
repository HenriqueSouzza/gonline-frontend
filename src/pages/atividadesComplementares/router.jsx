import React from 'react';
import { Route, Switch } from 'react-router-dom';

//
import Alunos from './alunos/alunos';
import AlunosNovo from './alunos/novo';
import AlunosEditar from './alunos/editar';

//
import Categorias from './categorias/categorias';
import CategoriasNovo from './categorias/novo';

//
import Atividades from  './atividades/atividades';
import AtividadesVisualizar from  './atividades/visualizar';

function Router(){
    return(
        <Switch>
            {/*  */}
            <Route exact path='/atividades-complementares/alunos' component={ props => <Alunos {...props} />} />
            <Route exact path='/atividades-complementares/alunos/novo' component={ props => <AlunosNovo {...props} />} />
            <Route exact path='/atividades-complementares/alunos/:ordem/editar' component={ props => <AlunosEditar {...props} />} />
            {/*  */}
            <Route exact path='/atividades-complementares/categorias' component={ props => <Categorias {...props} />} />
            <Route exact path='/atividades-complementares/categorias/novo' component={ props => <CategoriasNovo {...props} />} />
            {/*  */}
            <Route exact path='/atividades-complementares/atividades' component={ props => <Atividades {...props} />} />
            <Route exact path='/atividades-complementares/atividades/:atividade/visualizar' component={ props => <AtividadesVisualizar {...props} />} />
        </Switch>
    )
}

export default Router;