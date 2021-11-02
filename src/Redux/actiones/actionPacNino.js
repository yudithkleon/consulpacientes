import { typesNiño } from "../types/types";
import {
  addDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";



export const pacNinoAsincronico = (
  historioNum,
  documento,
  nombreCom,
  edad,
  peso,
  estatura,
  valor,
  prioridad

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
