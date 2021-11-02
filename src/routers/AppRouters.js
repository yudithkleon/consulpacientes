import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch
  } from "react-router-dom";

import { useDispatch } from "react-redux"
import { getAuth, onAuthStateChanged} from "@firebase/auth"
import Login from '../components/Login/Login';
import { Registro } from '../components/Login/Registro';
import { loginEmailPassword } from "../Redux/actiones/actionLogin";
import { DashBoardRouters } from "./DashBoardRouters";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter
 } from "./PublicRouter";


export const AppRouters = () => {

    const dispatch = useDispatch();

    const [checking, setChecking]= useState(true);
    const [isLoggedIn, setIsLoggedIn]= useState(false);
    
    useEffect(() => {
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
          if (user?.uid) {
              dispatch(loginEmailPassword(user.uid, user.displayName))
              setIsLoggedIn(true)
          } else {
            setIsLoggedIn(false)
          }
          setChecking(false)
      })
    }, [dispatch, setChecking, setIsLoggedIn])
    
    
    if (checking){
      return(
        <h1>Espere....</h1>
      )
    }
    return (
        <Router>
        <Switch>
          <PublicRouter 
          
          path="/login"
          component={Login}
          isAuthenticated={isLoggedIn}/>

      <PublicRouter 
          
          path="/register"
          component={Registro}
          isAuthenticated={isLoggedIn}/>

          <PrivateRouter 
          path="/"
          component={DashBoardRouters}
          isAuthenticated={isLoggedIn}/>

        </Switch>
    </Router>
    )
}
