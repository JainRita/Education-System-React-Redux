import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actionCreators from "../actions/action";
import "../css/payment.css";
import paymentbg from "../images/paymentbg.svg";
import payylogo from "../images/payylogo.png";
import axios from "axios";

class AddPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentObj: {},
    };
    this.cardNumber = React.createRef();
    this.cardType = React.createRef();
    this.bankName = React.createRef();
    this.amount = React.createRef();
    this.description = React.createRef();
    this.paymentDate = React.createRef();
  }
  // componentDidMount() {
  //   this.props.clearState();
  // }

  componentWillMount() {
    if (!localStorage.getItem("loggedUser")) {
      this.props.history.replace("/student-login");
    }
  }

  add(e) {
    e.preventDefault();
    let newPayment = {
      cardNumber: this.cardNumber.current.value,
      cardType: this.cardType.current.value,
      bankName: this.bankName.current.value,
      amount: this.amount.current.value,
      description: this.description.current.value,
      paymentDate: this.paymentDate.current.value,
    };

    this.props.onAddPayment(newPayment);
    console.log(this.props.paymentObj.transactionId + " from add method");

    let courseId = this.props.match.params.courseId;
    let courseName = this.props.match.params.courseName;
    let transactionId = this.props.paymentObj.transactionId;
    const loggedUserObject = JSON.parse(localStorage.getItem("loggedUser"));
    const loggedUsername = loggedUserObject.username;
    const loggedUserId = loggedUserObject.studentId;

    axios.patch(
      `http://localhost:8080/api/educationsystem/course/update-payment?courseId=${courseId}&transactionId=${transactionId}`
    );

    axios.patch(
      `http://localhost:8080/api/educationsystem/course/update-students?courseId=${courseId}&userName=${loggedUsername}`
    );
    axios.patch(
      `http://localhost:8080/api/educationsystem/update-student-course?studentId=${loggedUserId}&courseName=${courseName}`
    );
  }
  setValidityCardno() {
    alert("Card number cannot be empty and should contain 9 digits!!");
  }
  setValidityCardType() {
    alert("Card type cannot be empty and should contain alphabets only!!");
  }
  setValidityBname() {
    alert("Bank Name cannot be empty and should contain alphabets only!!");
  }
  setValidityAmount() {
    alert("Amount cannot be empty and should contain numbers!!");
  }
  setValidityDescription() {
    alert("Description cannot be empty and should contain alphabets only!!");
  }
  setValidityDate() {
    alert(
      "Date cannot be empty and please enter the date in the mentioned format!!"
    );
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <img src={paymentbg} className="bg" alt="payment background" />
            </div>
            <div className="col">
              <div className="div-avatar">
                <img src={payylogo} class="avatar" alt="avatar" />
              </div>
              <div className="div-title" style={{ textAlign: "center" }}>
                Make Payment!
              </div>

              <h5 style={{ textAlign: "center" }}>Please take a screenshot!</h5>

              <hr></hr>
              <div className="form-container">
                <form className="row g-3" onSubmit={this.add.bind(this)}>
                  <div className="col-md-12">
                    <div className="form-group has-cno">
                      <input
                        type="number"
                        ref={this.cardNumber}
                        name="cardNumber"
                        placeholder="Enter Card Number"
                        className="form-control"
                        pattern="[0-9]{9}"
                        id="validationServer02"
                        required
                        onInvalid={this.setValidityCardno.bind(this)}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group has-ctype">
                      <input
                        type="text"
                        ref={this.cardType}
                        name="cardType"
                        placeholder="Enter Card Type"
                        className="form-control"
                        pattern="[a-zA-Z]+"
                        id="validationServer03"
                        required
                        onInvalid={this.setValidityCardType.bind(this)}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group has-bname">
                      <select
                        id="bankName"
                        ref={this.bankName}
                        name="bankName"
                        className="form-control"
                        required
                        onInvalid={this.setValidityBname.bind(this)}
                      >
                        <option value="null" disabled selected>
                          Select a Bank Name
                        </option>
                        <option value="Axis">Axis Bank</option>
                        <option value="HDFC">HDFC Bank</option>
                        <option value="ICICI">ICICI Bank</option>
                        <option value="Citi">Citi Bank</option>
                        <option value="Saraswat">Saraswat Bank</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group has-amt">
                      <input
                        type="number"
                        ref={this.amount}
                        name="amount"
                        placeholder="Enter Amount"
                        className="form-control"
                        id="validationServer04"
                        required
                        onInvalid={this.setValidityAmount.bind(this)}
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group has-des">
                      <input
                        type="text"
                        ref={this.description}
                        name="description"
                        placeholder="Provide Description"
                        className="form-control"
                        id="validationServer06"
                        required
                        onInvalid={this.setValidityDescription.bind(this)}
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group has-date">
                      <input
                        type="text"
                        ref={this.paymentDate}
                        pattern="^(1[0-2]|0[1-9])/(3[01]|[12][0-9]|0[1-9])/[0-9]{4}$"
                        name="paymentDate"
                        placeholder="Enter Date in mm/dd/yyyy format"
                        className="form-control"
                        id="validationServer07"
                        required
                        onInvalid={this.setValidityDate.bind(this)}
                      ></input>
                    </div>
                  </div>
                  <div className="col">
                    <div className="div-btn">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block rounded-pill"
                      >
                        Add Payment
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <hr></hr>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.paymentObj.transactionId, "From addpayment component");
  return {
    paymentObj: state.paymentObj,
    returnedMessage: state.returnedMessage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddPayment: (payment) => {
      dispatch(actionCreators.addPayment(payment));
    },
    clearState: () => {
      dispatch(actionCreators.clearState());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddPayment));
