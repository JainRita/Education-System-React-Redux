import React, { Component } from "react";
import "../css/AdminViewCourse.css";
import { connect } from "react-redux";
import * as actionCreated from "../actions/action";

class AdminViewTrainers extends Component {
  componentDidMount() {
    this.props.onGetTrainers();
  }

  delete(trainerId) {
    this.props.onDeleteTrainer(trainerId);
  }
  componentWillMount() {
    if (!localStorage.getItem("loggedAdmin")) {
      this.props.history.replace("/admin-login");
    }
  }

  render() {
    let trainerList = this.props.trainerList.map((trainer, index) => {
      return (
        <tr key={index}>
          <th>{trainer.trainerId}</th>
          <td>{trainer.firstName}</td>
          <td>{trainer.middleName}</td>
          <td>{trainer.lastName}</td>

          <td>
            <button
              className="view"
              onClick={this.delete.bind(this, trainer.trainerId)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div className="adminViewbg">
        <div class="tablediv">
          <table class="table">
            <thead id="thead" class="table-primary">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Middle Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>{trainerList}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    trainerList: state.trainerList,

    returnedMessage: state.returnedMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetTrainers: () => {
      return dispatch(actionCreated.getAllTrainers());
    },

    onDeleteTrainer: (trainerId) => {
      return dispatch(actionCreated.deleteTrainer(trainerId));
    },

    clearState: () => {
      return dispatch(actionCreated.clearState());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminViewTrainers);
