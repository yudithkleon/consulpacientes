import React from "react";
import { Table, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

export const ListarNiños = () => {

let n=0;

  const { pacienteNino } = useSelector((store) => store.pacienteNino);
 console.log("listar")
  console.log(pacienteNino)
  return (
    <div>
      <Container>
      <h1 style={{ textAlign: "center", margin: "10px" }}>
          Listar Pacientes Niños
        </h1>
        <hr style={{ border: "4px solid blue" }} />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
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
                pacienteNino ?(
                    pacienteNino.map((nino, index)=> (
                        <tr key= {index}>
                        <td>{nino.nombreCom}</td>
                        <td>{nino.historioNum}</td>
                        <td>{nino.edad}</td>
                        <td>{nino.prioridad}</td>
                        <td>{nino.riesgo}</td>
                      </tr>
                     
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
  );
};
