import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia, Avatar, Box } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import sinImagen from '../../assets/sin-imagen1.png';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

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
        <Box position="relative">
            <div>
                <Card variant="outlined" style={{ margin: 16 }}>
                    <CardMedia
                        component="img"
                        alt="Imagen del usuario"
                        height="140"
                        image={userData.imagenUrl || sinImagen}
                    />
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            Username: {userData.username}
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Correo Electrónico: {userData.email}
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Password: {userData.password}
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Rol: {userData.rol}
                        </Typography>
                        {/* Agrega más detalles según la estructura de tu usuario */}
                    </CardContent>
                </Card>
            </div>
            <div>
                <Button variant="contained" color="primary"  style={{ position: 'absolute', right: '35%' }}>
                    <Link className="nav-link" to={`/editarUser/${userId}`}>
                        Editar datos
                    </Link>
                </Button>
            </div>
        </Box>

    );
};

export default UserPerfil;
