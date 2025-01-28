import './App.css';
import OrderPizza from './components/OrderPizza';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from "react";
import Success from './components/Success';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<OrderPizza />} />
        <Route path="/success" element={<Success />} />
      </Switch>
    </Router>
  );
}

export default App;
