import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//import Menu from './Menu';
import Usuarios from './usuarios'

function App() {
  return (
    <BrowserRouter>
        <Route exact path='/' component={Usuarios}></Route>
    </BrowserRouter>
  );
}

export default App;
