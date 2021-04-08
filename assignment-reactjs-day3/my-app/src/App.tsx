import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Addproduct from './components/add-product';

import Login from './components/login';
import Register from './components/register';
function App() {
  return (
    
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/addproduct">Add product</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/addproduct">
            <Addproduct />
          </Route>
          <Route path="">
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
    
    
  
}

export default App;