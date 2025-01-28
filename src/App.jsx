import './App.css';
import PizzaForm from './components/PizzaForm';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from "react";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<PizzaForm />} />
      </Switch>
    </Router>
  );
}

export default App;
