import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmitForm = () => {

  }

  const handleChange = (e) => {}

  return (
    <div>
      <form action="/action.php">
        <label for="username">username:</label><br />
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleChange}
        />
        <br /><br />
        <label for="password">Password:</label><br />
        <input type="password" id="password" value={password}/><br /><br />
      </form>
    </div>
  )
}

export default Login;