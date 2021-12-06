import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom"
import AppContainer from "../../components/AppContainer";
import api from '../../api';

export default function AutoresEditar() {
    const {id} = useParams();
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    // Campos da tabela
    const [nome, setNome] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [sexo, setSexo] = useState('');
    const [nacionalidade, setNacionalidade] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await api.updateAutor({
                nome, nascimento, sexo, nacionalidade
            }, id);
            history.push('/autores');
        } catch {
            alert('Failed to Edit post!');
        }

        setLoading(false);
    };

    useEffect(() => {
        api.getOneLivro(id).then((res) => {
            const item = res.data;
            setNome(item.titulo);
            setNascimento(item.descricao);
            setSexo(item.genero);
            setNacionalidade(item.editora);
        });
    }, []);


    return (
        <AppContainer title="Editar Autores">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Nome</label>
                    <input
                        className="form-control"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Nascimento</label>
                    <input className="form-control" type="text"
                           value={nascimento}
                           onChange={e => setNascimento(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Sexo</label>
                    <input className="form-control" type="text"
                           value={sexo}
                           onChange={e => setSexo(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Nacionalidade</label>
                    <input className="form-control" type="text"
                           value={nacionalidade}
                           onChange={e => setNacionalidade(e.target.value)}
                    />
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
