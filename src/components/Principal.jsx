import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'




export const Principal = () => {
    return (
        <div>
            <Container>
            <h1 style={{ textAlign: "center", margin: "10px" }}>
              Bienvenido
             </h1>
             <h4 style={{ textAlign: "center", margin: "10px" }}> Trabajamos por su Bienestar</h4>
             <hr style={{ border: "4px solid blue" }} />
                <Row>
                    <Col>
                    <Card style={{ boxShadow: "3px 25px 60px blue", margin: "20px"}}>
                       
                        <Link to="/registerPaciente" style={{color: 'black', textAlign: 'center'}}>
                        <img style={{ width: "90px", margin: '10px'}} src="https://res.cloudinary.com/danimel/image/upload/v1635874064/perfil_2_sm2cx4.png"/>
                         Registrar Paciente
                        </Link>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{ boxShadow: "3px 25px 60px blue", margin: "20px"}}>
                        <img src=""/>
                        <Link to="/listarTodas" style={{ color: 'black', textAlign: 'center'}} >
                        <img style={{ width: "90px", margin: '10px'}} src="https://res.cloudinary.com/danimel/image/upload/v1635874064/opcion-de-lista_cuuhtb.png"/>
                         Listar Pacientes
                        </Link>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Card style={{ boxShadow: "3px 25px 60px blue", margin: "20px"}}>
                        <Link to="/login" style={{ color: 'black', textAlign: 'center'}} >
                        <img style={{ width: "90px", margin: '10px'}} src="https://res.cloudinary.com/danimel/image/upload/v1635874064/perfil_1_hvhklp.png"/>
                     Autenticarse
                        </Link>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{ boxShadow: "3px 25px 60px blue", margin: "20px"}}>
                        <Link to="/consultaA" style={{ color: 'black', textAlign: 'center'}} >
                        <img style={{ width: "90px", margin: '10px'}} src="https://res.cloudinary.com/danimel/image/upload/v1635874064/sala-de-espera_3_xw9d5w.png"/>
                      Sala de Espera
                        </Link>
                    </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}
