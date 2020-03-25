import React, {createContext, useReducer} from 'react';

const initialState = {
  babies: [
    {
      id: "1",
      name: "Claire",
      age: "15 months"
    }
  ],
  timers: [
    {
      id: "1",
      type: "Feeding",
      frequency: "Every 2 hours"
    }
  ],
  data: [
    {
      date: "Mar 13 2020",
      eat: [
        { id: "1", amt: 5},
        { id: "2", amt: 4},
        { id: "3", amt: 6},
      ],
      sleep: [
        { id: "1", amt: 2},
      ],
      diaper: [

      ]
    },
    {
      date: "Mar 12 2020",
      eat: [
        { id: "1", amt: 5},
        { id: "2", amt: 4},
      ],
      sleep: [
        { id: "1", amt: 1},
      ],
      diaper: [
        { id: "1", type: "wet" },
        { id: "2", type: "dirty" },
        { id: "3", type: "wet" },
      ]
    },
  ]
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'create-baby':
        const newState = {
          ...state,
          babies: [...state.babies, {
            ...action.payload,
            id: Math.random().toString()
          }]
        }
        return newState;
      case 'update-baby':
        return state;
      default:
        throw new Error("Invalid Action Type");
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }