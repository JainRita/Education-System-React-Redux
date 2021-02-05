import React, { Component } from "react";
import "../css/approveRegistration.css";
import { connect } from "react-redux";
import * as actionCreators from "../actions/action";
import { NavBarAdmin } from "./NavBarHome";

class ApproveRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [],
      response: "",
      error: "",
    };
  }
  componentWillMount() {
    if (!localStorage.getItem("loggedAdmin")) {
      this.props.history.replace("/admin-login");
    }
  }

  componentDidMount() {
    
    this.props.onGetRegistrationRequest();
    document.title = "Approve Request";
  }

  approveRequest = (studentId) => {
    this.props.onApproveRequest(studentId);
  };

  render() {
    return (
      <div>
        <NavBarAdmin />
        <h1
          style={{
            textAlign: "center",
            color: "#683AA4",
            fontWeight: "bold",
            marginTop: "66px",
          }}
        >
          Student Registration Request List
        </h1>
        <div className="container" style={{ overflowX: "auto" }}>
          <table className="table table-striped">
            <thead>
              <tr className="table-info">
                <td>Student Id</td>
                <td>First Name</td>
                <td>Middle Name</td>
                <td>Last Name</td>
                <td>Email</td>
                <td>Username</td>
                <td>Status</td>
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

                    <td>
                      <button
                        className="btn"
                        style={{ marginLeft: "50px" }}
                        onClick={() => {
                          this.approveRequest(student.studentId);
                        }}
                      >
                        Approve
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <h1 style={{textAlign:"center"}}>Loading..</h1>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  
  return {
    studentList: state.studentList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetRegistrationRequest: () => {
      return dispatch(actionCreators.showRegistrationRequest());
    },
    onApproveRequest: (studentId) => {
      return dispatch(actionCreators.approveStudentRequest(studentId));
    },
    clearState: () => {
      return dispatch(actionCreators.clearState());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApproveRegistration);
