import React, { Component } from "react";

import * as actionCreators from "../actions/action";
import { connect } from "react-redux";
import "../css/addmessage.css";
import plane from "../images/5699-loading-26-paper-plane.gif";
import avatar from "../images/avatar.svg";
import messagebg from "../images/messagebg.png";

class AddMessage extends Component {
  constructor(props) {
    super(props);

    this.date = React.createRef();
    this.message = React.createRef();

    this.state = {
      message: "",
    };
  }
  componentWillMount() {
    if (!localStorage.getItem("loggedAdmin")) {
      this.props.history.replace("/admin-login");
    }
  }
  add(event) {
    event.preventDefault();
    let message = {
      date: this.date.current.value,
      message: this.message.current.value,
    };
    console.log(message);

    var params = new URLSearchParams();
    params.append("messageDate", message.date);
    params.append("messageDescription", message.message);

    this.props.onAddMessage(params);
    alert(this.props.returnedMessage === "" ? "" : this.props.returnedMessage);
  }
  render() {
    return (
      <div className="addmessage">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <img className="addmessage-plane" src={plane} alt="" />
              <div className="div-avatar">
                <img src={avatar} className="addmessage-avatar" alt="" />
              </div>
              <div className="addmessage-div-welcome">Admin</div>
              <hr className="addmessage-hr" />
              <div className="addmessage-login-text">Message Students</div>
              <div className="addmessage-form-container">
                <form className="row g-3" onSubmit={this.onSubmit}>
                  <div className="col-md-12">
                    <div className="form-group addmessage-has-date">
                      <input
                        type="date"
                        id="date"
                        ref={this.date}
                        placeholder="Today's Date"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group addmessage-has-message">
                      <input
                        type="text"
                        id="message"
                        ref={this.message}
                        placeholder="Message here..."
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="addmessage-div-btn">
                      <button
                        type="submit"
                        className="addmessage-btn btn-primary btn-block rounded-pill"
                        onClick={this.add.bind(this)}
                      >
                        Message
                      </button>
                    </div>
                  </div>
                  <div className="addmessage-div-text">
                    <h5 className="addmessage-h5">
                      Broadcasts messages to every single student
                    </h5>
                  </div>
                </form>
              </div>
            </div>
            <div className="col">
              <img src={messagebg} className="addmessage-bg" alt="" />
            </div>
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
    onAddMessage: (message) => {
      dispatch(actionCreators.addMessage(message));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMessage);
