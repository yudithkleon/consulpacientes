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
         case typesAnciano.listarAnciano:
             return{
                 pacienteA: [...action.payload]
             }
       
           
        default:
           return state;
    }

}