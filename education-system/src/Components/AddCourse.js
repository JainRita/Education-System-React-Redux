import React, { Component } from "react";
import * as actionCreators from "../actions/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../images/logoonly.png";

import "../css/AddCourse.css";

class AddCourse extends Component {
  constructor(props) {
    super(props);

    this.courseName = React.createRef();
    this.courseAmount = React.createRef();
    this.hours = React.createRef();
  }
  componentWillMount() {
    if (!localStorage.getItem("loggedAdmin")) {
      this.props.history.replace("/admin-login");
    }
  }

  add(e) {
    e.preventDefault();
    let course = {
      courseName: this.courseName.current.value,
      courseAmount: this.courseAmount.current.value,
      hours: this.hours.current.value,
    };

    this.props.onAddCourse(course);

    console.log(this.props.courseObj.courseId + "Course Id in add method");

    this.courseName = "";
    this.courseAmount = "";
    this.hours = "";
  }

  setCustomValidityForName() {
    alert(
      "Course Name field cannot be empty and should only contain alphanumeric values"
    );
  }

  render() {
    return (
      <div className="course-form">
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link id="logo" className="nav-link" to="">
                      <div style={{ marginBottom: "5px" }}>
                        <img id="logoimg" src={logo} alt="Logo" /> EDUCRATE
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/add-course">
                      Add Course
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin-view-course">
                      View All Courses
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/update-course-trainers">
                      Update Course
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <form id="course-form" onSubmit={this.add.bind(this)}>
          <div className="form-group cname">
            <input
              className="form-control"
              type="text"
              ref={this.courseName}
              id="cname"
              name="courseName"
              placeholder="Course Name"
              pattern="^[a-zA-Z0-9_+-]*$"
              required
              onInvalid={this.setCustomValidityForName.bind(this)}
            />
          </div>
          <div className="form-group camount">
            <input
              className="form-control"
              type="number"
              ref={this.courseAmount}
              id="camount"
              name="courseAmount"
              placeholder="Course Amount"
              min="1"
              required
            />
          </div>
          <div className="form-group cduration">
            <input
              className="form-control"
              type="number"
              ref={this.hours}
              id="cduration"
              name="hours"
              placeholder="Course Duration"
              min="1"
              max="20"
              required
            />
          </div>
          <div style={{ marginRight: "200px" }}>
            <button
              id="course-button"
              class="btn btn-primary rounded-pill"
              type="submit"
            >
              <b>Add Course</b>
            </button>
          </div>
        </form>

        <div
          className={
            this.props.returnedMessage === "" ? "" : "alert alert-danger"
          }
          role="alert"
          style={{ width: "400px", color: "#683aa4 ", marginLeft: "450px" }}
        >
          <b>{this.props.returnedMessage}</b>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.courseObj.courseId + "from add course");
  return {
    returnedMessage: state.returnedMessage,
    courseObj: state.courseObj,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddCourse: (course) => {
      dispatch(actionCreators.addCourse(course));
    },

    clearState: () => {
      dispatch(actionCreators.clearState());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCourse);
