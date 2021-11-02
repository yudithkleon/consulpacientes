import React from 'react'
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Footer } from '../components/Footer';
import Login from '../components/Login/Login';
import { Registro } from '../components/Login/Registro';
import { NavBar } from '../components/NavBar';
import { ConsultaAtender } from '../components/page.jsx/ConsultaAtender';
import { ListarAncianoporEdad } from '../components/page.jsx/Listarpacientes/ListarAncianoporEdad';
import { ListarAncianos } from '../components/page.jsx/Listarpacientes/ListarAncianos';
import { ListarJovenes } from '../components/page.jsx/Listarpacientes/ListarJovenes';
import { ListarJovenFumador } from '../components/page.jsx/Listarpacientes/ListarJovenFumador';
import { ListarMayorRiesgo } from '../components/page.jsx/Listarpacientes/ListarMayorRiesgo';
import { ListarNiños } from '../components/page.jsx/Listarpacientes/ListarNiños';
import { ListarTodas } from '../components/page.jsx/ListarTodas';
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
                <Route exact path="/listaJovenes" component={ListarJovenes}/>
                <Route exact path="/listarAnciano" component={ListarAncianos}/>
                <Route exact path="/listarfumador" component={ListarJovenFumador}/>
                 <Route exact path="/listarmayorRiesgo" component={ListarMayorRiesgo}/>
                 <Route exact path="/listarAncianoEdad" component={ListarAncianoporEdad}/>
                 <Route exact path="/listarTodas" component={ListarTodas}/>
                 <Route exact path="/consultaA" component={ConsultaAtender}/>
            </Switch>
      </Router>
        <Footer/>
        </div>
    )
}
