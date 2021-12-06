import React from "react";
import {Link} from 'react-router-dom'
import AppContainer from "../../components/AppContainer";

export default function Home() {
    return (
        <AppContainer title="Biblioteca">
            <ul>
                <li>
                    <Link to="/livros">Livros</Link>
                </li>
                <li>
                    <Link to="/autores">Autores</Link>
                </li>
            </ul>
        </AppContainer>
    )
}
