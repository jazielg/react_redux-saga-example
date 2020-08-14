import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  data: ["React Native"],
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.ADD_COURSE:
      return {
        ...state,
        data: [...state.data, action.title],
      };
    default:
      return state;
  }
}

export default reducer;
