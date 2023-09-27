import React, { useState } from 'react';
import axios from 'axios';

export const PublicacionForm = () => {
    const [usuario, setUsuario] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fecha, setFecha] = useState('');
    const [imagen, setImagen] = useState('');
    const [hora, setHora] = useState('');
    const [ubicacion, setUbicacion] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const nuevaPublicacion = {
            usuario,
            descripcion,
            fecha,
            imagen,
            hora,
            ubicacion,
        };

        // Realiza una solicitud POST para guardar la publicación
        axios.post('http://localhost:3001/comercio/publicaciones', nuevaPublicacion)
            .then((resp) => {
                alert('Datos de publicación guardados con éxito!!');
                console.log(resp);
                // Limpia los campos del formulario después de guardar
                setUsuario('');
                setDescripcion('');
                setFecha('');
                setImagen('');
                setHora('');
                setUbicacion('');
            })
            .catch((error) => {
                alert('Error al guardar los datos de la publicación. Anda pa ya Bobo!!');
                console.log(error);
            });
    }

    return (
        <>
            <h1>Cargar Datos de Publicación</h1>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="descripcion">Descripción: </label>
                <input
                    type="text"
                    id="descripcion"
                    value={descripcion}
                    onChange={(event) => setDescripcion(event.target.value)}
                />
                <br />
                <br />
                <label htmlFor="usuario">Usuario: </label>
                <input
                    type="text"
                    id="usuario"
                    value={usuario}
                    onChange={(event) => setUsuario(event.target.value)}
                />
                <br />
                <br />
                <label htmlFor="fecha">Fecha: </label>
                <input
                    type="text"
                    id="fecha"
                    value={fecha}
                    onChange={(event) => setFecha(event.target.value)}
                />
                <br />
                <br />
                <label htmlFor="imagen">Imagen: </label>
                <input
                    type="text"
                    id="imagen"
                    value={imagen}
                    onChange={(event) => setImagen(event.target.value)}
                />
                <br />
                <br />
                <label htmlFor="hora">Hora: </label>
                <input
                    type="text"
                    id="hora"
                    value={hora}
                    onChange={(event) => setHora(event.target.value)}
                />
                <br />
                <br />
                <label htmlFor="ubicacion">Ubicación: </label>
                <input
                    type="text"
                    id="ubicacion"
                    value={ubicacion}
                    onChange={(event) => setUbicacion(event.target.value)}
                />
                <br />
                <br />
                <button type='submit'>Enviar</button>
            </form>
        </>
    );
}
