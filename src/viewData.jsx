import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Lista = () => {
    const [usuarios, setLista] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/comercio/users')
            .then((resp) => {
                const datos = resp.data;
                setLista(datos);
                console.log(resp.data);
            })
            .catch((error) => {
                alert('Error obtendiendo los datos! Anda paya Bobo!!');
                console.log(error);
            })
    }, []);

    return (
        <>
            <h1>Lista de usuarios</h1>
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>
                        {usuario.username} - {usuario.email}
                        <ul>
                            {usuario.publicaciones?.map((publicacion) => (
                                <li key={publicacion._id}>
                                    Publicaciones: {publicacion.nombrePublicacion}                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </>

    )
}