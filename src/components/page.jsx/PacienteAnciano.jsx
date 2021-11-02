import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { useForm } from "../../hooks/useForm";
import { pacAncianoAsincronico } from "../../Redux/actiones/actionPacAnciano";

export const PacienteAnciano = () => {
    
    const dispatch = useDispatch();

    let setPrioridad=0;
    let setRiesgo=0;

    const [values, handleInputChange] = useForm({
        historioNum: "",
        documento: "",
        nombreCom: "",
        edad: "",
        dieta: "",
        valor: "",
        prioridad: "",
        riesgo: "",
      });
      let { historioNum, documento, nombreCom, edad, dieta, valor, prioridad, riesgo } =
        values;
    
      const handleRegistro = (e) => {
        e.preventDefault();
        dispatch(
            pacAncianoAsincronico(
            historioNum,
            documento,
            nombreCom,
            edad,
            dieta,
            valor,
            prioridad,
            riesgo,
          )
         
        );
        e.target.reset();
          };
    
      const MostrarAlert1=()=>{
        return(
            swal({
                icon: "success",
                text: "Paciente Registrado",
                 
              })
        )
      }
    
      const CalcularPrioridad = (edad, dieta) => {

        dieta=="Si" && edad > 60
         ?
        (setPrioridad = (edad/20) + 4)
         :
         (setPrioridad = (edad/20) + 3)
                
        return swal({
          icon: "success",
          title: 'La prioridad de este Paciente es de: ' + ' '+ setPrioridad,
        });
      }

      const CalcularRiesgo = (edad, prioridad) => {

        setRiesgo=(((edad * prioridad) / 100) + 5,3)
      
        return swal({
          icon: "success",
          title: 'La prioridad de este Paciente es de: ' + ' '+ setRiesgo,
        });
      
      };

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
              <label htmlFor="peso">Tiene Dieta asignada?: </label>
              <input
                className="form-control"
                type="text"
                name="dieta"
                value={dieta}
                onChange={handleInputChange}
                id="dieta"
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
            onClick={()=>CalcularPrioridad(edad, dieta)}
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
            onClick={()=>CalcularRiesgo(edad, prioridad)}
            >
            Calcular Riesgo
          </button>
          </Col>
          <Col>
          <div className="form-group ">
            <label htmlFor="valor">Ingrese el Valor Calculado de Riesgo Aqui:</label>
            <input
              className="form-control"
              type="number"
              name="riesgo"
              value={riesgo}
              onChange={handleInputChange}
              id="riesgo"
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


    