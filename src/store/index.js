// Este reducer não está sendo utilizado, exemplo tirado do youtube (Rocketseat - Redux com Hooks)
import { createStore } from "redux";

const INITIAL_STATE = {
  data: ["ReactJS", "AdonisJS"],
};

function courses(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_COURSE":
      return {
        ...state,
        data: [...state.data, action.title],
      };
    default:
      return state;
  }
}

const store = createStore(courses);

export default store;
