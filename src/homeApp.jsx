import { useState } from 'react';
import axios from 'axios';


export const App = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [dni, setDni] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({username,password,email,dni});
    axios.post('http://localhost:3001/comercio/users',{username,password,email,dni})
    .then((resp)=>{
      alert('Datos Cargados con exito!!');
      console.log(resp);
    })
    .catch((error)=>{
      alert('Anda pa ya Bobo!!');
      console.log(error);
    })
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">username: <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} /> </label>

        <br />
        <br />
        <br />
        <label htmlFor="">password: <input type="password" name="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} /></label>

        <br />
        <br />
        <br />
        <label htmlFor="">Email: <input type="email" name="email" id="email" value={email} onChange={event => setEmail(event.target.value)} />
        </label>

        <br />
        <br />
        <br />
        <label htmlFor="">DNI: <input type="number" name="dni" id="dni" value={dni} onChange={event => setDni(event.target.value)} />
        </label>

        <br />
        <br />
        <button type='submit'>Enviar</button>


      </form>
    </>
  );
}
