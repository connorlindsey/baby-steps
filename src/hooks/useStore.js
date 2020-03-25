import { useContext } from "react";
import { store } from './store.js';


const useStore = () => {
  const globalStore = useContext(store);
  return globalStore
}

export default useStore