import React, { Component } from "react";
import "../css/approveRegistration.css";
import { connect } from "react-redux";
import * as actionCreators from "../actions/action";

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
    //this.props.clearState();
    this.props.onGetRegistrationRequest();
  }

  approveRequest = (studentId) => {
    this.props.onApproveRequest(studentId);
  };

  render() {
    return (
      <div>
        <h1
          style={{ textAlign: "center", color: "#683AA4", fontWeight: "bold" }}
        >
          Student Registration Request List
        </h1>
        <div className="container" style={{ overflowX: "auto" }}>
          {/* <div className="table-responsive">

            <table className="table">
              <thead style={{ textAlign: "center" }}>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Middle Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Username</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-info">
                  <th scope="row">1</th>
                  <td>Aniket</td>
                  <td>Keshav</td>
                  <td>Karmakar</td>
                  <td>Aniket@gmail.com</td>
                  <td>aniket98</td>
                  <td>
                    <button className="btn btn-outline-success">Approve</button>
                  </td>
                </tr>
               
                {this.props.studentList.map((student, index) => {
                  <tr className="table-info" key={index}>
                    <th scope="row">{student.studentId}</th>
                    <td>{student.firstName}</td>
                    <td>{student.middleName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.emailId}</td>
                    <td>{student.username}</td>
                    <td>
                      <button className="btn btn-outline-success">
                        Approve
                      </button>
                    </td>
                  </tr>;
                })}
              </tbody>
            </table>
          </div> */}

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
                <h1>Loading..</h1>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state, "from approve");
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
