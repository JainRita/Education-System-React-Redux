import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actionCreated from "../actions/action";

class ViewMaterial extends Component {
  componentDidMount() {
    this.props.onGetMaterial();
  }
  delete(matId) {
    this.props.onDeleteMaterial(matId);
  }
  componentWillMount() {
    if (!localStorage.getItem("loggedAdmin")) {
      this.props.history.replace("/admin-login");
    }
  }
  render() {
    let materialList = this.props.materialList.map((material, index) => {
      return (
        <tr key={index}>
          <th>{material.materialId}</th>
          <td>{material.content}</td>
          <td>
            <button
              onClick={this.delete.bind(this, material.materialId)}
              className="btn btn-danger"
            >
              DELETE
            </button>
          </td>
        </tr>
      );
    });
    return (
      <div>
        <div className="trn-table-div">
          <h2>{this.props.returnedMessage}</h2>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Study Material ID</th>
                <th scope="col">Study Material Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{materialList}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    materialList: state.materialList,
    returnedMessage: state.returnedMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetMaterial: () => {
      return dispatch(actionCreated.getAllMaterial());
    },
    onDeleteMaterial: (matId, newMaterialObject) => {
      return dispatch(actionCreated.deleteMaterial(matId, newMaterialObject));
    },
    clearState: () => {
      return dispatch(actionCreated.clearState());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ViewMaterial));
