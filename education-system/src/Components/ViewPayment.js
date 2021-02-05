import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actionCreated from "../actions/action";
import "../css/payment.css";
import { NavBarAdmin } from "./NavBarHome";

class ViewPayment extends Component {
  componentDidMount() {
    this.props.onGetPayment();
  }

  componentWillMount() {
    if (!localStorage.getItem("loggedAdmin")) {
      this.props.history.replace("/admin-login");
    }
  }

  render() {
    let paymentList = this.props.paymentList.map((payment, index) => {
      return (
        <tr key={index}>
          <th>{payment.transactionId}</th>
          <td>{payment.cardNumber}</td>
          <td>{payment.cardType}</td>
          <td>{payment.bankName}</td>
          <td>{payment.amount}</td>
          <td>{payment.description}</td>
          <td>{payment.paymentDate}</td>
          {/* <td>
                    <button onClick={this.delete.bind(this,trainee.id)} className="btn btn-danger">DELETE</button>
                </td> */}
        </tr>
      );
    });
    return (
      <div>
        <NavBarAdmin />
        <div className="trn-table-div" style={{ marginTop: "80px" }}>
          <h2 style={{ textAlign: "center" }}>{this.props.returnedMessage}</h2>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Transaction Id</th>
                <th scope="col">Card Number</th>
                <th scope="col">Card Type</th>
                <th scope="col">Bank Name</th>
                <th scope="col">Amount</th>
                <th scope="col">Description</th>
                <th scope="col">Payment Date</th>
                {/* <th>Action</th> */}
              </tr>
            </thead>
            <tbody>{paymentList}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    paymentList: state.paymentList,
    returnedMessage: state.returnedMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetPayment: () => {
      return dispatch(actionCreated.getAllPayment());
    },
    clearState: () => {
      return dispatch(actionCreated.clearState());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ViewPayment));
