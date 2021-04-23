import { useState } from 'react';
import './login.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitForm = e => {
    e.preventDefault();
    console.log("username is " + username);
    console.log("password is " + password);

    const data = {
      username: username,
      password: password
    }
    fetch("/login", {
      method: "POST", 
      body: JSON.stringify(data)
    }).then(res => {
      console.log("Request complete! response:", res);
    });
  };

  const handleUsernameChange = (e) => {setUsername(e.target.value)}

  const handlePasswordChange = (e) => {setPassword(e.target.value)}

  return (
    <>
    <div className='body' style={{backgroundColor: 'rgb(44, 44, 44)'}}>
      <h1>Our First RPG</h1>
      <div className='formContainer'>
        <form action='/action.php'>
          <label for='username'>Username:</label><br />
          <input
            type='text'
            id='username'
            value={username}
            onChange={handleUsernameChange}
          />
          <br /><br />
          <label for='password'>Password:</label><br />
          <input
            type='password'
            id='password'
            value={password}
            onChange={handlePasswordChange}
          />
          <br /><br />
          <button className='submitButton' onClick={handleSubmitForm}>Login</button>
        </form>
      </div>
      </div>
    </>
  )
}

export default Login;