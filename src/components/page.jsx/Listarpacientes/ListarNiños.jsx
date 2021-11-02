import React, { useEffect } from "react";
import { Table, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { ListarNiñoAsincronico } from "../../../Redux/actiones/actionPacNino";

export const ListarNiños = () => {
  let n = 0;

  const { pacienteN } = useSelector((store) => store.registrarNino);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ListarNiñoAsincronico());
  }, []);

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
              <th>Tipo de Consulta</th>
              <th>Nombre</th>
              <th># Historia</th>
              <th># Documento</th>
              <th>Edad</th>
              <th>Prioridad</th>
              <th>Riesgo</th>
            </tr>
          </thead>

          <tbody>
            {pacienteN ? (
              pacienteN.map((nino, index) =>
                nino.prioridad < 5 ? (
                  <tr key={index}>
                    <th>Pediatria</th>
                    <th>{nino.nombreCom}</th>
                    <th>{nino.historioNum}</th>
                    <th>{nino.documento}</th>
                    <th>{nino.edad}</th>
                    <th>{nino.prioridad}</th>
                    <th>{nino.riesgo}</th>
                  </tr>
                ) : (
                  <tr key={index}>
                     <th>Urgencia</th>
                    <th>{nino.nombreCom}</th>
                    <th>{nino.historioNum}</th>
                    <th>{nino.documento}</th>
                    <th>{nino.edad}</th>
                    <th>{nino.prioridad}</th>
                    <th>{nino.riesgo}</th>
                  </tr>
                )
              )
            ) : (
              <h3
                style={{ textAlign: "center", margin: "20px", color: "blue" }}
              >
                No se cargan pacientes
              </h3>
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
