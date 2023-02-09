import { TYPES } from "../actions/ContadorAction";

export const contadorInitialState = { contador: 0 };
export const contadorInit = (contadorInitialState) => {
  return {
    contador: contadorInitialState.contador + 100,
  };
};

function contadorReducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { contador: state.contador + 1 };
    case TYPES.INCREMENT_5:
      return { contador: state.contador + action.payload };
    case TYPES.DECREMENT:
      return { contador: state.contador - 1 };
    case TYPES.DECREMENT_5:
      return { contador: state.contador - action.payload };
    case TYPES.RESET:
      return contadorInitialState;
    default:
      break;
  }
  return state;
}

export { contadorReducer };
