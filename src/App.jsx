import React from "react";
import './App.css';
import OrderPizza from './components/OrderPizza';
import Home from './components/Home';
import Success from './components/Success';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/order" component={OrderPizza} />
      <Route path="/success" component={Success} />
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