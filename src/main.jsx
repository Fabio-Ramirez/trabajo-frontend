import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Lista } from './viewData';
import { ListaPublicaciones } from './publicacion';
import { PublicacionForm } from './publicacionApp';
import Login from './components/users/login';
import RegisterUser from './components/users/registerUser';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className="container col-4 mt-5">
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/registerUser" element={<RegisterUser />} />
                    {/* Otras rutas y componentes */}
                </Routes>
            </Router>
        </div>

        {/* Este es un comentario en línea 
        <App title="Pepe"/>
        <Lista></Lista>
        <hr />
        <PublicacionForm></PublicacionForm>
        <ListaPublicaciones></ListaPublicaciones>*/}

    </React.StrictMode>
)