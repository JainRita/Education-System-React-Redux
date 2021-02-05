import React, { Component } from "react";
import * as actionCreators from "../actions/action";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class AddQuiz extends Component {
  constructor(props) {
    super(props);

    this.questionId = React.createRef();
    this.question = React.createRef();
    this.option1 = React.createRef();
    this.option2 = React.createRef();
    this.option3 = React.createRef();
    this.option4 = React.createRef();
    this.correctAnswer = React.createRef();
  }

  componentDidMount() {
    this.props.clearState();
  }

  componentDidUpdate() {
    let check = this.props.returnedMessage.split(" ");
    if (check[0] === "Successfully") {
      setTimeout(() => {
        this.props.history.push("/getAll");
      }, 2000);
    }
  }
  componentWillMount() {
    if (!localStorage.getItem("loggedAdmin")) {
      this.props.history.replace("/admin-login");
    }
  }
  add(e) {
    let question = {
      questionId: this.questionId.current.value,
      question: this.question.current.value,
      option1: this.option1.current.value,
      option2: this.option2.current.value,
      option3: this.option3.current.value,
      option4: this.option4.current.value,
      correctAnswer: this.correctAnswer.current.value,
    };
    this.props.onAddTrainee(question);
  }

  update() {
    let question = {
      questionId: this.questionId.current.value,
      question: this.question.current.value,
      option1: this.option1.current.value,
      option2: this.option2.current.value,
      option3: this.option3.current.value,
      option4: this.option4.current.value,
      correctAnswer: this.correctAnswer.current.value,
    };

    this.props.onUpdateTrainee(question);
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <form className="form-group">
              <div className="mb-3 row">
                <label htmlFor="questionId" className="col-sm-4 col-form-label">
                  Question Id
                </label>
                <div className="col-sm-5">
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    ref={this.questionId}
                    id="questionId"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="question" className="col-sm-4 col-form-label">
                  Question Name
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    ref={this.question}
                    id="question"
                    required
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="option1" className="col-sm-4 col-form-label">
                  First Option
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    ref={this.option1}
                    id="option1"
                    required
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="option2" className="col-sm-4 col-form-label">
                  Second Option
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    ref={this.option2}
                    id="option2"
                    required
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="option3" className="col-sm-4 col-form-label">
                  Third Option
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    ref={this.option3}
                    id="option3"
                    required
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="option4" className="col-sm-4 col-form-label">
                  Fourth Option
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    ref={this.option4}
                    id="option4"
                    required
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label
                  htmlFor="correctAnswer"
                  className="col-sm-4 col-form-label"
                >
                  Correct Answer
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    ref={this.correctAnswer}
                    id="correctAnswer"
                    required
                  />
                </div>
              </div>
              <button
                className="btn btn-success mr-5"
                onClick={this.add.bind(this)}
              >
                Add
              </button>
              <button
                className="btn btn-primary mr-2"
                onClick={this.update.bind(this)}
              >
                Update
              </button>
              <div
                className={
                  this.props.returnedMessage === "" ? "" : "alert alert success"
                }
                role="alert"
              >
                {this.props.returnedMessage}
              </div>
            </form>
          </div>
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
    onAddTrainee: (question) => {
      dispatch(actionCreators.addQuestion(question));
    },
    onUpdateTrainee: (updatedQuesDetails) => {
      dispatch(actionCreators.updateQuestion(updatedQuesDetails));
    },
    clearState: () => {
      dispatch(actionCreators.clearState());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddQuiz));
