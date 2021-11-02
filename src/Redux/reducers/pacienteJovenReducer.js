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
        case typesJoven.listarJoven:
            return {
                pacienteJ: [...action.payload]
            }
       
           
        default:
           return state;
    }

}