/*import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Wolrd!</h1>
      </div>
    );
  }
}
export default App;*/
import React from 'react';
import {Route, Switch} from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from "./components/Pages/HomePage/Home"
function App() {
    return (
        <div className="App">
            <Router>
              <Switch>
                <Route path = '/' component = {Home} />
              </Switch>
            </Router>
        </div>
    )
}

export default App
