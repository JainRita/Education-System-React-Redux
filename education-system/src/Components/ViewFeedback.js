import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/action";

class ViewFeedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbackList: [],
      response: "",
      error: "",
    };
  }
  componentDidMount() {
    this.props.onGetAllFeedback();
  }
  componentWillMount() {
    if (!localStorage.getItem("loggedAdmin")) {
      this.props.history.replace("/admin-login");
    }
  }
  render() {
    return (
      <div>
        <h1
          style={{ textAlign: "center", color: "#683AA4", fontWeight: "bold" }}
        >
          Feedback And Grievance
        </h1>
        <table
          className="table table-striped"
          style={{ margin: "15px", padding: "10px" }}
        >
          <thead>
            <tr className="table-info">
              <td style={{ fontWeight: "bold" }}>Id</td>
              <td style={{ fontWeight: "bold" }}>From Username</td>
              <td style={{ fontWeight: "bold" }}>Student Feedback</td>
            </tr>
          </thead>
          <tbody>
            {this.props.feedbackList.map((feedback, index) => (
              <tr key={feedback.id}>
                <td>{feedback.id}</td>
                <td>{feedback.sname}</td>
                <td>{feedback.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    feedbackList: state.feedbackList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetAllFeedback: () => {
      return dispatch(actionCreators.showAllFeedback());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewFeedback);
