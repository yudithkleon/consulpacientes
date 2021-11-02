import { typesNiño } from "../types/types";
import {
  addDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";


export const ListarNiñoAsincronico=()=>{
  return async (dispatch)=>{
    const datos = await getDocs(collection(db, "NiñoCollection"));
    const porta = [];
    datos.forEach((documento) => {
      porta.push({ ...documento.data() });
    });
    dispatch(ListarNiñoSincronico(porta)); 
  }
}


export const ListarNiñoSincronico= (pacienteN)=>{
 return {
   type: typesNiño.listarNiño,
   payload: pacienteN,

  }
}

export const pacNinoAsincronico = (
  historioNum,
  documento,
  nombreCom,
  edad,
  peso,
  estatura,
  valor,
  prioridad,
  riesgo

) => {
  return (dispatch) => {
    const register = {
        historioNum,
        documento,
        nombreCom,
        edad,
        peso,
        estatura,
        valor,
        prioridad,
        riesgo
    };
    addDoc(collection(db, "NiñoCollection"), register)
      .then((resp) => {
        dispatch(pacNinoSincronico(register));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const pacNinoSincronico = (pacienteN) => {
  return {
    type: typesNiño.registrarNino,
    payload: pacienteN,
  };
};
