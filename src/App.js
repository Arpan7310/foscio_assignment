import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Formui from './components/Formui'
import Navbarui from './components/Navbarui'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Tableui from './components/Tableui';
function App() {

return(
  <div>
<Navbarui />
<Router>
  <Switch>
 
          <Route path="/details">
            <Tableui />
          </Route>
          <Route path='/'>
            <Formui />
          </Route>
  </Switch>
</Router>
  </div>
)
}

export default App;
