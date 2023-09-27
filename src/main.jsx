import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './homeApp';
import './style.css';
import {Lista} from './viewData';
import { ListaPublicaciones } from './publicacion';
import { PublicacionForm } from './publicacionApp';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App title="Pepe"/>
        <Lista></Lista>
        <hr />
        <PublicacionForm></PublicacionForm>
        <ListaPublicaciones></ListaPublicaciones>
    </React.StrictMode>
)