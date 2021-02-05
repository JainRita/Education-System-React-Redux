import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreated from "../actions/action";
import "../css/StudentViewTrainers.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logoonly.png";

class StudentViewTrainers extends Component {
  componentDidMount() {
    let courseId = this.props.match.params.courseId;
    console.log(courseId);
    this.props.onGetTrainersForStudents(courseId);
  }

  render() {
    let courseId = this.props.match.params.courseId;

    return (
      <div className="trainerbg">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link id="logo" className="nav-link" to="">
                    <img id="logoimg" src={logo} alt="Educrate Logo" /> EDUCRATE
                  </Link>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to={`/student-view-trainer/${courseId}`}
                  >
                    Trainers
                  </NavLink>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/quiz">
                    Test
                  </Link>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to={`/view-progress/${courseId}`}
                  >
                    Progress
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="container" style={{ padding: "30px" }}>
          <div class="row">
            {this.props.trainerList ? (
              this.props.trainerList.map((trainer, index) => (
                <div class="col" style={{ textAlign: "center" }}>
                  <div
                    class="card border-info mb-3"
                    style={{ maxWidth: "18rem" }}
                  >
                    <div class="card-header">Trainer</div>
                    <div class="card-body text-info">
                      <h5 class="card-title">
                        {trainer.firstName} {trainer.middleName}{" "}
                        {trainer.lastName}
                      </h5>
                      <NavLink
                        to={`/view-study-material-for-trainer/${trainer.trainerId}/`}
                      >
                        <h6>Select</h6>
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1>Loading..</h1>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.trainerListStudent);
  return {
    trainerList: state.trainerList,

    returnedMessage: state.returnedMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetTrainersForStudents: (courseId) => {
      return dispatch(actionCreated.getAllTrainersForStudent(courseId));
    },

    onDeleteTrainer: (trainerId) => {
      return dispatch(actionCreated.deleteTrainer(trainerId));
    },

    clearState: () => {
      return dispatch(actionCreated.clearState());
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentViewTrainers);
