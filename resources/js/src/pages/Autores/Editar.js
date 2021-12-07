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
    const [ano_nascimento, setAnoNascimento] = useState('');
    const [sexo, setSexo] = useState('');
    const [nacionalidade, setNacionalidade] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await api.updateAutor({
                nome, ano_nascimento, sexo, nacionalidade
            }, id);
            history.push('/autores');
        } catch {
            alert('Failed to Edit post!');
        }

        setLoading(false);
    };

    useEffect(() => {
        api.getOneAutor(id).then((res) => {
            const item = res.data;
            setNome(item.nome);
            setAnoNascimento(item.ano_nascimento);
            setSexo(item.sexo);
            setNacionalidade(item.nacionalidade);
        });
    }, []);


    return (
        <AppContainer title="Editar Autor">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Nome</label>
                    <input
                        className="form-control"
                        value={nome}
                        onChange={e => setTitulo(e.target.value)}
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
                    <label>Ano nascimento</label>
                    <input className="form-control" type="text"
                           value={ano_nascimento}
                           onChange={e => setAnoNascimento(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Nacionalidade</label>
                    <textarea
                        className="form-control"
                        value={nacionalidade}
                        onChange={e => setNacionalidade(e.target.value)}
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
