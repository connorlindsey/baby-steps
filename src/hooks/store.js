import React, {createContext, useReducer} from 'react';

const initialState = {
  currentBaby: "1", // ID of current baby to display
  babies: [
    {
      id: "1",
      name: "Claire",
      age: "15 months",
      gender: "Girl",
      image: "https://source.unsplash.com/1600x900/?baby,toddler,girl"
    }
  ],
  timers: {
    eat: [
      {
        id: "1",
        hours: 2,
        minutes: 0,
      }
    ],
    sleep: [],
    diaper: [],
  },
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
      case 'view-baby':
        return {
          ...state,
          currentBaby: action.payload
        }
      default:
        throw new Error("Invalid Action Type");
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }