import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        display: 'inline-block',
        width: 'auto',
    },
    container: {
        maxHeight: 840,
    },
    tableHeaderCell: {
        backgroundColor: 'black', // Color de fondo para las celdas del encabezado
        color: 'white', // Color del texto
        // Agrega más estilos según sea necesario
    },
    customTableHead: {
        backgroundColor: 'lightblue', // Color de fondo para el encabezado de la tabla
        // Agrega más estilos según sea necesario
    },
});
const Usuarios = () => {

    const classes = useStyles();
    const [usuarios, setUsuarios] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    useEffect(() => {
        // Realizar la solicitud GET para obtener todos los usuarios
        axios.get('http://localhost:3001/comercio/users')
            .then((response) => {
                console.log(" todos lo datos: ", response.data)
                // Al recibir la respuesta, actualizar el estado con los usuarios
                setUsuarios(response.data);
            })
            .catch((error) => {
                // Manejar cualquier error en la solicitud
                console.error('Error al obtener usuarios:', error);
            });
    }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead className={classes.customTableHead}>
                        <TableRow>
                            <TableCell className={classes.tableHeaderCell}>ID</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Nombre de Usuario</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Email</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Rol</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Imagen</TableCell>
                            {/* Agrega más encabezados si es necesario */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {usuarios.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((usuario) => (
                            <TableRow key={usuario.id}>
                                <TableCell>{usuario._id}</TableCell>
                                <TableCell>{usuario.username}</TableCell>
                                <TableCell>{usuario.email}</TableCell>
                                <TableCell>{usuario.rol}</TableCell>
                                <TableCell>{usuario.imagenUrl}</TableCell>
                                {/* Agrega más celdas de acuerdo a la estructura de tus datos */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={usuarios.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default Usuarios;
