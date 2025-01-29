import React from "react";
import './App.css';
import OrderPizza from './components/OrderPizza';
import Home from './components/Home';
import Success from './components/Success';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/order" component={OrderPizza} />
        <Route path="/success" component={Success} />
      </Switch>
    </>
  );
}

export default App;


//   return (
//     <>
//       <div>
//         <OrderPizza />
//       </div>
//     </>
//   )
// }

// export default App