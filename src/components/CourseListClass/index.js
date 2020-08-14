import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionsCreators from "../../store/actions";

class CourseListClass extends Component {
  render() {
    return (
      <>
        <h1>Course List Class (Redux with Class)</h1>
        <ul>
          {this.props.courses.map((course) => (
            <li key={course}>{course}</li>
          ))}
        </ul>
        <button type="button" onClick={() => this.props.addCourse("NodeJS")}>
          Adicionar curso
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    courses: state.courses.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // addCourse: (title) => dispatch({ type: "ADD_COURSE", title }),
    addCourse: (title) => dispatch(actionsCreators.addCourse(title)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseListClass);
