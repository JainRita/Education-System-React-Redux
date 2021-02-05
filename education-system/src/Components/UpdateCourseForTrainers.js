import React, { Component } from "react";
import * as actionCreators from "../actions/action";
import { connect } from "react-redux";
import "../css/UpdateCourseForTrainers.css";

class UpdateCourseForTrainers extends Component {
  constructor(props) {
    super(props);

    this.courseId = React.createRef();
    this.firstName = React.createRef();
  }

  update(e) {
    e.preventDefault();
    this.props.onUpdateCourseForTrainers(
      this.courseId.current.value,
      this.firstName.current.value
    );
  }
  componentWillMount() {
    if (!localStorage.getItem("loggedAdmin")) {
      this.props.history.replace("/admin-login");
    }
  }

  setCustomValidity() {
    alert("Please Enter Trainer's First Name");
  }

  render() {
    return (
      <div className="update-course-trainer">
        <form id="update-course-trainer">
          <div className="form-group cId">
            <input
              className="form-control"
              type="number"
              ref={this.courseId}
              id="tId"
              name="courseId"
              placeholder="Course Id"
              min="1"
              required
            />
          </div>
          <div className="form-group fname">
            <input
              className="form-control"
              type="text"
              ref={this.firstName}
              id="content"
              name="firstName"
              placeholder="Trainer's First Name"
              required
              onInvalid={this.setCustomValidity.bind(this)}
            />
          </div>
          <div style={{ marginRight: "200px" }}>
            <button
              id="update-courset-button"
              class="btn btn-primary rounded-pill"
              onClick={this.update.bind(this)}
              type="submit"
            >
              <b>Add Trainer</b>
            </button>
          </div>
        </form>

        <div
          className={
            this.props.returnedMessage === "" ? "" : "alert alert-danger"
          }
          role="alert"
          style={{
            width: "400px",
            color: "#683aa4 ",
            marginLeft: "450px",
            textAlign: "center",
          }}
        >
          <b>{this.props.returnedMessage}</b>
        </div>
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
    onUpdateCourseForTrainers: (courseId, firstName) => {
      dispatch(actionCreators.updateCourseForTrainers(courseId, firstName));
    },

    clearState: () => {
      dispatch(actionCreators.clearState());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateCourseForTrainers);
