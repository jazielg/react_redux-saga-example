import React from "react";
import { useSelector, useDispatch } from "react-redux";

import * as actionsCreators from "../../store/actions";

export default function CourseList() {
  const courses = useSelector((state) => state.courses.data);
  const dispatch = useDispatch();

  function addCourse() {
    dispatch(actionsCreators.addCourse("GraphQL"));
    // dispatch({ type: "ADD_COURSE", title: "GraphQL" });
  }

  return (
    <>
      <h1>Course List (Redux with Hooks)</h1>
      <ul>
        {courses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>
      <button type="button" onClick={addCourse}>
        Adicionar curso
      </button>
    </>
  );
}
