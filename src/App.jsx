import React, { useState } from "react";
import './App.css';
import OrderPizza from './components/OrderPizza';
import Home from './components/Home';
import Success from './components/Success';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [orderData, setOrderData] = useState(null);

  return (
    <>

      <Switch>
        <Route exact path="/">
          <Home />
          {/* <Footer /> */}
        </Route>
        <Route path="/order">
          <OrderPizza setOrderData={setOrderData} />
        </Route>
        <Route path="/success">
          <Success orderData={orderData} />
          <Footer />
        </Route>
      </Switch>
    </>
  );
}

export default App;


