import React, { useState } from "react";
import { Container, Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { useForm } from "../../hooks/useForm";
import { pacAncianoAsincronico } from "../../Redux/actiones/actionPacAnciano";

export const PacienteAnciano = () => {
    
    const dispatch = useDispatch();
    
    const [values, handleInputChange] = useForm({
        historioNum: "",
        documento: "",
        nombreCom: "",
        edad: "",
        dieta: "",
        valor: "",
      });
      let { historioNum, documento, nombreCom, edad, dieta, valor } =
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
            valor
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


    