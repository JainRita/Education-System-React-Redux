import React, { Component } from "react";
import * as actionCreators from "../actions/action";
import { connect } from "react-redux";

import "../css/UpdateTrainerForStudyMaterial.css";

class UpdateTrainerForStudyMaterial extends Component {
  constructor(props) {
    super(props);

    this.trainerId = React.createRef();
    this.content = React.createRef();
  }

  update() {
    this.props.onUpdateTrainer(
      this.trainerId.current.value,
      this.content.current.value
    );
  }
  componentWillMount() {
    if (!localStorage.getItem("loggedAdmin")) {
      this.props.history.replace("/admin-login");
    }
  }

  setCustomValidity() {
    alert("Content field cannot be empty");
  }

  render() {
    return (
      <div className="update-trainer-form">
        <form id="update-trainer-form">
          <div className="form-group tId">
            <input
              className="form-control"
              type="number"
              ref={this.trainerId}
              id="tId"
              name="trainerId"
              placeholder="Trainer Id"
              min="1"
              required
            />
          </div>
          <div className="form-group content">
            <input
              className="form-control"
              type="text"
              ref={this.content}
              id="content"
              name="cony\tent"
              placeholder="Content"
              required
              onInvalid={this.setCustomValidity.bind(this)}
            />
          </div>
          <div style={{ marginRight: "200px" }}>
            <button
              id="update-trainer-button"
              class="btn btn-primary rounded-pill"
              onClick={this.update.bind(this)}
              type="submit"
            >
              <b>Update Trainer</b>
            </button>
          </div>
        </form>

        <div
          className={
            this.props.returnedMessage === "" ? "" : "alert alert-danger"
          }
          role="alert"
          style={{ width: "400px", color: "#683aa4 ", marginLeft: "450px" }}
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
    onUpdateTrainer: (trainerId, content) => {
      dispatch(actionCreators.updateTrainer(trainerId, content));
    },

    clearState: () => {
      dispatch(actionCreators.clearState());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateTrainerForStudyMaterial);
