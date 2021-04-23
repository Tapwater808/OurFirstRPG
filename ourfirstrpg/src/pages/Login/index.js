import { useState } from "react";
import './login.css'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmitForm = () => {

  }

  const handleChange = (e) => {}

  return (
    <>
    <div className='body' style={{backgroundColor: 'rgb(44, 44, 44)'}}>
      <h1>Our First RPG</h1>
      <div className="formContainer">
        <form action="/action.php">
          <label for="username">Username:</label><br />
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleChange}
          />
          <br /><br />
          <label for="password">Password:</label><br />
          <input type="password" id="password" value={password}/><br /><br />
          <button className='submitButton'>Login</button>
        </form>
      </div>
      </div>
    </>
  )
}

export default Login;