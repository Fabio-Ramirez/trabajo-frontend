import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const EditarUser = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [rol, setRol] = useState('estandar');
    const [imagenUrl, setImagenUrl] = useState('');
    const { userId } = useParams();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ email, password, username, rol, imagenUrl });
        axios.put(`http://localhost:3001/comercio/updateUser/${userId}`, { email, password, username, rol, imagenUrl })
            .then((resp) => {
                alert('Datos Actualizados con exito!!');
                console.log(resp);
                navigate('/userPerfil/:userId');
            })
            .catch((error) => {
                console.log("error: ", error.response.data.message);
                alert('!!Error: ' + error.response.data.message);

            })
    }

    const isValidEmail = (email) => {
        // Expresión regular para verificar el formato del correo electrónico
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    return (
        <>
            <form action="" onSubmit={handleSubmit}>

                <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    fullWidth
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    
                    inputProps={{
                        pattern: '^[^\s@]+@[^\s@]+\.[^\s@]+$', // Expresión regular para el formato del correo electrónico
                    }}
                    error={!isValidEmail(email)} // Indica un error si el correo electrónico no cumple con el formato
                    helperText={!isValidEmail(email) ? 'Correo electrónico inválido' : ''}
                />
                <br />
                <br />
                <br />
                <TextField
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    fullWidth
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    
                />
                <br />
                <br />
                <br />
                <TextField
                    id="standard-basic"
                    label="Username"
                    variant="standard"
                    fullWidth
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    
                />

                <br />
                <br />
                <br />
                <InputLabel id="standard-basic">Rol</InputLabel>
                <Select
                    id="standard-basic"
                    variant="standard"
                    fullWidth
                    value={rol}
                    label="Rol"
                    onChange={(event) => setRol(event.target.value)}
                >
                    <MenuItem value="estandar">Estandar</MenuItem>
                    <MenuItem value="administrador">Administrador</MenuItem>
                </Select>
                <br />
                <br />
                <br />
                <TextField
                    id="standard-basic"
                    label="Imagen en Url"
                    variant="standard"
                    fullWidth
                    type="url"
                    value={imagenUrl}
                    onChange={(event) => setImagenUrl(event.target.value)}
                />
                {/* Este es un comentario en línea 
          <label htmlFor="">Email: <input type="email" name="email" id="email" value={email} onChange={event => setEmail(event.target.value)} />
          </label>*/}
                <br />
                <br />
                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
                    <Button type='submit' variant="contained" color="primary">
                        Editar
                    </Button>
                    <Button className="cancelButton" type='submit' variant="contained" color="secondary">
                        <Link className="nav-link" to={`/userPerfil/${userId}`}>Cancelar</Link>
                    </Button>

                </div>



            </form>
        </>
    );
};

export default EditarUser;
