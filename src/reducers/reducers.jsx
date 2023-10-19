import React, { useReducer, useState } from "react";

/* 

    ACTION = {
        type: string;
        payload?: any;
    }      


*/

const initialState = {
  contador: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENTAR":
      return {
        ...state,
        contador: state.contador + 1,
      };

    case "DECREMENTAR":
      return {
        ...state,
        contador: state.contador - 1,
      };

    default:
      return state;
  }
};

const Reducers = () => {
  //const [state, setState] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {state.contador}
      <button
        onClick={() => {
          dispatch({ type: "INCREMENTAR" });
        }}
      >
        +
      </button>
      <button>-</button>
    </div>
  );
};

export default Reducers;
