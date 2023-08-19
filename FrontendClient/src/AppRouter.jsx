import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sesion from './Pages/Sesion';
import Registrer from './Pages/Registrer';

function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Sesion} />
        <Route path="/register" component={Registrer} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
