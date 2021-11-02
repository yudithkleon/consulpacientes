import { typesNiño } from "../types/types";

const initialState ={
    pacienteN: [],

}

export const pacienteNinoReducer = (state =initialState, action) =>{
    switch (action.type) {
        case typesNiño.registrarNino: 
        return {
          
           pacienteN: [action.payload, state.pacienteN]
        }
         
       
           
        default:
           return state;
    }

}
