import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import AppContainer from "../../components/AppContainer";
import api from '../../api';

export default function AutoresListar() {
    const [autores, setAutores] = useState(null);

    function fetchData() {
        return api.getAllAutores()
            .then(response => setAutores(response.data))
            .catch(() => alert('Não foi possível buscar os dados.'));
    }

    useEffect(() => {
        fetchData();
    }, []);

    const renderAutores = () => {
        if (!autores) {
            return (
                <tr>
                    <td colSpan="4">Carregando...</td>
                </tr>
            )
        }

        if (autores.length === 0) {
            return (
                <tr>
                    <td colSpan="4">Nenhum registro.</td>
                </tr>
            )
        }

        return autores.map((item) => (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.ano_nascimento}</td>
                <td>{item.sexo}</td>
                <td>{item.nacionalidade}</td>
                <td>
                    <Link className="btn btn-warning" to={`/autores/editar/${item.id}`}>Editar</Link>
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
        <AppContainer title="autores">
            <Link to="/autores/adicionar" className="btn btn-primary">
                Adicionar
            </Link>
            <div className="table-responsive">
                <table className="table table-striped mt-1">
                    <thead>
                    <tr>
                        <th>ID.</th>
                        <th>Nome</th>
                        <th>Ano nascimento</th>
                        <th>Sexo</th>
                        <th>Nacionalidade</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderAutores()}
                    </tbody>
                </table>
            </div>
        </AppContainer>
    );
};
