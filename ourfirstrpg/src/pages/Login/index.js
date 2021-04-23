import { useState } from 'react';
import './index.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmitForm = () => {

  }

  const handleUsernameChange = (e) => {setUsername(e.target.value)}

  const handlePasswordChange = (e) => {setPassword(e.target.value)}

  return (
    <>
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
    </>
  )
}

export default Login;