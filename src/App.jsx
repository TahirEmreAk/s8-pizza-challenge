import React, { useState } from "react";
import './App.css';
import OrderPizza from './components/OrderPizza';
import Home from './components/Home';
import Success from './components/Success';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const [orderData, setOrderData] = useState(null);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/order">
          <OrderPizza setOrderData={setOrderData} />
        </Route>
        <Route path="/success">
          <Success orderData={orderData} />
        </Route>
      </Switch>
    </>
  );
}

export default App;


