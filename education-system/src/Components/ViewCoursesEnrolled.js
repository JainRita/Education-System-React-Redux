import React, { Component } from "react";
import { NavBarAdmin } from "./NavBarHome";
import { connect } from "react-redux";
import * as actionCreators from "../actions/action";
import axios from "axios";

class ViewCoursesEnrolled extends Component {
  constructor(props) {
    super(props);
    this.studentId = React.createRef();
    this.state = {
      courseList: [],
      message: "",
      error: "",
    };
    this.submitData = this.submitData.bind(this);
  }
  componentWillMount() {
    if (!localStorage.getItem("loggedAdmin")) {
      this.props.history.replace("/admin-login");
    }
  }

  submitData = (e) => {
    e.preventDefault();
    const id = this.studentId.current.value;
    console.log(id);
    axios
      .get(
        `http://localhost:8080/api/educationsystem/get-courses-enrolled/${id}`
      )
      .then((res) => {
        console.log(res.data);
        res.data.forEach((e) => console.log(e.courseName));
        // console.log(res.data[0].courseName.toString());

        this.setState({ courseList: res.data });
        if (res.data.errorCode === 404) {
          this.setState({ error: res.data.message });
        } else if (res.data.errorCode === 403) {
          this.setState({ error: res.data.message });
        } else {
          this.setState({ message: res.data });
        }
        console.log(this.state.message + "mmmmmmmmmmm");
        console.log(this.state.error + "eeeeeeeeeeee");
      })
      .catch((res) => {
        console.log(res.data);
      });

    this.studentId.current.value = "";
  };

  componentDidMount() {
    document.title = "Enrolled Courses";
    this.props.clearState();
  }

  render() {
    let courseList = this.props.courseList.map((course) => {
      return <h1 style={{ textAlign: "center" }}>{course.courseName}</h1>;
    });

    return (
      <div className="container-fluid">
        <NavBarAdmin />
        <form onSubmit={this.submitData}>
          <div
            className="form-group cname"
            style={{ textAlign: "center", marginTop: "60px" }}
          >
            <input
              className="form-control"
              type="number"
              ref={this.studentId}
              id="studentId"
              name="studentId"
              placeholder="Enter the Student ID"
              required
            />
            <br />
            <button type="submit" id="trainer-button">
              Get Data
            </button>
          </div>
        </form>
        {/* {this.props.courseList ? (
          this.props.courseList.map((course) => {
            <h1 style={{ textAlign: "center" }}>{course.courseName}</h1>;
          })
        ) : (
          <h2 style={{ textAlign: "center" }}></h2>
        )} */}

        {this.state.message ? (
          <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
            {this.state.message}
          </h3>
        ) : null}
        {/* {this.state.error ? (
          <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
            {this.state.error}
          </h3>
        ) : null} */}

        {/* {courseList ? courseList : <h2>Loading</h2>} */}
        {/* {this.props.courseList.map((e) => {
          e.payment = "";
          e.progess = "";
          e.test = "";

          console.log(e.courseName);
        })} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.courseList);
  // state.courseList.map((e) => {
  //   e.payment = "";
  //   e.progess = "";
  //   e.test = "";

  //   console.log(e.courseName);
  // });
  // console.log(state.studentObj + "hello how do you do");
  return {
    courseList: state.courseList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetCourses: (id) => {
      return dispatch(actionCreators.getAllEnrolledCourses(id));
    },
    clearState: () => {
      dispatch(actionCreators.clearState());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewCoursesEnrolled);
