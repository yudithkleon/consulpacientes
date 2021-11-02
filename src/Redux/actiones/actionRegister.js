import { types } from "../types/types";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
   deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export const ListarAsincronico = () => {
  return async (dispatch) => {
    const datos = await getDocs(collection(db, "RegistrarCollection"));
    const porta = [];
    datos.forEach((documento) => {
      porta.push({ ...documento.data() });
    });
    dispatch(ListarSincrono(porta));
  };
};

export const ListarSincrono = (register) => {
  return {
    type: types.listar,
    payload: register,
  };
};




export const registerEmailPasswordNombre=(email, password, name)=>{
    return (dispatch)=>{
        const auth=getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then (async({user})=>{
                await updateProfile(auth.currentUser, {displayName: name})
                dispatch(registerSincronico(user.email, user.uid, user.displayName))
                console.log(user)
        })
        .catch(e=>{
            console.log(e);
        })
    }
}

export const registerAsincronico = (email, password, password2, name, ape) => {
        return (dispatch)=>
        {
            const register={
                email,
                password,
                password2,
                name, 
                ape, 
       
            }
            addDoc(collection(db, "RegistrarCollection"), register)
            .then((resp) => {
              dispatch(registerSincronico(register));
            })
            .catch((error) => {
              console.log(error);
            });
        }
      
}

   export const registerSincronico = (register) => {
    return {
        type: types.register,
        payload: register
         };
  };





