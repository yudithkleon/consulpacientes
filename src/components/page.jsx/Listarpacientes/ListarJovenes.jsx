import React, { useEffect } from "react";
import { Table, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { ListarJovenAsincronico } from "../../../Redux/actiones/actionPacJoven";

export const ListarJovenes = () => {
  const { pacienteJ } = useSelector((store) => store.registrarJoven);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ListarJovenAsincronico());
  }, []);

  return (
    <div>
      <Container>
        <h1 style={{ textAlign: "center", margin: "10px" }}>
          Listar Pacientes Jovenes
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
            {pacienteJ ? (
              pacienteJ.map((joven, index) =>
                joven.prioridad < 5 ? (
                  <tr key={index}>
                    <th>Medicina Integral</th>
                    <td>{joven.nombreCom}</td>
                    <td>{joven.historioNum}</td>
                    <td>{joven.documento}</td>
                    <td>{joven.edad}</td>
                    <td>{joven.prioridad}</td>
                    <td>{joven.riesgo}</td>
                  </tr>
                ) : (
                  <tr key={index}>
                    <th>Urgencia</th>
                    <td>{joven.nombreCom}</td>
                    <td>{joven.historioNum}</td>
                    <td>{joven.documento}</td>
                    <td>{joven.edad}</td>
                    <td>{joven.prioridad}</td>
                    <td>{joven.riesgo}</td>
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
