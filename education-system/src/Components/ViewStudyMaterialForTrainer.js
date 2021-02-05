import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreated from "../actions/action";
import "../css/ViewStudyMaterialForTrainer.css";

import axios from "axios";

class ViewStudyMaterialForTrainer extends Component {
  constructor(props) {
    super(props);
    console.log("veistudty contructor");
    let trainerId = this.props.match.params.trainerId;
    console.log(trainerId);
  }
  componentDidMount() {
    console.log("veistudty mount");
    let trainerId = this.props.match.params.trainerId;
    console.log(trainerId);
    this.props.onGetStudyMaterialForTrainer(trainerId);
  }

  update() {
    let progressId = 80;
    let completedHours = 5;
    let hours = completedHours + 5;
    axios.patch(
      `http://localhost:8080/api/educationsystem/progress/update-progress?progressId=${progressId}&completedHours=${hours}`
    );
  }
  render() {
    return (
      <div className="contentbg">
        <div class="container" style={{ padding: "30px" }}>
          <div class="row">
            {this.props.materialList ? (
              this.props.materialList.map((content, index) => (
                <div class="col">
                  <div
                    class="card border-info mb-3"
                    style={{ maxWidth: "18rem", textAlign: "center" }}
                  >
                    <div class="card-header">Content</div>
                    <div class="card-body text-info">
                      <h5 class="card-title">{content.content}</h5>
                      <a
                        class="card-link"
                        href="https://www.youtube.com/watch?v=lL2PXC1fmnQ"
                        onClick={this.update.bind(this)}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <h6>Select</h6>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1>Loading..</h1>
            )}
          </div>
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
    onGetStudyMaterialForTrainer: (trainerId) => {
      return dispatch(actionCreated.getAllStudyMaterialForTrainer(trainerId));
    },

    onDeleteTrainer: (trainerId) => {
      return dispatch(actionCreated.deleteTrainer(trainerId));
    },

    clearState: () => {
      return dispatch(actionCreated.clearState());
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewStudyMaterialForTrainer);
