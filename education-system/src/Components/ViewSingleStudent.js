import React, { Component } from "react";
import avatar from "../images/avatar.svg";
import "../css/singlestudent.css";
import { NavBarAdmin } from "./NavBarHome";
import { connect } from "react-redux";
import * as actionCreators from "../actions/action";

class ViewSingleStudent extends Component {
  constructor(props) {
    super(props);

    this.studentId = React.createRef();

    this.state = {
      studentId: "",
    };
    this.submitData = this.submitData.bind(this);
  }

  submitData = (e) => {
    e.preventDefault();
    const id = this.studentId.current.value;
    console.log(id);
    this.props.onGetSingleStudentDetails(id);
    this.studentId.current.value = "";
  };

  componentDidMount() {
    this.props.clearState();
  }
  componentWillMount() {
    if (!localStorage.getItem("loggedAdmin")) {
      this.props.history.replace("/admin-login");
    }
  }

  render() {
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
            <button
              type="submit"
              id="trainer-button"
              style={{ width: "235px" }}
            >
              Get Data
            </button>
          </div>
        </form>

        {this.props.student.errorCode === 403 ? (
          <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
            {this.props.student.message}
          </h3>
        ) : null}

        {this.props.student === "Student With given Id is not available" ? (
          <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
            {this.props.student}
          </h3>
        ) : null}

        {this.props.student.firstName ? (
          <div class="card-view">
            <img src={avatar} alt="Avatar" style={{ width: "100%" }} />
            <div class="container-student" style={{ textAlign: "center" }}>
              <h4>
                <b>
                  {this.props.student.firstName}
                  &nbsp;
                  {this.props.student.lastName}
                </b>
              </h4>

              <p>Username: {this.props.student.userName}</p>

              <p>Email-Id: {this.props.student.emailId}</p>

              <p>Contact no: {this.props.student.contactNumber}</p>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  // console.log(state.studentObj + "hello how do you do");
  return {
    student: state.studentObj,
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewSingleStudent);
