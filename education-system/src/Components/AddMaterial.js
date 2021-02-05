import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import * as actionCreators from "../actions/action";
import "../css/study.css";
import studybg from "../images/studybg.png";
import matlogo from "../images/matlogo.jpg";
import logo from "../images/logoonly-removebg-preview.png";

class AddMaterial extends Component {
  constructor(props) {
    super(props);
    this.content = React.createRef();
    this.materialId = React.createRef();
  }
  componentDidMount() {
    this.props.clearState();
  }
  // componentWillMount() {
  //   if (!localStorage.getItem("loggedAdmin")) {
  //     this.props.history.replace("/admin-login");
  //   }
  // }
  componentDidUpdate() {
    let check = this.props.returnedMessage.split(" ");
    if (check[0] === "Successfully") {
      setTimeout(() => {
        this.props.history.push("/listOfMaterial");
      }, 2000);
    }
  }
  add(e) {
    e.preventDefault();
    let newMaterial = {
      content: this.content.current.value,
    };
    this.props.onAddMaterial(newMaterial);
  }
  setValidityMaterial() {
    alert("Please add the study material!!");
    console.log("Please add the study material!!");
  }

  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link id="logo" className="nav-link" to="">
                      <div style={{ marginBottom: "5px" }}>
                        <img id="logoimg" src={logo} alt="Logo" /> EDUCRATE
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/view-material">
                      View Materials
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <img src={studybg} className="bg" />
            </div>
            <div className="col">
              <div className="div-avatar">
                <img src={matlogo} className="avatar" />
              </div>
              <div className="div-title">Add Study Material!!</div>
              <hr></hr>
              <div className="form-container">
                <form className="row g-3" onSubmit={this.add.bind(this)}>
                  <div className="col-md-12">
                    <div className="form-group has-mat">
                      <input
                        type="text"
                        ref={this.content}
                        name="content"
                        placeholder="Provide Study Material"
                        className="form-control is-invalid"
                        id="validationServer01"
                        required
                        onInvalid={this.setValidityMaterial.bind(this)}
                      />
                      {/* <div className="invalid-tooltip">
                        Please enter alphabets!!
                      </div> */}
                    </div>
                  </div>
                  <div className="col">
                    <div className="div-btn">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block rounded-pill"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                  {/* <div className="col">
                    <div className={(this.props.returnedMessage === '') ? '' : "alert alert-danger"} role="alert">
                            <b>{this.props.returnedMessage}</b>
                        </div></div>
                     */}
                </form>
              </div>
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
    onAddMaterial: (material) => {
      dispatch(actionCreators.addMaterial(material));
    },
    clearState: () => {
      dispatch(actionCreators.clearState());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddMaterial));
