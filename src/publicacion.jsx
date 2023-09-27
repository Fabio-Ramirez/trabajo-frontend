import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ListaPublicaciones = () => {
    const [publicaciones, setPublicaciones] = useState([]);

    useEffect(() => {
        // Realiza una solicitud GET para obtener las publicaciones
        axios.get('http://localhost:3001/comercio/publicaciones')
            .then((resp) => {
                const datos = resp.data;
                setPublicaciones(datos);
                console.log(resp.data);
            })
            .catch((error) => {
                alert('Error obtendiendo los datos de las publicaciones! Anda paya Bobo!!');
                console.log(error);
            })
    }, []);

    return (
        <>
            <h1>Lista de Publicaciones</h1>
            <ul>
                {publicaciones.map((publicacion) => (
                    <li key={publicacion._id}>
                        Descripción: {publicacion.descripcion} - 
                        Fecha: {publicacion.fecha}<br />
                    </li>
                ))}
            </ul>
        </>
    );
}
