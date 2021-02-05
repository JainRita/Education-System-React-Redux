import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/action";
import { NavBarAdmin } from "./NavBarHome";

class ViewAllStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [],
      loaded: false,
    };
  }

  componentDidMount() {
    this.props.onGetAllStudents();
    document.title = "All Student Details";
  }

  componentWillMount() {
    if (!localStorage.getItem("loggedAdmin")) {
      this.props.history.replace("/admin-login");
    }
  }
  render() {
    return (
      <div className="container">
        <NavBarAdmin />
        <h3
          style={{ textAlign: "center", fontWeight: "bold", marginTop: "70px" }}
        >
          All Registered Student Details
        </h3>
        <hr />
        <table className="table table-striped">
          <thead>
            <tr className="table-info">
              <td>Student Id</td>
              <td>First Name</td>
              <td>Middle Name</td>
              <td>Last Name</td>
              <td>Email</td>
              <td>Username</td>
              <td>Contact No</td>
            </tr>
          </thead>
          <tbody>
            {this.props.studentList ? (
              this.props.studentList.map((student, index) => (
                <tr key={student.studentId}>
                  <td>{student.studentId}</td>
                  <td>{student.firstName}</td>
                  <td>{student.middleName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.emailId}</td>
                  <td>{student.userName}</td>
                  <td>{student.contactNumber}</td>
                </tr>
              ))
            ) : (
              <h1>Loading</h1>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    studentList: state.studentDetailsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetAllStudents: () => {
      return dispatch(actionCreators.getAllStudents());
    },
    clearState: () => {
      return dispatch(actionCreators.clearState());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllStudent);
