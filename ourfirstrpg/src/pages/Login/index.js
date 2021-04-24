import { useState } from 'react';
import './login.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameSignUp, setUsernameSignUp] = useState('');
  const [passwordSignUp, setPasswordSignUp] = useState('');

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
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => {
      console.log("Request complete! response:", res);
    });
  };

  const handleSignUpSubmitForm = e => {
    e.preventDefault();
    console.log("username is " + usernameSignUp);
    console.log("password is " + passwordSignUp);

    const data = {
      username: usernameSignUp,
      password: passwordSignUp
    }
    fetch("/signup", {
      method: "POST", 
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => {
      console.log("Request complete! response:", res);
    });
  };

  const handleUsernameChange = (e) => {setUsername(e.target.value)}

  const handlePasswordChange = (e) => {setPassword(e.target.value)}

  const handleSignUpUsernameChange = (e) => {setUsernameSignUp(e.target.value)}

  const handleSignUpPasswordChange = (e) => {setPasswordSignUp(e.target.value)}

  return (
    <>
    <div className='body' style={{backgroundColor: 'rgb(44, 44, 44)'}}>
      <h1>Our First RPG</h1>
      <div className='forms'>
        <div className='formContainer'>
          <form action='/action.php'>
          <h2>Already have an account?</h2>
          <h2>Log in here.</h2>
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

        <div className='formContainer'>
          <form action='/action.php'>
          <h2>Don't have an account?</h2>
          <h2>Sign up here.</h2>
            <label for='username'>Username:</label><br />
            <input
              type='text'
              id='usernameSignUp'
              value={usernameSignUp}
              onChange={handleSignUpUsernameChange}
            />
            <br /><br />
            <label for='passwordSignUp'>Password:</label><br />
            <input
              type='password'
              id='passwordSignUp'
              value={passwordSignUp}
              onChange={handleSignUpPasswordChange}
            />
            <br /><br />
            <button className='submitButton' onClick={handleSignUpSubmitForm}>Sign up</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login;