import React, {useState} from 'react';
import {useHistory} from "react-router-dom"
import AppContainer from "../../components/AppContainer";
import api from '../../api';

export default function LivrosAdicionar() {
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    // Campos da tabela
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await api.addLivro({
                titulo, descricao,
            })
            history.push('/livros');
        } catch {
            alert('Failed to add post!');
        }
        setLoading(false);
    };


    return (
        <AppContainer title="Adicionar Livro">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Título</label>
                    <input className="form-control" type="text"
                           value={titulo}
                           onChange={e => setTitulo(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Descrição</label>
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
                    >
                        {loading ? 'Salvando...' : 'Salvar'}
                    </button>
                </div>
            </form>
        </AppContainer>
    );
};
