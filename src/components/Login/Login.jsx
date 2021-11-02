import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import {useDispatch} from 'react-redux'
import {loginGoogle,  loginEmailPassword, loginFacebook} from '../../Redux/actiones/actionLogin'
import {useForm} from '../../hooks/useForm'
import {Link} from 'react-router-dom'


function Login() {

    const dispatch = useDispatch()

    const [ values, handleInputChange ] = useForm({
        email: '',
        password: ''
    })

    const {email, password}= values;

    const handleLogin=(e)=>{
        e.preventDefault();
        dispatch(loginEmailPassword(email, password))
        
    }

    const handleGoogle=()=>{
        dispatch(loginGoogle())
    }


    return (
        <Container style={{width:'750', margin: '30px'}} >
            <h1 style={{marginTop: '40px', textAlign: 'center'}} >Iniciar Sesión</h1>
            <hr style={{ border: "2px solid blue lighten-4" }} />

            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{margin: '5px', justifyContent: 'center'}}>Correo</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}/>
            
                </Form.Group>
                <br/>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{margin: '5px', justifyContent: 'center'}}>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}/>
                </Form.Group>

                <Container style={{textAlign:'center'}}>
                <Link to="/">
                <Button
                    style={{
                      alignContent: "center",
                      width: "350px",
                      height: "80px",
                      margin: "10px",
                      background: "blue lighten-4",
                      color: "black",
                      border: "1px solid black",
                      borderRadius: "25px",
                    }}  type="submit"
                  >
                    <h4> Enviar</h4>
                  </Button>
                  </Link>
                  <div >
                      <Button
                        style={{
                          alignContent: "center",
                          width: "350px",
                          height: "80px",
                          margin: "10px",
                          background: "blue lighten-4",
                          color: "black",
                          border: "1px solid black",
                          borderRadius: "25px",
                        }}     className="google-btn"
                        onClick={handleGoogle}
                      >
                       <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                      </Button>
                  </div>
                    
               
                  <div>
             
                      <Link to="/register">
                        <Button
                          style={{
                            alignContent: "center",
                            width: "350px",
                            height: "80px",
                            margin: "10px",
                            background: "blue lighten-4",
                            color: "black",
                            border: "1px solid black",
                            borderRadius: "25px",
                          }}
                        >
                       <h3> Registrarse </h3>
                        </Button>

                      </Link>
                      
                  </div>
          
                   
                </Container>
            </Form>
        </Container>

    );
}

export default Login;
