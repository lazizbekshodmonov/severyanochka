import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <span>Icon</span>
                <p>Избранное</p>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span>Icon</span>
                <p>Избранное</p>
              </Link>
            </li>
            <li>
              <Link to="/users">
                <span>Icon</span>
                <p>Избранное</p>
              </Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about">
           
          </Route>
          <Route path="/users">
            
          </Route>
          <Route path="/">
            
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
