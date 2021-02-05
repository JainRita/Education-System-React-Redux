import React, { Component } from "react";
import axios from "axios";
import { NavBarStudent } from "./NavBarHome";

import "../css/AddFeedback.css";

class AddFeedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: "",
      error: "",
      loggedUserName: "",
      status: "",
    };
    this.submitFeedback = this.submitFeedback.bind(this);
  }
  componentWillMount() {
    if (!localStorage.getItem("loggedUser")) {
      this.props.history.replace("/student-login");
    }
  }

  handleInputEvent = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: [value] });
  };

  submitFeedback = (e) => {
    e.preventDefault();
    const feedback = this.state.feedback;
    const loggedUser = this.state.loggedUserName;

    axios
      .post(
        `http://localhost:8080/api/educationsystem/feedback/add-feedback?sname=${loggedUser}&feedback=${feedback}`
      )
      .then((response) => {
        if (response.status === 200) {
          this.setState({ status: "Done" });
        }
      })
      .catch((error) => {
        if (error.status != 200) {
          this.setState({ status: "Failed" });
        }
      });

    this.setState({ feedback: "" });
  };

  render() {
    return (
      <div className="feedback-form">
        <NavBarStudent />
        <form
          id="feedback-form"
          onSubmit={this.submitFeedback}
          style={{ marginTop: "70px" }}
        >
          <div className="form-group fname">
            {this.state.status === "Done" ? (
              <div class="alert alert-success" role="alert">
                Feedback Submitted
              </div>
            ) : null}
            <input
              className="form-control"
              type="text"
              id="cname"
              name="feedback"
              onChange={this.handleInputEvent}
              placeholder="Enter Feedback/Grievance"
              required
            />
          </div>

          <div style={{ marginRight: "200px" }}>
            <button
              id="trainer-button"
              className="btn btn-primary rounded-pill"
              type="submit"
            >
              <b>Send Feedback</b>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddFeedback;
