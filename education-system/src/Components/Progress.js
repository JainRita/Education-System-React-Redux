import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreated from "../actions/action";
import "../css/progress.css";
import progressarrow from "../images/38779-progress-arrow.gif";
import viewprogress from "../images/viewprogress.gif";
import elearning from "../images/elearning.svg";
import { NavBarStudent } from "../Components/NavBarHome";
import axios from "axios";

class Progress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progressList: [],
      progressObj: "",
      message: "",
      search: null,
    };
  }
  componentWillMount() {
    if (!localStorage.getItem("loggedUser")) {
      this.props.history.replace("/student-login");
    }
  }

  componentDidMount() {
    let courseId = this.props.match.params.courseId;
    this.props.onGetProgresses();
    axios
      .get(
        "http://localhost:8080/api/educationsystem/course/view-progress/" +
          courseId
      )
      .then((response) => {
        this.setState({
          progressObj: response.data,
        });
      });
  }

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };
  render() {
    let progress = this.state.progressObj.completedHours;
    console.log(progress + "Progress for CL");
    // if (!(this.state.search == null)) {
    return (
      <div>
        <div className="d-flex align-items-start">
          <img className="progress-prgs" src={progressarrow} alt="" />
          <img className="progress-bg" src={viewprogress} alt="" />
        </div>
        <hr className="progress-hr" />

        <div className="input-group mb-3 mx-auto py-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search....."
            onChange={(e) => this.searchSpace(e)}
          />
          <span className="input-group-text">
            <i className="fas fa-search"></i>
          </span>
        </div>

        <div className="list-group">
          {/* {this.props.progressList
            .filter((progress) =>
              progress.completedHours.toString().includes(this.state.search)
            )
            .map((progress, index) => { */}
          {/* return ( */}
          <div className="progress-card px-2">
            <div className="row">
              <div className="col-2">
                <img className="progress-card-img" src={elearning} alt="" />
              </div>
              <div className="col-10">
                <div className="row">
                  <div className="col-5">
                    <div className="progress-course">
                      <h6 className="progress-h6">Course</h6>
                      <h2 className="progress-h2">Progress</h2>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="progress-wrapper">
                      <div className="progress">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{
                            width: progress + "0%",
                          }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span className="progress-text">Challenges</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col"></div>
                  <div className="col">
                    <div className="star">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ); })} */}
        </div>
      </div>
    );
    // } else {
    //   return (
    //     <div>
    //       <NavBarStudent />
    //       <div className="d-flex align-items-start">
    //         <img className="progress-prgs" src={progressarrow} alt="" />
    //         <img className="progress-bg" src={viewprogress} alt="" />
    //       </div>
    //       <hr className="progress-hr" />

    //       <div className="input-group mb-3 mx-auto py-3">
    //         <input
    //           type="text"
    //           class="form-control"
    //           placeholder="Search....."
    //           onChange={(e) => this.searchSpace(e)}
    //         />
    //         <span className="input-group-text">
    //           <i className="fas fa-search"></i>
    //         </span>
    //       </div>

    //       <h2 className="progress-h2">Progress</h2>

    //       <div className="list-group">
    //         {this.props.progressList.map((progress, index) => {
    //           return (
    //             <div className="progress-card px-2" key={index}>
    //               <div className="row">
    //                 <div className="col-2">
    //                   <img
    //                     className="progress-card-img"
    //                     src={elearning}
    //                     alt=""
    //                   />
    //                 </div>
    //                 <div className="col-10">
    //                   <div className="row">
    //                     <div className="col-5">
    //                       <div className="progress-course">
    //                         <h6 className="progress-h6">Course</h6>
    //                         <h2 className="progress-h2">Web Development</h2>
    //                       </div>
    //                     </div>
    //                     <div className="col-7">
    //                       <div className="progress-wrapper">
    //                         <div className="progress">
    //                           <div
    //                             className="progress-bar bg-success"
    //                             role="progressbar"
    //                             style={{
    //                               width: progress.completedHours + "0%",
    //                             }}
    //                             aria-valuenow="25"
    //                             aria-valuemin="0"
    //                             aria-valuemax="100"
    //                           ></div>
    //                         </div>
    //                         <span className="progress-text">
    //                           {progress.completedHours}/10 Challenges
    //                         </span>
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className="row">
    //                     <div className="col">
    //                       <div className="info py-2">getting started</div>
    //                     </div>
    //                     <div className="col">
    //                       <div className="star">
    //                         <span className="fa fa-star checked"></span>
    //                         <span className="fa fa-star checked"></span>
    //                         <span className="fa fa-star checked"></span>
    //                         <span className="fa fa-star"></span>
    //                         <span className="fa fa-star"></span>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   );
    // }
  }
}

const mapStateToProps = (state) => {
  return {
    progressList: state.progressList,

    returnedMessage: state.returnedMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetProgresses: () => {
      return dispatch(actionCreated.getAllProgresses());
    },
    clearState: () => {
      return dispatch(actionCreated.clearState());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Progress);
