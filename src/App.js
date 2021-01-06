import React from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    //BEM
    
    <Router>
      <div className="app">
      <Header />
        <Switch>
          <Route path="/checkout">
            
            <h1>
              Congrats, your about to make a purchase!
            </h1>
            <Checkout />

          </Route>
          <Route path="/">
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
