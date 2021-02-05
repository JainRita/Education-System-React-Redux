import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreated from "../actions/action";

class QuizQuestion extends Component {
  componentDidMount() {
    this.props.onGetQuestions();
  }

  delete(questionId) {
    this.props.onDeleteQuestion(questionId);
  }
  render() {
    let questionList = this.props.questionList.map((ques, index) => {
      return (
        <tr key={index}>
          <th>{ques.questionId}</th>
          <td>{ques.question}</td>
          <td>{ques.option1}</td>
          <td>{ques.option2}</td>
          <td>{ques.option3}</td>
          <td>{ques.option4}</td>
          <td>{ques.correctAnswer}</td>
          <td>
            <button
              className="view"
              onClick={this.delete.bind(this, ques.questionId)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <h1 className="text-center"> Question List</h1>
        <table className="table table-striped">
          <thead>
            <tr className="table-danger">
              <td>Question Id</td>
              <td>Question Name</td>
              <td>Option 1</td>
              <td>Option 2</td>
              <td>Option 3</td>
              <td>Option 4</td>
              <td>Correct Answer</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>{questionList}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questionList: state.questionList,

    returnedMessage: state.returnedMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetQuestions: () => {
      return dispatch(actionCreated.getAllQuestions());
    },
    onDeleteQuestion: (questionId) => {
      return dispatch(actionCreated.deleteQuestion(questionId));
    },

    clearState: () => {
      return dispatch(actionCreated.clearState());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(QuizQuestion);
