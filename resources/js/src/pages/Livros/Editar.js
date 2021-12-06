import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom"
import AppContainer from "../../components/AppContainer";
import api from '../../api';

export default function LivrosEditar() {
    const {id} = useParams();
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    // Campos da tabela
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [genero, setGenero] = useState('');
    const [editora, setEditora] = useState('');
    const [ano, setAno] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await api.updateLivro({
                titulo, descricao, genero, editora, ano
            }, id);
            history.push('/livros');
        } catch {
            alert('Failed to Edit post!');
        }

        setLoading(false);
    };

    useEffect(() => {
        api.getOneLivro(id).then((res) => {
            const item = res.data;
            setTitulo(item.titulo);
            setDescricao(item.descricao);
            setGenero(item.genero);
            setEditora(item.editora);
            setAno(item.ano);
        });
    }, []);


    return (
        <AppContainer title="Editar Livro">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Título</label>
                    <input
                        className="form-control"
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Genero</label>
                    <input className="form-control" type="text"
                           value={genero}
                           onChange={e => setGenero(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Editora</label>
                    <input className="form-control" type="text"
                           value={editora}
                           onChange={e => setEditora(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Ano</label>
                    <input className="form-control" type="text"
                           value={ano}
                           onChange={e => setAno(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        className="form-control"
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                    ></textarea>
                </div>
                <div className="form-group">
                    <button type="submit"
                            className="btn btn-success"
                            disabled={loading}
                    >{loading ? 'Salvando...' : 'Salvar'}</button>
                </div>
            </form>
        </AppContainer>
    );
};
