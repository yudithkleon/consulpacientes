import React, { useEffect} from "react";
import { Container,  Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { useForm } from "../../hooks/useForm";
import { pacNinoAsincronico } from "../../Redux/actiones/actionPacNino";

export const PacienteNiño = () => {

  const dispatch = useDispatch();

  let setPrioridad = 0;

  const [values, handleInputChange] = useForm({
    historioNum: "",
    documento: "",
    nombreCom: "",
    edad: "",
    peso: "",
    estatura: "",
    valor: "",
    prioridad: "",
  });
  let {
    historioNum,
    documento,
    nombreCom,
    edad,
    peso,
    estatura,
    valor,
    prioridad,
  } = values;

  const handleRegistro = (e) => {
    e.preventDefault();
    dispatch(
      pacNinoAsincronico(
        historioNum,
        documento,
        nombreCom,
        edad,
        peso,
        estatura,
        valor,
        prioridad
      )
    );
    e.target.reset();
  };

  const MostrarAlert1 = () => {
    return swal({
      icon: "success",
      text: "Paciente Registrado",
    });
  };

 

  const CalcularPrioridad = (edad, peso, estatura) => {

    edad <= 5
     ?
    (setPrioridad = peso - estatura + 3)
     :
    edad > 5 && edad <= 12 ?
            ( setPrioridad = peso - estatura + 2)
        :
            ( setPrioridad = peso - estatura + 1)
            
    return swal({
      icon: "success",
      title: 'La prioridad de este Paciente es de: ' + ' '+ setPrioridad,
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
          <label htmlFor="peso">Peso en Kg: </label>
          <input
            className="form-control"
            type="number"
            name="peso"
            value={peso}
            onChange={handleInputChange}
            id="peso"
          />
        </div>

        <div className="form-group ">
          <label htmlFor="estatura">Estatura en Mts usando 1,20cm : </label>
          <input
            className="form-control"
            type="number"
            name="estatura"
            value={estatura}
            onChange={handleInputChange}
            id="estatura"
          />
        </div>

        <div className="form-group ">
          <label htmlFor="valor">Valor de 1-4: </label>
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
            onClick={()=>CalcularPrioridad(edad, peso, estatura)}
            >
            Calcular Prioridad
          </button>
          </Col>
          <Col>
          <div className="form-group ">
            <label htmlFor="valor">Ingrese el Valor Calculado de Prioridad Aqui:</label>
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
            height: "60px",
            margin: "20px",
            background: "blue lighten-4",
            justifyContent: "center",
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
  );
};
