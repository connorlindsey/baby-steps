import React, {createContext, useReducer} from 'react';

const initialState = {
  color: "red",
  title: "My title",
  babies: [
    {
      id: "1",
      name: "Claire",
      age: "15 months"
    }
  ]
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'create-baby':
        let baby = {
          ...action.payload,
          id: Math.random().toString()
        }
        const babies = [...state.babies, baby]
        const newState = {
          ...state,
          babies
        }
        return newState;
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }