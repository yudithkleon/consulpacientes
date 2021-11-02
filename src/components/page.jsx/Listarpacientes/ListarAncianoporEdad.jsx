import React, {useEffect} from "react";
import { Table, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {ListarAncianoAsincronico} from "../../../Redux/actiones/actionPacAnciano"


export const ListarAncianoporEdad = () => {
    const { pacienteA} = useSelector((store) => store.registrarAnciano);

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(ListarAncianoAsincronico())
    }, [])
   
    return (
        <div>
            <Container>
      <h1 style={{ textAlign: "center", margin: "10px" }}>
          Listar Pacientes Mas Ancianos
        </h1>
        <hr style={{ border: "4px solid blue" }} />
        <Table striped bordered hover>
          <thead>
            <tr>
             
              <th>Nombre</th>
              <th># Historia</th>
              <th># Documento</th>
              <th>Edad</th>
              <th>Prioridad</th>
              <th>Riesgo</th>
            </tr>
          </thead>
          <tbody>
              {
                pacienteA ?(
                    pacienteA.map((viejo, index)=> (
                                            
                            viejo.edad > 60 ?   
                             (
                              <tr key= {index}>
                              
                              <td>{viejo.nombreCom}</td>
                              <td>{viejo.historioNum}</td>
                              <td>{viejo.documento}</td>
                              <td>{viejo.edad}</td>
                              <td>{viejo.prioridad}</td>
                              <td>{viejo.riesgo}</td>
                            </tr>
                            )
                            :
                            (
                                <tr key= {index}>
                                <td>{viejo.nombreCom}</td>
                                <td>{viejo.historioNum}</td>
                                <td>{viejo.documento}</td>
                                <td>{viejo.edad}</td>
                                <td>{viejo.prioridad}</td>
                                <td>{viejo.riesgo}</td>
                              </tr>
                             
                            )
                      
                    ))
                )   
                :
                    (
                        <h3 style={{textAlign: 'center', margin: '20px', color: 'blue'}}>No se cargan pacientes</h3>
                    )
                
                }               
          </tbody>
        </Table>
      </Container>
        </div>
    )
}
