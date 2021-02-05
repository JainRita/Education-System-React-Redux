import React, { Component } from "react";
import * as actionCreators from "../actions/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../images/logoonly.png";

import "../css/AddTrainer.css";

class AddTrainer extends Component {
  constructor(props) {
    super(props);

    this.firstName = React.createRef();
    this.middleName = React.createRef();
    this.lastName = React.createRef();
  }

  add(e) {
    e.preventDefault();
    let trainer = {
      firstName: this.firstName.current.value,
      middleName: this.middleName.current.value,
      lastName: this.lastName.current.value,
    };

    this.props.onAddTrainer(trainer);
    this.firstName.current.value = "";
    this.middleName.current.value = "";
    this.lastName.current.value = "";
  }

  setCustomValidityForName() {
    alert(
      "First Name, Middle Name, Last Name fields cannot be empty and should only contain alphabets"
    );
  }
  componentWillMount() {
    if (!localStorage.getItem("loggedAdmin")) {
      this.props.history.replace("/admin-login");
    }
  }
  render() {
    return (
      <div className="trainer-form">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link id="logo" className="nav-link" to="">
                    <img id="logoimg" src={logo} alt="Logo" /> EDUCRATE
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add-trainer">
                    Add Trainer
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin-view-trainer">
                    View Trainers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/update-trainer-for-material">
                    Update Trainer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <form id="trainer-form">
          <div className="form-group fname">
            <input
              className="form-control"
              type="text"
              ref={this.firstName}
              id="cname"
              name="firstName"
              placeholder="First Name"
              pattern="^[a-zA-Z]+$"
              required
              onInvalid={this.setCustomValidityForName.bind(this)}
            />
          </div>
          <div className="form-group mname">
            <input
              className="form-control"
              type="text"
              ref={this.middleName}
              id="camount"
              name="middleName"
              placeholder="Middle Name"
              pattern="^[a-zA-Z]+$"
              required
              onInvalid={this.setCustomValidityForName.bind(this)}
            />
          </div>
          <div className="form-group lname">
            <input
              className="form-control"
              type="text"
              ref={this.lastName}
              id="cduration"
              name="lastName"
              placeholder="Last Name"
              pattern="^[a-zA-Z]+$"
              required
              onInvalid={this.setCustomValidityForName.bind(this)}
            />
          </div>
          <div style={{ marginRight: "200px" }}>
            <button
              id="trainer-button"
              className="btn btn-primary rounded-pill"
              onClick={this.add.bind(this)}
              type="submit"
            >
              <b>Add Trainer</b>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    returnedMessage: state.returnedMessage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddTrainer: (trainer) => {
      dispatch(actionCreators.addTrainer(trainer));
    },

    clearState: () => {
      dispatch(actionCreators.clearState());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTrainer);
