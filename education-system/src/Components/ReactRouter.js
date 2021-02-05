import React, { Component } from "react";
import RegistrationForm from "./RegistrationForm";
import HomePage from "./HomePage";
import StudentLogin from "./StudentLogin";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import ApproveRegistration from "./ApproveRegistration";
import AddMessage from "./AddMessage";
import StudentHome from "./StudentHome";
import AddFeedback from "./AddFeedback";
import ViewFeedback from "./ViewFeedback";
import AddCourse from "./AddCourse";
import AdminViewCourse from "./AdminViewCourse";
import StudentCourse from "./StudentCourse";
import StudentManageSection from "./StudentManageSection";
import ViewAllStudent from "./ViewAllStudent";
import ViewSingleStudent from "./ViewSingleStudent";
import ViewCoursesEnrolled from "./ViewCoursesEnrolled";
import AddTrainer from "./AddTrainer";
import AdminViewTrainer from "./AdminViewTrainers";
import StudentViewTrainer from "./StudentViewTrainers";
import ViewMessage from "./ViewMessage";
import Progress from "./Progress";
import AddPayment from "./AddPayment";
import ViewPayment from "./ViewPayment";
import AddMaterial from "./AddMaterial";
import ViewMaterial from "./ViewMaterial";
import AddQuiz from "./AddQuiz";
import AttemptQuiz from "./AttemptQuiz";
import Quiz from "./Quiz";
import QuizQuestion from "./QuizQuestion";
import ViewStudyMaterialForTrainer from "./ViewStudyMaterialForTrainer";
import UpdateTrainerForStudyMaterial from "./UpdateTrainerForStudyMaterial";
import UpdateCourseForTrainers from "./UpdateCourseForTrainers";
import UpdateStudentProfile from "./UpdateStudentProfile";

import { Route, Switch } from "react-router-dom";

class ReactRouter extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/student-login" component={StudentLogin} />
          <Route exact path="/registration" component={RegistrationForm} />
          <Route exact path="/admin-login" component={AdminLogin} />
          <Route exact path="/admin-home" component={AdminDashboard} />
          <Route
            exact
            path="/approve-registration"
            component={ApproveRegistration}
          />

          <Route exact path="/add-message" component={AddMessage} />
          <Route
            exact
            path="/manage-student"
            component={StudentManageSection}
          />

          <Route exact path="/student-home" component={StudentHome} />
          <Route exact path="/add-feedback" component={AddFeedback} />
          <Route exact path="/view-feedback" component={ViewFeedback} />

          <Route path="/courses"></Route>
          <Route exact path="/add-course" component={AddCourse} />
          <Route exact path="/admin-view-course" component={AdminViewCourse} />
          <Route exact path="/student-view-course" component={StudentCourse} />
          <Route
            exact
            path="/view-student-details"
            component={ViewAllStudent}
          />
          <Route
            exact
            path="/single-student-details"
            component={ViewSingleStudent}
          />

          <Route
            exact
            path="/view-enrolled-courses"
            component={ViewCoursesEnrolled}
          />

          <Route exact path="/add-trainer" component={AddTrainer} />
          <Route
            exact
            path="/admin-view-trainer/"
            component={AdminViewTrainer}
          />
          <Route
            exact
            path="/student-view-trainer/:courseId/"
            component={StudentViewTrainer}
          />

          <Route exact path="/view-message" component={ViewMessage} />
          <Route exact path="/view-progress/:courseId" component={Progress} />
          <Route
            exact
            path="/add-payment/:courseName/:courseId"
            component={AddPayment}
          />
          <Route exact path="/view-payment" component={ViewPayment} />
          <Route exact path="/add-material" component={AddMaterial} />
          <Route exact path="/view-material" component={ViewMaterial} />
          <Route exact path="/add-quiz" component={AddQuiz} />
          <Route exact path="/attempt-quiz" component={AttemptQuiz} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/quiz-question" component={QuizQuestion} />
          <Route
            exact
            path="/view-study-material-for-trainer/:trainerId/"
            component={ViewStudyMaterialForTrainer}
          />

          <Route
            exact
            path="/update-trainer-for-material"
            component={UpdateTrainerForStudyMaterial}
          />
          <Route
            exact
            path="/update-course-trainers"
            component={UpdateCourseForTrainers}
          />
          <Route
            exact
            path="/update-profile"
            component={UpdateStudentProfile}
          />
        </Switch>
      </div>
    );
  }
}

export default ReactRouter;
