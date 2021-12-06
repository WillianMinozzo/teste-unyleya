import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import LivrosListar from './pages/Livros/Listar';
import LivrosEditar from './pages/Livros/Editar';
import LivrosAdicionar from './pages/Livros/Adicionar';

const App = () => {
    return (
        <BrowserRouter className="App_container">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/livros">
                    <LivrosListar />
                </Route>
                <Route path="/livros/adicionar">
                    <LivrosAdicionar />
                </Route>
                <Route path="/livros/editar/:id">
                    <LivrosEditar />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));
