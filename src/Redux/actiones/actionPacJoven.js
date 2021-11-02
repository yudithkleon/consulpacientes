import { typesJoven} from "../types/types";
import {
  addDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";


export const pacJovenAsincronico = (
    historioNum,
    documento,
    nombreCom,
    edad,
   fumador,
   añosfumador,
   valor
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
  