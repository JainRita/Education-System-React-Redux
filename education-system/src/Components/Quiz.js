import React, { Component } from "react";
import logo from "../images/bg1.png";
import avtar from "../images/avatar.svg";
import { Link } from "react-router-dom";
import "../css/style.css";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    window.open("/attemptquiz");
  }
  componentWillMount() {
    if (!localStorage.getItem("loggedUser")) {
      this.props.history.replace("/student-login");
    }
  }
  render() {
    return (
      <div>
        <img src={logo} id="wave-qhome" alt="logo" />
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div id="container-test">
                <img src={avtar} id="avatar-test" alt="avtar" />
              </div>
              <div id="div-welcome-test"><strong> Welcome!! Ready for Test </strong> </div>
              <br />
              <div id="div-instruct-test"> <strong>
                <h3 id="h3-test">Instructions Before Proceeding </h3> <hr id="hr-test"/>
                <ol>
                  <li id="li-test">No use of calculators are allowed.</li>
                  <li id="li-test">
                    Do not minimize the screen or switch to other tabs.
                  </li>
                  <li id="li-test">
                    Total Duration of examination is 30 minutes.
                  </li>
                  <li id="li-test">
                    Student can check answer after each questions.
                  </li>
                  <li id="li-test">
                    Number of Questions : 10 
                  </li>
                </ol>
                </strong>
              </div>
              <br />
              <div id="div-btn-test">
                <Link to="/attempt-quiz">
                  <button id="btn-test">
                    <strong> Begin Test </strong>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
