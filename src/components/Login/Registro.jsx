import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import {
  registerAsincronico,
} from "../../Redux/actiones/actionRegister";
import {useDispatch } from "react-redux";
import swal from "sweetalert"

export const Registro = () => {

  const dispatch = useDispatch();



const MostrarAlert1=()=>{
  return(
      swal({
          icon: "success",
          text: " Usuario Registrado",
           
        })
  )
}

  const [values, handleInputChange] = useForm({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    repeatpassword: "",

   
  });
  let { nombre, apellido, email, password, repeatpassword, tipoUsuario, foto } =
    values;

  const handleRegistro = (e) => {
    e.preventDefault();
    dispatch(
      registerAsincronico(
        email,
        password,
        repeatpassword,
        nombre,
        apellido,
 
      )
    );
  };



  return (
    <Container style={{ justifyContent: "center" }}>
      <div>
        <h1 style={{ textAlign: "center" }}>
          Formulario de Registro de Usuario
        </h1>
        <hr style={{ border: "2px solid blue lighten-4" }} />

        <Form onSubmit={handleRegistro}>
          <Form.Group className="mb-3" controlId="formBasicNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={nombre}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicApellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              name="apellido"
              value={apellido}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
            <Form.Label>Repita contraseña</Form.Label>
            <Form.Control
              type="password"
              name="repeatpassword"
              value={repeatpassword}
              onChange={handleInputChange}
            />
          </Form.Group>
          

          <Container >
              <Button
                style={{
                  
                  alignContent: "center",
                  width: "200px",
                  height: "80px",
                  margin: "10px",
                  background: "blue lighten-4",
                  color: "black",
                  border: "1px solid black",
                  borderRadius: "25px",
                }}
                type="submit"
                onClick={MostrarAlert1}
              >
                <h3>Guardar</h3>
              </Button>
              <Button
                style={{
                  alignContent: "center",
                  width: "200px",
                  height: "80px",
                  margin: "10px",
                  background: "blue lighten-4",
                  color: "black",
                  border: "1px solid black",
                  borderRadius: "25px",
                }}
              >
                <Link style={{ color: "black" }} to="/login">
                  <h3>Login</h3>
                </Link>
              </Button>
          </Container>
        </Form>
      </div>
    </Container>
  );
};
