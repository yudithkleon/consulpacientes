import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { PacienteRegistro } from './page.jsx/PacienteRegistro'



export const Principal = () => {
    return (
        <div>
            <Container>
            <h1>Estoy dentro de principal</h1>
            <Row>
                <Col>
                <button onClick={<PacienteRegistro/>}>Registrar pacienta</button>
                </Col>
            </Row>
            </Container>
            
        </div>
    )
}
