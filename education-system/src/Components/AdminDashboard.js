import React, { Component } from "react";
import "../css/adminDashboard.css";
import adminhome from "../images/adminhome.svg";
import course from "../images/course.svg";
import test from "../images/test.svg";
import feedback from "../images/feedback.svg";
import grievance from "../images/grievance.svg";
import student from "../images/student.svg";
import respond from "../images/respond.svg";
import { NavBarAdmin } from "./NavBarHome";
import { Link } from "react-router-dom";

class AdminDashboard extends Component {
  componentWillMount() {
    if (!localStorage.getItem("loggedAdmin")) {
      this.props.history.replace("/admin-login");
    }
  }

  render() {
    return (
      <div>
        <NavBarAdmin />
        <br />
        <br />
        <div
          className="container"
          style={{
            border: "2px solid #683AA4",
            borderRadius: "3px",
            marginTop: "35px",
          }}
        >
          <img
            src={adminhome}
            className="img-fluid"
            alt="Responsive image"
            width="100%"
          />
        </div>
        <hr />

        <div className="container">
          <div className="card-deck row">
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div
                className="card mb-4"
                style={{
                  border: "2px solid #683AA4",
                  borderRadius: "5px",
                  boxShadow: "5px 10px #a181dd",
                }}
              >
                <div className="overlay">
                  <img src={course} alt="Card image cap" id="test-img" />
                </div>

                <div className="card-body">
                  <Link to="/add-course">
                    <button type="button" id="btn-admin-home">
                      Click here to manage Courses
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6">
              <div
                className="card mb-4"
                style={{
                  border: "2px solid #683AA4",
                  borderRadius: "5px",
                  boxShadow: "5px 10px #a181dd",
                }}
              >
                <div className="overlay">
                  <img src={test} alt="Card image cap" id="test-img" />
                </div>

                <div className="card-body">
                  <Link to="/add-quiz">
                    <button type="button" id="btn-admin-home">
                      Click here to manage Test
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6">
              <div
                className="card mb-4"
                style={{
                  border: "2px solid #683AA4",
                  borderRadius: "5px",
                  boxShadow: "5px 10px #a181dd",
                }}
              >
                <div className="overlay">
                  <img src={feedback} alt="Card image cap" id="test-img" />
                </div>

                <div className="card-body">
                  <Link to="/view-feedback">
                    <button type="button" id="btn-admin-home">
                      Click here to manage Feedback
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6">
              <div
                className="card mb-4"
                style={{
                  border: "2px solid #683AA4",
                  borderRadius: "5px",
                  boxShadow: "5px 10px #a181dd",
                }}
              >
                <div className="overlay">
                  <img src={grievance} alt="Card image cap" id="test-img" />
                </div>

                <div className="card-body">
                  <Link to="/add-trainer">
                    <button type="button" id="btn-admin-home">
                      Click here to manage Trainers
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6">
              <div
                className="card mb-4"
                style={{
                  border: "2px solid #683AA4",
                  borderRadius: "5px",
                  boxShadow: "5px 10px #a181dd",
                }}
              >
                <div className="overlay">
                  <img src={student} alt="Card image cap" id="test-img" />
                </div>

                <div className="card-body">
                  <Link to="/manage-student">
                    <button type="button" id="btn-admin-home">
                      Click here to manage Student
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6">
              <div
                className="card mb-4"
                style={{
                  border: "2px solid #683AA4",
                  borderRadius: "5px",
                  boxShadow: "5px 10px #a181dd",
                }}
              >
                <div className="overlay">
                  <img src={respond} alt="Card image cap" id="test-img" />
                </div>

                <div className="card-body">
                  <Link to="">
                    <button type="button" id="btn-admin-home">
                      Click here to manage Message
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashboard;
