import * as actionTypes from "./actionTypes";

export const addCourse = (data) => {
  return {
    type: actionTypes.ADD_COURSE,
    title: data,
  };
};
