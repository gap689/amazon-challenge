import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51IEJybAZgp2fpKOUsKcllRNo2lTG1avfD1bIDqHU0x8gUWbxUcOUZniF32t8HqmbNYEuIEtWwQQXFJN7SEDa4ehb00Sif5GszO');

function App() {
  const [{}, dispatch] = useStateValue();

  //keep track of who is signed in 
  useEffect(() => {
    // will only run once when the app component loads...
    
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser); //logged in state

      if (authUser) {
        //the user just logged in / or the user was logged in
        dispatch({
          type:'SET_USER',
          user: authUser
        });
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

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
          
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            
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