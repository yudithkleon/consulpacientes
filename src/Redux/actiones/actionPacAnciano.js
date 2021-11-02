import { typesAnciano} from "../types/types";
import {
  addDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";


export const pacAncianoAsincronico = (
    historioNum,
    documento,
    nombreCom,
    edad,
    dieta,
  ) => {
    return (dispatch) => {
      const register = {
        historioNum,
        documento,
        nombreCom,
        edad,
        dieta,
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
  