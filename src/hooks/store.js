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
  data: {
    "Mar 25 2020": {
      id: "1",
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
    "Mar 24 2020": {
      id: "2",
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
  }
};
const store = createContext(initialState);
const { Provider } = store;

/*
  TODO: Record Feeding
  TODO: Record Diaper
  TODO: Record Sleep
  TODO: Create Timer
  TODO: Edit Timer
  TODO: Delete Timer
  TODO: Edit baby
  TODO: Delete baby
*/

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    let newState;
    switch(action.type) {
      case 'create-baby':
        newState = {
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
      case 'create-feeding':
        // Create date
        var d = new Date();
        let date = `${d.toLocaleString('default', { month: 'short' })} ${d.getDate()} ${d.getFullYear()}`
        
        // Add the date if it doesn't exist
        if (!state.data.hasOwnProperty(date)) {
          state.data[date] = {
            id: Math.random().toString(),
            eat: [],
            sleep: [],
            diaper: []
          }
        }

        newState = { ...state }
        console.log(action.payload)
        newState.data[date].eat.push(action.payload);
        console.log('newState.data[date]', newState.data[date])
        return newState
      case 'create-sleep-record':
        return state
      default:
        throw new Error("Invalid Action Type");
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }