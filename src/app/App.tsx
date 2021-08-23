import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Constructor from '../pages/constructor';
import Home from '../pages/home';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/constructor">Constructor</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/constructor">
            <Constructor />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;