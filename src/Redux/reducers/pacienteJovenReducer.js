import { typesJoven } from "../types/types";

const initialState ={
    pacienteJ: [],

}

export const pacienteJovenReducer = (state =initialState, action) =>{
    switch (action.type) {
        case typesJoven.registrarJoven: 
        return {
          
           pacienteJ: [action.payload, state.pacienteJ]
        }
         
       
           
        default:
           return state;
    }

}