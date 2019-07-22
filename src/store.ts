import { createStore } from 'redux';

const exampleInitialState = {
  count: 0,
};

export const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
};

interface ActionTypes {
  type: 'INCREMNT' | 'DECREMENT' | 'RESET';
}

// REDUCERS
export const reducer = (state = exampleInitialState, action: ActionTypes) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1,
      });
    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1,
      });
    case actionTypes.RESET:
      return Object.assign({}, state, {
        count: exampleInitialState.count,
      });
    default:
      return state;
  }
};

// ACTIONS
export const incrementCount = () => {
  return { type: actionTypes.INCREMENT };
};

export const decrementCount = () => {
  return { type: actionTypes.DECREMENT };
};

export const resetCount = () => {
  return { type: actionTypes.RESET };
};

export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
  );
}
