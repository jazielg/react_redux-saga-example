import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  data: [],
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.IMPORT_USER:
      return {
        ...state,
      };
    case actionTypes.SET_USER:
      return {
        ...state,
        data: [...state.data, ...action.users],
      };
    default:
      return state;
  }
}

export default reducer;
