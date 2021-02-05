import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreated from "../actions/action";
import "../css/viewmessage.css";
import messageReceived from "../images/35591-message-received.gif";
import viewmessage from "../images/view message.gif";
import view from "../images/view.svg";

export class ViewMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messageList: [],
      message: "",
      search: null,
    };
  }

  componentDidMount() {
    this.props.onGetMessages();
  }

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };

  componentWillMount() {
    if (!localStorage.getItem("loggedUser")) {
      this.props.history.replace("/student-login");
    }
  }

  render() {
    if (!(this.state.search == null)) {
      return (
        <div>
          <div className="d-flex align-items-start">
            <img className="viewmessage-msg" src={messageReceived} alt="" />
            <img className="viewmessage-bg" src={view} alt="" />
          </div>

          <hr className="viewmessage-hr" />

          <div className="input-group mb-3 mx-auto py-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search....."
              onChange={(e) => this.searchSpace(e)}
            />
            <span className="input-group-text">
              <i className="fas fa-search"></i>
            </span>
          </div>

          <h2 className="viewmessage-h2">Messages</h2>

          <div className="viewmessage-list-group">
            {this.props.messageList
              .filter(
                (message) =>
                  message.messageDescription.includes(this.state.search) ||
                  message.messageDate.toString().includes(this.state.search)
              )
              .map((message, index) => {
                return (
                  <a
                    href="#"
                    className="list-group-item list-group-item-action"
                    key={index}
                  >
                    <div className="row">
                      <div className="col-1">
                        <img className="col-1-img" src={view} alt="" />
                      </div>
                      <div className="col-11">
                        <div className="d-flex w-100 justify-content-between">
                          <h5 className="viewmessage-mb-1">Message </h5>
                          <small>{message.messageDate}</small>
                        </div>
                        <p className="mb-1">{message.messageDescription}.</p>
                        <small>All messages are end to end encrypted.</small>
                      </div>
                    </div>
                  </a>
                );
              })}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="d-flex align-items-start">
            <img className="viewmessage-msg" src={messageReceived} alt="" />
            <img className="viewmessage-bg" src={viewmessage} alt="" />
          </div>

          <hr className="viewmessage-hr" />

          <div className="input-group mb-3 mx-auto py-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search....."
              onChange={(e) => this.searchSpace(e)}
            />
            <span className="input-group-text">
              <i className="fas fa-search"></i>
            </span>
          </div>

          <h2 className="viewmessage-h2">Messages</h2>

          <div className="viewmessage-list-group">
            {this.props.messageList.map((message, index) => {
              return (
                <a
                  href="#"
                  className="list-group-item list-group-item-action"
                  key={index}
                >
                  <div className="row">
                    <div className="col-1">
                      <img className="col-1-img" src={view} alt="" />
                    </div>
                    <div className="col-11">
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="viewmessage-mb-1">Message </h5>
                        <small>{message.messageDate}</small>
                      </div>
                      <p className="mb-1">{message.messageDescription}.</p>
                      <small>All messages are end to end encrypted.</small>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    messageList: state.messageList,

    returnedMessage: state.returnedMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetMessages: () => {
      return dispatch(actionCreated.getAllMessages());
    },
    clearState: () => {
      return dispatch(actionCreated.clearState());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewMessage);
