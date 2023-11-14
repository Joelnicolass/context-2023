import React from "react";

const useAsyncReducer = (reducer, initialState) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const asyncDispatch = React.useCallback(
    (action) => {
      if (typeof action === "function") {
        action(dispatch);
      } else {
        dispatch(action);
      }
    },
    [dispatch]
  );
  return [state, asyncDispatch];
};

export default useAsyncReducer;
