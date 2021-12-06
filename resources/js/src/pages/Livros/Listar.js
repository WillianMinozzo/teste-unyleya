import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import AppContainer from "../../components/AppContainer";
import api from '../../api';

export default function LivrosListar() {
    const [livros, setLivros] = useState(null);

    function fetchData() {
        return api.getAllLivros()
            .then(response => setLivros(response.data))
            .catch(() => alert('Não foi possível buscar os dados.'));
    }

    useEffect(() => {
        fetchData();
    }, []);

    const renderLivros = () => {
        if (!livros) {
            return (
                <tr>
                    <td colSpan="4">Carregando...</td>
                </tr>
            )
        }

        if (livros.length === 0) {
            return (
                <tr>
                    <td colSpan="4">Nenhum registro.</td>
                </tr>
            )
        }

        return livros.map((item) => (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.titulo}</td>
                <td>{item.descricao}</td>
                <td>
                    <Link className="btn btn-warning" to={`/livros/editar/${item.id}`}>Editar</Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                            if (window.confirm('Deseja remover o registro?')) {
                                api.deleteLivro(item.id)
                                    .then(fetchData)
                                    .catch(err =>
                                        alert('Não foi possível remover o registro.')
                                    );
                            }
                        }}
                    >
                        Remover
                    </button>
                </td>
            </tr>
        ))
    }

    return (
        <AppContainer title="Livros">
            <Link to="/livros/adicionar" className="btn btn-primary">
                Adicionar
            </Link>
            <div className="table-responsive">
                <table className="table table-striped mt-1">
                    <thead>
                    <tr>
                        <th>ID.</th>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderLivros()}
                    </tbody>
                </table>
            </div>
        </AppContainer>
    );
};
