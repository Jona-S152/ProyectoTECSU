
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './routes/Login.jsx';
import Register from "./routes/SignUp.jsx";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="Pages/Session" component={Login} />
                <Route path="Pages/Registrer" component={Register} />
                {/* Otras rutas */}
            </Switch>
        </Router>
    );
}

export default App;
