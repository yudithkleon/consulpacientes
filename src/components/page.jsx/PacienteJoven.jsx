import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { useForm } from "../../hooks/useForm";
import { pacJovenAsincronico } from '../../Redux/actiones/actionPacJoven';


export const PacienteJoven = () => {

    const dispatch = useDispatch();
     let setPrioridad = 0;
    const [values, handleInputChange] = useForm({
        historioNum: "",
        documento: "",
        nombreCom: "",
        edad: "",
        fumador: "",
        añosfumador: "",
        valor: "",
        prioridad: "",
      });
      let { historioNum, documento, nombreCom, edad, fumador, añosfumador, valor, prioridad } =
        values;
    
      const handleRegistro = (e) => {
        e.preventDefault();
        dispatch(
          pacJovenAsincronico(
            historioNum,
            documento,
            nombreCom,
            edad,
            fumador,
            añosfumador,
            valor,
            prioridad,
          )
         
        );
        e.target.reset();
          };

          const CalcularPrioridad = (fumador, añosfumador) => {

            fumador=="Si" && añosfumador> 0
             ?
            (setPrioridad = (añosfumador/4) + 2)
             :
             (setPrioridad = 2 )
                    
            return swal({
              icon: "success",
              title: 'La prioridad de este Paciente es de: ' + ' '+ setPrioridad,
            });
        
           
          }
      const MostrarAlert1=()=>{
        return(
            swal({
                icon: "success",
                text: "Paciente Registrado",
                 
              })
        )
      }
    return (
      <Container>
           <form onSubmit={handleRegistro}>
            <div className="form-group ">
              <label htmlFor="historioNum">Numero de Historia: </label>
              <input
                className="form-control"
                type="text"
                name="historioNum"
                value={historioNum}
                onChange={handleInputChange}
                id="historioNum"
              />
            </div>

            <div className="form-group ">
              <label htmlFor="documento">Numero de Documento: </label>
              <input
                className="form-control"
                type="text"
                name="documento"
                value={documento}
                onChange={handleInputChange}
                id="documento"
              />
            </div>
          
            <div className="form-group ">
              <label htmlFor="nombreCom">Nombre de Completo: </label>
              <input
                className="form-control"
                type="text"
                name="nombreCom"
                value={nombreCom}
                onChange={handleInputChange}
                id="nombreCom"
              />
            </div>
          
            <div className="form-group ">
              <label htmlFor="edad">Edad: </label>
              <input
                className="form-control"
                type="number"
                name="edad"
                value={edad}
                onChange={handleInputChange}
                id="edad"
              />
            </div>
            <div className="form-group ">
              <label htmlFor="fumador">Fumador? (Si | No): </label>
              <input
                className="form-control"
                type="text"
                name="fumador"
                value={fumador}
                onChange={handleInputChange}
                id="fumador"
              />
            </div>

            <div className="form-group ">
              <label htmlFor="añosfumador">Numero de Años que lleva Fumando : </label>
              <input
                className="form-control"
                type="number"
                name="añosfumador"
                value={añosfumador}
                onChange={handleInputChange}
                id="añosfumador"
              />
            </div>

            <div className="form-group ">
              <label htmlFor="valor">Valor de 0 a 10: </label>
              <input
                className="form-control"
                type="number"
                name="valor"
                value={valor}
                onChange={handleInputChange}
                id="valor"
              />
            </div>
            <Row>
          <Col>
          <button
            style={{
              width: "250px",
              height: "50px",
              margin: "20px",
              background: "blue lighten-4",
              justifyContent: "center",
              color: "black",
              borderRadius: "25px",
            }}
            onClick={()=>CalcularPrioridad(fumador, añosfumador)}
            >
            Calcular Prioridad
          </button>
          </Col>
          <Col>
          <div className="form-group ">
            <label htmlFor="valor">Ingrese el Valor Calculado de Prioridad Aqui: </label>
            <input
              className="form-control"
              type="number"
              name="prioridad"
              value={prioridad}
              onChange={handleInputChange}
              id="prioridad"
            />
          </div>
          </Col>
          
          
        </Row>
            <button
                  style={{
                    width: "350px",
                    height: "80px",
                    margin: "20px",
                    background: "blue lighten-4",
                   justifyContent:'center',
                    color: "black",
                    borderRadius: "25px",
                
                  }}
                  onClick={MostrarAlert1}
                  type="submit"
                >
                  <h4> Guardar</h4>
                </button>
          </form>
      </Container>
    )
}
