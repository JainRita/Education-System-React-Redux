import React, { Component } from "react";
import "../css/AdminViewCourse.css";
import { connect } from "react-redux";
import * as actionCreated from "../actions/action";

class AdminViewCourse extends Component {
  componentDidMount() {
    this.props.onGetCourses();
  }
  componentWillMount() {
    if (!localStorage.getItem("loggedAdmin")) {
      this.props.history.replace("/admin-login");
    }
  }

  delete(courseId) {
    this.props.onDeleteCourse(courseId);
  }

  render() {
    let courseList = this.props.courseList.map((course, index) => {
      return (
        <tr key={index}>
          <th>{course.courseId}</th>
          <td>{course.courseName}</td>
          <td>{course.courseAmount} INR</td>
          <td>{course.hours} Hours</td>

          <td>
            <button
              className="view"
              onClick={this.delete.bind(this, course.courseId)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div className="adminViewbg">
        <div class="tablediv">
          <table class="table">
            <thead id="#thead" class="table-primary">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Course Name</th>
                <th scope="col">Course Amount</th>
                <th scope="col">Course Duration</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {courseList}
              {/* <tr>
                            <th scope="row">1</th>
                            <td>3</td>
                            <td>Jave Fundamentals</td>
                            <td><button className="view">Delete</button></td>
                        </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    courseList: state.courseList,

    returnedMessage: state.returnedMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetCourses: () => {
      return dispatch(actionCreated.getAllCourses());
    },

    onDeleteCourse: (courseId) => {
      return dispatch(actionCreated.deleteCourse(courseId));
    },

    clearState: () => {
      return dispatch(actionCreated.clearState());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminViewCourse);
