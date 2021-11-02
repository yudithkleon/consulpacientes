import { typesAnciano} from "../types/types";
import {
  addDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";


export const ListarAncianoAsincronico=()=>{
  return async (dispatch)=>{
    const datos = await getDocs(collection(db, "AncianoCollection"));
    const porta = [];
    datos.forEach((documento) => {
      porta.push({ ...documento.data() });
    });
    dispatch(ListarAncianoSincronico(porta)); 
  }
}


export const ListarAncianoSincronico= (pacienteA)=>{
 return {
   type: typesAnciano.listarAnciano,
   payload: pacienteA,

  }
}

export const pacAncianoAsincronico = (
    historioNum,
    documento,
    nombreCom,
    edad,
    dieta,
    prioridad,
    riesgo
  ) => {
    return (dispatch) => {
      const register = {
        historioNum,
        documento,
        nombreCom,
        edad,
        dieta,
        prioridad,
        riesgo
      };
      addDoc(collection(db, "AncianoCollection"), register)
        .then((resp) => {
          dispatch(pacAncianoSincronico(register));
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };
  
  export const pacAncianoSincronico = (pacienteJ) => {
    return {
      type: typesAnciano.registrarAnciano,
      payload: pacienteJ,
    };
  };
  