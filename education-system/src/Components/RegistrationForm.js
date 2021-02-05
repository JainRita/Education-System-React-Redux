import React, { Component } from "react";
import "../css/registration.css";
import signup from "../images/signup.svg";
import * as actionCreators from "../actions/action";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { NavBarHome } from "./NavBarHome";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.middleName = React.createRef();
    this.username = React.createRef();
    this.emailId = React.createRef();
    this.contactNo = React.createRef();
    this.password = React.createRef();
    this.confirmPassword = React.createRef();

    this.state = {
      studentInfo: [],
      returnedMessage: {},
    };
    this.submitData = this.submitData.bind(this);
  }

  componentDidMount() {
    this.props.clearState();
    document.title = "Student Registration";
  }

  submitData = (e) => {
    e.preventDefault();

    let student = {
      firstName: this.firstName.current.value,
      middleName: this.middleName.current.value,
      lastName: this.lastName.current.value,
      userName: this.username.current.value,
      emailId: this.emailId.current.value,
      contactNumber: this.contactNo.current.value,
      password: this.password.current.value,
      confirmPassword: this.confirmPassword.current.value,
    };
    this.setState({ studentInfo: student });
    console.log(student);
    this.props.onRequestRegistration(student);

    this.firstName.current.value = "";
    this.lastName.current.value = "";
    this.middleName.current.value = "";
    this.username.current.value = "";
    this.emailId.current.value = "";
    this.contactNo.current.value = "";
    this.password.current.value = "";
    this.confirmPassword.current.value = "";
  };
  render() {
    let data = "";

    if (this.props.returnedMessage === undefined) {
      data = "";
    } else {
      let messageCode = Object.values(this.props.returnedMessage)[0];
      let message = Object.values(this.props.returnedMessage)[1];
      if (messageCode === 400) {
        data = (
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        );
      } else {
        if (this.props.returnedMessage.firstName) {
          data = (
            <div className="alert alert-success" role="alert">
              Registration Successful
            </div>
          );
        }
      }
    }

    return (
      <div>
        <div class="container d-flex justify-content-center ">
          <NavBarHome />
          <div class="row my-2 mx-2 main">
            <div class="col-md-4 col-12 mycol">
              <img
                src={signup}
                width="100%"
                height="100%"
                alt="sign up image"
              />
            </div>

            <div class="col-md-8 col-12 xcol">
              <h2
                class="title pt-5 pb-3"
                style={{ textAlign: "center", color: "#683aa4" }}
              >
                New here? Create Account here
              </h2>

              {data}
              <form class="myform" onSubmit={this.submitData} method="POST">
                <div class="row rone">
                  <div class="form-group col-md-6 fone py-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First name"
                      name="firstName"
                      ref={this.firstName}
                      required
                      minLength="2"
                    />
                  </div>
                  <div class="form-group col-md-6 ftwo py-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Middle name"
                      name="middleName"
                      ref={this.middleName}
                      required
                      minLength="2"
                    />
                  </div>

                  <div class="form-group col-md-6 ftwo py-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last name"
                      name="lastName"
                      ref={this.lastName}
                      minLength="2"
                      required
                    />
                  </div>
                  <div class="form-group col-md-6 ftwo py-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      name="username"
                      ref={this.username}
                      required
                      minLength="2"
                    />
                  </div>
                </div>
                <div class="row rtwo">
                  <div class="form-group col-md-6 fthree py-3">
                    <input
                      type="number"
                      class="form-control jk"
                      placeholder="Contact No"
                      name="contactNo"
                      ref={this.contactNo}
                      required
                      size="10"
                    />
                  </div>
                  <div class="form-group col-md-6 ffour py-3">
                    <input
                      type="email"
                      class="form-control lm"
                      placeholder="aniketkarmakar@gmail.com"
                      ref={this.emailId}
                      required
                      minLength="2"
                      autoComplete
                    />
                  </div>
                </div>
                <div class="row rthree">
                  <div class="form-group col-md-6 ffive py-3">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      name="password"
                      ref={this.password}
                      required
                      minLength="8"
                    />
                  </div>
                  <div class="form-group col-md-6 fsix py-3">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      ref={this.confirmPassword}
                      required
                      minLength="8"
                    />
                  </div>
                </div>
                <div class="row rfour">
                  <div class="form-group col-md-6 fseven py-3">
                    <button type="submit" class="btn btn-primary">
                      <span style={{ color: "white" }}>Register</span>
                    </button>
                  </div>
                  <div class="form-group col-md-6 feight py-3">
                    <p class="text-muted">
                      Already have an account?
                      <br />
                      <Link
                        to="/student-login"
                        style={{ textDecoration: "none" }}
                      >
                        <b style={{ color: "#683aa4" }}>Login here</b>
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.registrationStatus, "From Registration reqeust==========");
  return {
    returnedMessage: state.registrationStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestRegistration: (student) => {
      dispatch(actionCreators.requestRegistration(student));
    },
    clearState: () => {
      dispatch(actionCreators.clearState());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
