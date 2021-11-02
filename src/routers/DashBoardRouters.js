import React from 'react'
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Login from '../components/Login/Login';
import { Registro } from '../components/Login/Registro';
import { NavBar } from '../components/NavBar';
import { ListarNiños } from '../components/page.jsx/Listarpacientes/ListarNiños';
import { PacienteRegistro } from '../components/page.jsx/PacienteRegistro';
import { Principal } from '../components/Principal';

export const DashBoardRouters = () => {
    return (
        <div>
             <Router>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Principal} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Registro} />
                <Route exact path="/registerPaciente" component={PacienteRegistro} />
                <Route exact path="/listarNino" component={ListarNiños}/>
            </Switch>
        </Router>
        </div>
    )
}
