import { createStore } from "redux";
import reducer from "../reducers";

//initial state of the application
const initialState = {
  name: "Alex Bakery",
  description: "Software Engineer, Speaker, and Occasional Model",
  likes: "Cats, Wine, and Green dresses",
  location: "localhost",
};

const store = createStore(reducer, initialState);
// console.log(store.getState());

export default store;
