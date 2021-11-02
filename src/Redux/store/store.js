import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/loginReducers";
import { pacienteAncianoReducer } from "../reducers/pacienteAncianoReducer";
import { pacienteJovenReducer } from "../reducers/pacienteJovenReducer";
import { pacienteNinoReducer } from "../reducers/pacienteNinoReducer";
import { registerReducer } from "../reducers/registerReducers";


const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers ( {
  login: loginReducer,
  register: registerReducer,
  registrarNino: pacienteNinoReducer,
  registrarJoven: pacienteJovenReducer,
  registrarAnciano: pacienteAncianoReducer,
})

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
)
