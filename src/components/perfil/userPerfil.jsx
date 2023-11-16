import React, { useState, useEffect } from 'react';
import axios from '../../../axiosConfig';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia, CardActions, Avatar, Box } from '@material-ui/core';
import sinImagen from '../../assets/sin-imagen1.png';
import { Tooltip, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const UserPerfil = () => {
    const { userId } = useParams();
    const [userData, setUserData] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        // Hacer la solicitud para obtener los datos del usuario basado en el userId
        axios.get(`http://localhost:3001/comercio/user/${userId}`)
            .then((resp) => {
                console.log(resp.data);
                setUserData(resp.data);
            })
            .catch((error) => {
                console.error('Error al obtener los datos del usuario:', error);
            });
    }, [userId]);

    const handleLogout = () => {
        // Limpiar el token de autenticación almacenado
        localStorage.removeItem('token');

        navigate(`/`);
    };


    if (!userData) {
        return <div>Cargando...</div>;
    }

    return (
        <Box position="relative">
            <div>
                <Button variant="contained" color="secondary" style={{ position: 'absolute', top: '3%', right: '15%', zIndex: 2 }}
                    onClick={handleLogout}>
                    Logout
                </Button>
            </div>
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
                    <CardActions style={{ justifyContent: 'flex-end' }}>
                        <Button variant="contained" color="primary" >
                            <Link className="nav-link"
                                to={{
                                    pathname: `/editarUser/${userId}`
                                }}>
                                Editar datos
                            </Link>
                        </Button>
                    </CardActions>
                </Card>
            </div>
            <div>
                {userData.rol === 'administrador' ? (
                    <Tooltip title="Ver" placement="bottom">
                        <Button variant="contained" style={{ position: 'absolute' }}>
                            <Link className="nav-link" to={`/allUsers`}>
                                Ver usuarios
                            </Link>
                        </Button>
                    </Tooltip>
                ) : (
                    <Tooltip title="No es administrador" placement="bottom">
                        <Button variant="contained" style={{ position: 'absolute' }} disabled>
                            <Link className="nav-link" to={`/otraRuta`}>
                                Ver usuarios
                            </Link>
                        </Button>
                    </Tooltip>
                )}
            </div>
        </Box>

    );
};

export default UserPerfil;
