import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/studenthome.css";
import { NavBarStudent } from "../Components/NavBarHome";
import shome1 from "../images/shome1.jpeg";
import bookgif from "../images/books.gif";

class StudentHome extends Component {
  componentWillMount() {
    if (!localStorage.getItem("loggedUser")) {
      this.props.history.replace("/student-login");
    }
  }
  render() {
    return (
      <div>
        <NavBarStudent />
        <div class="bg-student">
          <div class="container">
            <div class="row">
              <div class="col">
                <img id="mainimg" src={shome1} alt="main home image" />
              </div>
              <div class="col">
                <div className="imageText">
                  <b>WELCOME TO EDUCRATE</b>
                </div>
                <div className="desc">
                  <b>Begin your learning journey!</b>
                </div>
              </div>
            </div>
          </div>

          <div className="browse">
            <div class="container">
              <div class="row">
                <div class="col">
                  <button
                    class="btn btn-primary"
                    id="browseButton"
                    type="button"
                    style={{ color: "white" }}
                  >
                    <Link
                      to="/student-view-course"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <h5 style={{ color: "white", marginTop: "2px" }}>
                        Browse Catalog
                      </h5>
                    </Link>
                  </button>
                </div>

                <div class="col">
                  <img id="gif" src={bookgif} alt="book gif" />
                </div>
              </div>
            </div>
          </div>
          <footer>
            <div className="footer">
              <h1>Contact Us</h1>
              9807654321
              <br />
              educrate315@gmail.com
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default StudentHome;
