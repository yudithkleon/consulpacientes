import React, { useState } from "react";
import { Container, Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { useForm } from "../../hooks/useForm";
import { pacNinoAsincronico } from "../../Redux/actiones/actionPacNino";
import { PacienteAnciano } from "./PacienteAnciano";
import { PacienteJoven } from "./PacienteJoven";
import { PacienteNiño } from "./PacienteNiño";



export const PacienteRegistro = () => {
  const dispatch = useDispatch();
  const [niño, setNiño] = useState(false);
  const [joven, setJoven] = useState(false);
  const [anciano, setAnciano] = useState(false);
  

  return (
    <div>
      <Container>
        <h1 style={{ textAlign: "center", margin: "10px" }}>
          Registro de Pacientes
        </h1>
        <hr style={{ border: "4px solid blue" }} />
        <Container>
          <form>
            <h1 sytule={{ margin: "10px" }}>Tipo de Paciente</h1>
            <hr style={{ border: "1x solid blue" }} />
            <Container style={{ textAlign: "center" }}>
              <Button
                style={{
                  alignContent: "center",
                  width: "350px",
                  height: "80px",
                  margin: "10px",
                  background: "blue lighten-4",
                  color: "white",
                  border: "1px solid black",
                  borderRadius: "25px",
                }}
                onClick={() => setNiño(true)}
              >
                Niño (edad 0 a 15 años)
              </Button>
              <Button
                style={{
                  alignContent: "center",
                  width: "350px",
                  height: "80px",
                  margin: "10px",
                  background: "blue lighten-4",
                  color: "white",
                  border: "1px solid black",
                  borderRadius: "25px",
                }}
                onClick={() => setJoven(true)}
              >
                Joven (edad 16 a 40 años)
              </Button>
              <Button
                style={{
                  alignContent: "center",
                  width: "350px",
                  height: "80px",
                  margin: "10px",
                  background: "blue lighten-4",
                  color: "white",
                  border: "1px solid black",
                  borderRadius: "25px",
                }}
                onClick={() => setAnciano(true)}
              >
                Anciano (edad mayor de 40 años)
              </Button>
            </Container>
          </form>
        </Container>
      </Container>

 {/* Modal de Niño */}
      <Modal
        style={{
          width: "88rem",
          boxShadow: "3px 25px 80px blue",
          margin: "40px",
        }}
        size="lg"
        show={niño}
        onHide={() => setNiño(false)}
      >
        <Modal.Header closeButton>
          <h1 style={{textAlign:'center', color: 'blue'}}>Registro de Paciente Niños</h1>
        </Modal.Header>

        <Modal.Body>
          <PacienteNiño/>
        </Modal.Body>
      </Modal>

 {/* Modal de Joven  */}
  <Modal
        style={{
          width: "88rem",
          boxShadow: "3px 25px 80px blue",
          margin: "40px",
        }}
        size="lg"
        show={joven}
        onHide={() => setJoven(false)}
      >
        <Modal.Header closeButton>
          <h1 style={{textAlign:'center', color: 'blue'}}>Registro de Paciente Joven</h1>
        </Modal.Header>

        <Modal.Body>
          <PacienteJoven/>
        </Modal.Body>
        </Modal>

      {/* Modal de Anciano */}
  <Modal
        style={{
          width: "88rem",
          boxShadow: "3px 25px 80px blue",
          margin: "40px",
        }}
        size="lg"
        show={anciano}
        onHide={() => setAnciano(false)}
      >
        <Modal.Header closeButton>
          <h1 style={{textAlign:'center', color: 'blue'}}>Registro de Paciente Joven</h1>
        </Modal.Header>

        <Modal.Body>
          <PacienteAnciano/>
        </Modal.Body>
       
      </Modal>
    </div>
  );
};
