import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreated from "../actions/action";
import logo from "../images/quizbg.png";
import "../css/AttemptQuiz.css";

class AttemptQuiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: "",
      answer: "",
    };
  }

  handleChange(opt, ans) {
    this.setState({
      options: opt,
      answer: ans,
    });

  }

  componentWillMount() {
    if (!localStorage.getItem("loggedUser")) {
      this.props.history.replace("/student-login");
    }
  }


  submit() {
    let { options, answer } = this.state;
    let score = 0;
    if(options === undefined){
      alert("Please attempt the answer");
      console.log(score)
    }
    
    if (options === answer) {
      score = score + 1;
      alert("Correct Answer");
    } 
    else {
      alert("Answered Incorrect ");
      console.log("Incorrect answer!!! Please try again");
    }

    console.log(score)
    console.log("Selected Option:" + this.state.options);
    console.log("Correct Answer" + this.state.answer);
  }
  componentDidMount() {
    this.props.onGetQuestions();
  }

  render() {
    let questionList = this.props.questionList.map((ques, index) => {
      return (
        <tr key={index}>
                    <h1 id="h1"> <td>{ques.question}</td> </h1>
                    <ul>
                        <li id="text-li" onClick={this.handleChange.bind(this,ques.option1, ques.correctAnswer)}>{ques.option1}</li>
                        <li id="text-li" onClick={this.handleChange.bind(this,ques.option2, ques.correctAnswer)}>{ques.option2}</li>
                        <li id="text-li" onClick={this.handleChange.bind(this,ques.option3, ques.correctAnswer)}>{ques.option3} </li>
                        <li id="text-li" onClick={this.handleChange.bind(this,ques.option4, ques.correctAnswer)}>{ques.option4} </li>
                        <div className="div-btn">
                            <button onClick={this.submit.bind(this)} className="float-left btn btn-primary btn-block rounded-pill submit-button"> Check Answer </button> 
                        </div>
                    </ul>
                </tr>
      );
    });
    return (
      <div className="bg">
        <img src={logo}  id="wave-qhome" alt="logo" />
        <div id="Content-text">
          <table className="table table-stripped table-light">
            <tbody>{questionList}</tbody>
          </table>
        </div>
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
    clearState: () => {
      return dispatch(actionCreated.clearState());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AttemptQuiz);
