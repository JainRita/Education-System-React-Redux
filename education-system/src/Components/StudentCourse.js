import React, { Component } from "react";
import { Link, Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreated from "../actions/action";

import logo from "../images/logoonly.png";
import education from "../images/education.png";
import "../css/StudentCourse.css";

class StudentCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "Enroll",
    };
  }
  componentWillMount() {
    if (!localStorage.getItem("loggedUser")) {
      this.props.history.replace("/student-login");
    }
  }
  componentDidMount() {
    this.props.onGetCourses();
    this.props.clearState();
  }
  render() {
    return (
      <div className="coursebg">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link id="logo" className="nav-link" to="">
                    <img id="logoimg" src={logo} /> EDUCRATE
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/courses">
                    All Courses
                  </Link>
                </li>
                <li className="nav-item"></li>
              </ul>
            </div>
          </div>
        </nav>

        <div>
          <div
            class="row row-cols-1 row-cols-md-3 g-4"
            style={{ padding: "20px" }}
          >
            {/* {courseList} */}
            {this.props.courseList ? (
              this.props.courseList.map((course, index) => (
                <div className="course-card">
                  <div class="col">
                    <div class="card">
                      <NavLink to={`/student-view-trainer/${course.courseId}`}>
                        <img
                          src={education}
                          class="card-img-top"
                          alt="Card image"
                        />
                      </NavLink>
                      <div class="card-body">
                        <h5 class="card-title">{course.courseName}</h5>
                        <p
                          class="card-text"
                          style={{ color: "red", textAlign: "center" }}
                        >
                          <h6>{course.courseAmount} INR</h6>
                        </p>
                        <p class="card-text">
                          <small class="text-muted">
                            Course Duration: {course.hours} hours
                          </small>
                        </p>
                        <button
                          type="button"
                          class="btn btn-success"
                          style={{ marginLeft: "100px" }}
                        >
                          <NavLink
                            to={`add-payment/${course.courseName}/${course.courseId}`}
                            style={{ textDecoration: "none" }}
                          >
                            <h5 style={{ color: "white" }}>
                              {this.state.buttonText}
                            </h5>
                          </NavLink>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1>Loading..</h1>
            )}
          </div>
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

    clearState: () => {
      return dispatch(actionCreated.clearState());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StudentCourse);
