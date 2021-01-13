import React from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  return (
    //BEM
    
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <h1>
              You're about to make a purchase!
            </h1>
            <Checkout />

          </Route>
          <Route path="/">
            <Header />
            {/* Home */}
            <Home />
            {/* */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
