import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Engine from './pages/Engine';
import AuthTest from './pages/AuthTest';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/authTest' component={AuthTest} />
        <Route exact path='/engine' component={Engine} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
