const Login = () => {
  return (
    <div>
      <form action="/action.php">
        <label for="username">username:</label><br />
        <input type="text" id="username"  /><br /><br />
        <label for="password">Password:</label><br />
        <input type="password" id="password" /><br /><br />
      </form>
    </div>
  )
}

export default Login;