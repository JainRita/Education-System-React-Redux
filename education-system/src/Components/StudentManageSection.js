import React, { Component } from "react";
import { NavBarAdmin } from "../Components/NavBarHome";
import "../css/studentmanage.css";
import studentimg from "../images/hire-reactnative01.png";
import { Link } from "react-router-dom";

class StudentManageSection extends Component {
  componentWillMount() {
    if (!localStorage.getItem("loggedAdmin")) {
      this.props.history.replace("/admin-login");
    }
  }
  componentDidMount() {
    document.title = "Manage Student";
  }
  render() {
    return (
      <div>
        <NavBarAdmin />
        <div className="container">
          <div class="card-deck">
            <div class="card">
              <img class="card-img-top" src={studentimg} alt="Card image cap" />
              <div class="card-body">
                <h3
                  class="card-title"
                  style={{ textAlign: "center", fontWeight: "bolder" }}
                >
                  Approve Student
                </h3>

                <p class="card-text" style={{ textAlign: "center" }}>
                  <small class="text-muted ">
                    See all the students registration request
                  </small>
                </p>

                <Link to="/approve-registration">
                  <button id="btn-manage">Approve Request </button>
                </Link>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src={studentimg} alt="Card image cap" />
              <div class="card-body">
                <h3
                  class="card-title"
                  style={{ textAlign: "center", fontWeight: "bolder" }}
                >
                  View All Students
                </h3>

                <p class="card-text" style={{ textAlign: "center" }}>
                  <small class="text-muted">See all registered students</small>
                </p>

                <Link to="/view-student-details">
                  <button id="btn-manage">View Students </button>
                </Link>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src={studentimg} alt="Card image cap" />
              <div class="card-body">
                <h3
                  class="card-title"
                  style={{ textAlign: "center", fontWeight: "bolder" }}
                >
                  Individual Student
                </h3>

                <p class="card-text" style={{ textAlign: "center" }}>
                  <small class="text-muted">
                    Get Individual Student detail
                  </small>
                </p>
                <Link to="/single-student-details">
                  <button id="btn-manage">Click Here</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentManageSection;
