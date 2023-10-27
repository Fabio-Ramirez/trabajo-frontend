import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import RegisterUser from './registerUser';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica de autenticación, por ejemplo, enviar los datos a un servidor
        console.log('Correo electrónico:', email);
        console.log('Contraseña:', password);
    };

    const isValidEmail = (email) => {
        // Expresión regular para verificar el formato del correo electrónico
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };


    return (
        <div className="login-form">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Correo Electrónico"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    inputProps={{
                        pattern: '^[^\s@]+@[^\s@]+\.[^\s@]+$', // Expresión regular para el formato del correo electrónico
                    }}
                    error={!isValidEmail(email)} // Indica un error si el correo electrónico no cumple con el formato
                    helperText={!isValidEmail(email) ? 'Correo electrónico inválido' : ''}
                />
                <TextField
                    label="Contraseña"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
                <Button variant="contained" type="submit" fullWidth color="primary">
                    Iniciar Sesión
                </Button>
                <div className='mt-3'>
                    <Button variant="contained" size="small">
                        <Link className="nav-link" to="/registerUser">Registrarse</Link>
                    </Button>
                </div>
                <div className="col-9">
                    <Routes>
                        <Route path="/registerUser" element={<RegisterUser />} />
                    </Routes>
                </div>
            </form>
        </div>
    );
};

export default Login;
