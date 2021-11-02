import { typesJoven} from "../types/types";
import {
  addDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";



export const ListarJovenAsincronico=()=>{
  return async (dispatch)=>{
    const datos = await getDocs(collection(db, "JovenCollection"));
    const porta = [];
    datos.forEach((documento) => {
      porta.push({ ...documento.data() });
    });
    dispatch(ListarJovenSincronico(porta)); 
  }
}


export const ListarJovenSincronico= (pacienteJ)=>{
 return {
   type: typesJoven.listarJoven,
   payload: pacienteJ,

  }
}


export const pacJovenAsincronico = (
    historioNum,
    documento,
    nombreCom,
    edad,
   fumador,
   añosfumador,
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
         fumador,
         añosfumador,
         valor,
         prioridad,
         riesgo,
      };
      addDoc(collection(db, "JovenCollection"), register)
        .then((resp) => {
          dispatch(pacJovenSincronico(register));
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };
  
  export const pacJovenSincronico = (pacienteJ) => {
    return {
      type: typesJoven.registrarJoven,
      payload: pacienteJ,
    };
  };
  