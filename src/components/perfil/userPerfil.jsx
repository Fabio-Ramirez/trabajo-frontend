import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Typography, Paper } from '@material-ui/core';

const UserPerfil = () => {
    const { userId } = useParams();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Hacer la solicitud para obtener los datos del usuario basado en el userId
        axios.get(`http://localhost:3001/comercio/user/${userId}`)
            .then((resp) => {
                console.log(resp);
                setUserData(resp.data);
            })
            .catch((error) => {
                console.error('Error al obtener los datos del usuario:', error);
            });
    }, [userId]);

    if (!userData) {
        return <div>Cargando...</div>;
    }

    return (
        <Paper elevation={1} style={{ padding: 16, margin: 16 }}>
            <Typography variant="h4" gutterBottom>
                Username: {userData.username} 
            </Typography>
            <Typography variant="body1" paragraph>
                Correo Electrónico: {userData.email}
            </Typography>
            <Typography variant="body1" paragraph>
                Password: {userData.password}
            </Typography>
            {/* Agrega más detalles según la estructura de tu usuario */}
        </Paper>
    );
};

export default UserPerfil;
