import { useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const RegisterUser = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ username, password, email });
    axios.post('http://localhost:3001/comercio/users', { username, password, email })
      .then((resp) => {
        alert('Datos Cargados con exito!!' + response.data.message);
        console.log(resp);
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
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          fullWidth
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <br />
        <br />
        <br />
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
        {/* Este es un comentario en línea 
        <label htmlFor="">Email: <input type="email" name="email" id="email" value={email} onChange={event => setEmail(event.target.value)} />
        </label>*/}
        <br />
        <br />
        <Button type='submit' variant="contained" color="primary">
          Enviar
        </Button>


      </form>
    </>
  );
};

export default RegisterUser;
