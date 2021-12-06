import React, {useState} from 'react';
import {useHistory} from "react-router-dom"
import AppContainer from "../../components/AppContainer";
import api from '../../api';

export default function AutoresAdicionar() {
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
            await api.addAutor({
                nome, nascimento, sexo, nacionalidade
            })
            history.push('/autores');
        } catch {
            alert('Failed to add post!');
        }
        setLoading(false);
    };


    return (
        <AppContainer title="Adicionar Autor">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Nome</label>
                    <input className="form-control" type="text"
                           value={nome}
                           onChange={e => setNome(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>nascimento</label>
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
                    >
                        {loading ? 'Salvando...' : 'Salvar'}
                    </button>
                </div>
            </form>
        </AppContainer>
    );
};
