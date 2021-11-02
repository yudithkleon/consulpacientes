import React from 'react'
import {Container, Card, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const ListarTodas = () => {
    return (
        <div>
            <Container>
            <h1 style={{ textAlign: "center", margin: "10px" }}>
           Listados de Pacientes
        </h1>
        <hr style={{ border: "4px solid blue" }} />
                <Row>
                    <Col>
                    <Card style={{ boxShadow: "3px 25px 60px blue", margin: "20px"}}>
                        <Link to="/listarNino" style={{height: '50px', color: 'black', textAlign: 'center'}}>
                         Listar Niños y ver Consulta Asignada
                        </Link>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{ boxShadow: "3px 25px 60px blue", margin: "20px"}}>
                        <Link to="/listaJovenes" style={{height: '50px', color: 'black', textAlign: 'center'}} >
                         Listar Jovenes y ver Consulta Asignada
                        </Link>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Card style={{ boxShadow: "3px 25px 60px blue", margin: "20px"}}>
                        <Link to="/listarAnciano" style={{height: '50px', color: 'black', textAlign: 'center'}} >
                      Listar Ancianos y ver Consulta Asignada
                        </Link>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{ boxShadow: "3px 25px 60px blue", margin: "20px"}}>
                        <Link to="/listarfumador" style={{height: '50px', color: 'black', textAlign: 'center'}} >
                       Listar Jovenes Fumadores y consulta urgente
                        </Link>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Card style={{ boxShadow: "3px 25px 60px blue", margin: "20px"}}>
                        <Link to="/listarAncianoEdad" style={{height: '50px', color: 'black', textAlign: 'center'}} >
                       Listar Ancianos por Edad
                        </Link>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{ boxShadow: "3px 25px 60px blue", margin: "20px"}}>
                        <Link to="/listarmayorRiesgo"  style={{height: '50px', color: 'black', textAlign: 'center'}}>
                        Listar Mayor Riesgo entre Niño, Jovenes y Anciano
                        </Link>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
