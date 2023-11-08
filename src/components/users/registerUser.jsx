import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import Login from './login';


const RegisterUser = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [rol, setRol] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password, username, rol });
    axios.post('http://localhost:3001/comercio/users', { email, password, username, rol })
      .then((resp) => {
        alert('Datos Cargados con exito!!');
        console.log(resp);
        navigate('/');
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
          required
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
          required
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
          required
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
        {/* Este es un comentario en línea 
        <label htmlFor="">Email: <input type="email" name="email" id="email" value={email} onChange={event => setEmail(event.target.value)} />
        </label>*/}
        <br />
        <br />
        <Button type='submit' variant="contained" color="primary">
          Enviar
        </Button>
        <Button type='submit' variant="contained" color="secondary">
          <Link className="nav-link" to="/">Cancelar</Link>

        </Button>



      </form>
    </>
  );
};

export default RegisterUser;
