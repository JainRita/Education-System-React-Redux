import React, { Component } from "react";
import { NavBarStudent } from "./NavBarHome";
import { connect } from "react-redux";
import * as actionCreators from "../actions/action";
import avatar from "../images/avatar.svg";

class UpdateStudentProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      middleName: "",
      lastName: "",
      contactNo: "",
      emailId: "",
      message: "",
    };
    // this.updateProfile = this.updateProfile.bind(this);
  }
  componentWillMount() {
    if (!localStorage.getItem("loggedUser")) {
      this.props.history.replace("/student-login");
    }
  }

  componentDidMount() {
    const loggedUserObject = JSON.parse(localStorage.getItem("loggedUser"));
    if (loggedUserObject) {
      const loggedUserId = loggedUserObject.studentId;
      this.props.onGetSingleStudentDetails(loggedUserId);
    }
    document.title = "My Profile";
  }

  render() {
    return (
      <div className="container-fluid">
        <NavBarStudent />
        <h1 style={{ textAlign: "center", marginTop: "75px" }}>My Profile</h1>
        {this.props.studentObj.firstName ? (
          <div class="card-view" style={{ marginTop: "50px" }}>
            <img src={avatar} alt="Avatar" style={{ width: "100%" }} />
            <div class="container-student" style={{ textAlign: "center" }}>
              <h4>
                <b>
                  {this.props.studentObj.firstName}
                  &nbsp;
                  {this.props.studentObj.lastName}
                </b>
              </h4>

              <p>Username: {this.props.studentObj.userName}</p>

              <p>Email-Id: {this.props.studentObj.emailId}</p>

              <p>Contact no: {this.props.studentObj.contactNumber}</p>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    studentObj: state.studentObj,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetSingleStudentDetails: (id) => {
      return dispatch(actionCreators.getSingleStudentDetails(id));
    },
    clearState: () => {
      dispatch(actionCreators.clearState());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateStudentProfile);
