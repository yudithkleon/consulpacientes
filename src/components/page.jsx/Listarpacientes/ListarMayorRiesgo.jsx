import React, {useEffect} from 'react'
import { Container, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { ListarAncianoAsincronico} from '../../../Redux/actiones/actionPacAnciano';
import { ListarJovenAsincronico } from '../../../Redux/actiones/actionPacJoven';
import { ListarNiñoAsincronico } from '../../../Redux/actiones/actionPacNino';


export const ListarMayorRiesgo = () => {
   
    const { pacienteN } = useSelector((store) => store.registrarNino);
    const { pacienteJ } = useSelector((store) => store.registrarJoven);
    const { pacienteA } = useSelector((store) => store.registrarAnciano);
   
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ListarNiñoAsincronico());
    dispatch(ListarJovenAsincronico());
    dispatch(ListarAncianoAsincronico());
  }, []);

    return (
        <div>
            <Container>
            <h1 style={{ textAlign: "center", margin: "10px" }}>
                  Listar Pacientes con mayor Riesgo
            </h1>
         <hr style={{ border: "4px solid blue" }} />
         <Table striped bordered hover>
         <thead>
            <tr>
              <th>Tipo de Paciente</th>
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
                  pacienteN.map((nino, index)=>
                    pacienteJ.map((joven,  index)=>
                        pacienteA.map((viejo, index)=>
                            viejo.riesgo > joven.riesgo && viejo.riesgo > nino.riesgo ?
                            (
                                <tr key= {index}>
                                <th>Anciano</th>
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
                                joven.riesgo > nino.riesgo && joven.riesgo > viejo.riesgo ?
                                (
                                    <tr key= {index}>
                                    <th>Joven</th>
                                   <td>{joven.nombreCom}</td>
                                   <td>{joven.historioNum}</td>
                                   <td>{joven.documento}</td>
                                   <td>{joven.edad}</td>
                                   <td>{joven.prioridad}</td>
                                   <td>{joven.riesgo}</td>
                                   </tr>
                                )
                                :
                                (
                                      nino.riesgo > joven.riesgo && nino.riesgo > viejo.riesgo ?
                                      (
                                        <tr key= {index}>
                                        <th>Niño</th>
                                        <td>{joven.nombreCom}</td>
                                        <td>{joven.historioNum}</td>
                                        <td>{joven.documento}</td>
                                        <td>{joven.edad}</td>
                                        <td>{joven.prioridad}</td>
                                        <td>{joven.riesgo}</td>
                                        </tr>
                                      )
                                     :

                                     (
                                         console.log("no entro")
                                     )
                                )
                            )
                        )
                      )
                )
            }
         </tbody>

         </Table>
         </Container>
        </div>
    )
}
