import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logoonly-removebg-preview.png";
import { Redirect } from "react-router-dom";

const studentLogout = () => {
  localStorage.removeItem("loggedUser");
  <Redirect to="/" />;
};

const adminLogout = () => {
  localStorage.removeItem("loggedAdmin");
  <Redirect to="/admin-login" />;
};

const NavBarHome = () => {
  return (
    <div>
      <nav className="py-3 navbar navbar-expand-lg fixed-top auto-hiding-navbar">
        <div className="container">
          <div className="navbar-brand" style={{ marginBottom: "18px" }}>
            <img
              className="logo"
              src={logo}
              style={{ marginBottom: "18px" }}
              alt="LOGO"
            />
            <b style={{ color: "#683aa4" }}>educrate</b>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ marginBottom: "20px" }}
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  <small>Home</small>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Courses">
                  <small>Courses</small>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  <small>Contact</small>
                </a>
              </li>

              <li className="nav-item">
                <Link to="/student-login" className="nav-link">
                  <small>Student</small>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/admin-login" className="nav-link">
                  <small>Admin</small>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

const NavBarAdmin = () => {
  return (
    <div>
      <nav className="py-3 navbar navbar-expand-lg fixed-top auto-hiding-navbar">
        <div className="container">
          <div className="navbar-brand" style={{ marginBottom: "15px" }}>
            <img
              className="logo"
              src={logo}
              style={{ marginBottom: "12px" }}
              alt="LOGO"
            />
            <b style={{ color: "#683aa4" }}>educrate</b>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ marginBottom: "20px" }}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/add-course">
                  <small>Course</small>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add-quiz">
                  <small>Test</small>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/view-feedback">
                  <small>Feedback</small>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/add-trainer" className="nav-link">
                  <small>Trainers</small>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/manage-student" className="nav-link">
                  <small>Student</small>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/add-message" className="nav-link">
                  <small>Message</small>
                </Link>
              </li> */}

              <li className="nav-item">
                <Link to="" className="nav-link" onClick={adminLogout}>
                  <small>Logout</small>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

const NavBarStudent = () => {
  return (
    <div>
      <nav
        className="py-3 navbar navbar-expand-lg fixed-top auto-hiding-navbar"
        style={{ marginBottom: "10px" }}
      >
        <div className="container">
          <div className="navbar-brand" style={{ marginBottom: "10px" }}>
            <img
              className="logo"
              src={logo}
              style={{ marginBottom: "12px" }}
              alt="LOGO"
            />
            <b style={{ color: "#683aa4" }}>educrate</b>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ marginBottom: "20px" }}
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/student-view-course">
                  <small>Courses</small>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/add-feedback">
                  <small>Feedback</small>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/view-message" className="nav-link">
                  <small>Message</small>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/my-profile" className="nav-link">
                  <small>Profile</small>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="" className="nav-link" onClick={studentLogout}>
                  <small>Logout</small>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export { NavBarHome, NavBarAdmin, NavBarStudent };
