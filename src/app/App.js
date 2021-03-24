import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './style/App.scss';
import './style/_variables.scss';

import Header from '../components/header/header';

import Home from '../views/home/home'

function App() {
    return (
        <div className="App">
        {/* Router */}
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
        </div>
    );
}

export default App;
