import { typesAnciano } from "../types/types";

const initialState ={
    pacienteA: [],

}

export const pacienteAncianoReducer = (state =initialState, action) =>{
    switch (action.type) {
        case typesAnciano.registrarAnciano: 
        return {
          
           pacienteA: [action.payload, state.pacienteA]
        }
         
       
           
        default:
           return state;
    }

}