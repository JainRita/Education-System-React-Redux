import axios from "axios";

export const CLEAR_STATE = "CLEAR_STATE";
export const REQUEST_REGISTRATION = "REQUEST_REGISTRATION";
export const SHOW_REGISTRATION_REQUEST = "SHOW_REGISTRATION_REQUEST";
export const VIEW_ALL_FEEDBACK = "VIEW_ALL_FEEDBACK";
export const ADD_COURSE = "ADD_COURSE";
export const GET_ALL_COURSES = "GET_ALL_COURSES";
export const DELETE_COURSE = "DELETE_COURSE";
export const GET_ALL_STUDENT_DETAILS = "GET_ALL_STUDENT_DETAILS";
export const GET_SINGLE_STUDENT_DETAILS = "GET_SINGLE_STUDENT_DETAILS";
export const GET_ENROLLED_COURES_BY_STUDENT = "GET_ENROLLED_COURES_BY_STUDENT";
export const ADD_TRAINER = "ADD_TRAINER";
export const GET_ALL_TRAINER = "GET_ALL_TRAINER";
export const DELETE_TRAINER = "DELETE_TRAINER";
export const UPDATE_TRAINER = "UPDATE_TRAINER";
export const APPROVE_STUDENT_REGISTRATION = "APPROVE_STUDENT_REGISTRATION";
export const GET_ALL_TRAINERS_FOR_STUDENT = "GET_ALL_TRAINERS_FOR_STUDENT";
export const UPDATE_COURSE_FOR_TRAINERS = "UPDATE_COURSE_FOR_TRAINERS";

// Messages
export const ADD_MESSAGE = "ADD_MESSAGE";
export const GET_ALL_MESSAGES = "GET_ALL_MESSAGES";
export const GET_ALL_PROGRESSES = "GET_ALL_PROGRESSES";
export const CLEAR_MESSAGE = "CLEAR_MESSAGE";

// Payment

export const ADD_PAYMENT = "ADD_PAYMENT";
export const GET_ALL_PAYMENT = "GET_ALL_PAYMENT";

// Material

export const ADD_MATERIAL = "ADD_MATERIAL";
export const GET_ALL_MATERIAL = "GET_ALL_MATERIAL";
export const DELETE_MATERIAL = "DELETE_MATERIAL";
export const GET_ALL_STUDY_MATERIAL_FOR_STUDENT =
  "GET_ALL_STUDY_MATERIAL_FOR_STUDENT";

// Question

export const ADD_QUESTION = "ADD_QUESTION";
export const UPDATE_QUESTION = "UPDATE_QUESTION";
export const GET_ALL_QUESTIONS = "GET_ALL_QUESTIONS";
export const GET_QUESTION_BY_ID = "GET_QUESTION_BY_ID";
export const DELETE_QUESTION = "DELETE_QUESTION";

const BASE_URL = "http://localhost:8080/api/educationsystem/";

export const requestRegistration = (student) => {
  return (dispatch) => {
    axios
      .post(
        "http://localhost:8080/api/educationsystem/request-registration",
        student
      )
      .then((response) => {
        dispatch(studentRegistration(response.data));
      });
  };
};

const studentRegistration = (data) => {
  return {
    type: REQUEST_REGISTRATION,
    payload: data,
  };
};

export const showRegistrationRequest = () => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8080/api/educationsystem/get-all-students`)
      .then((response) => {
        const student = response.data;
        dispatch(getAllRegistrationRequest(student));
      });
  };
};

const getAllRegistrationRequest = (data) => {
  return {
    type: SHOW_REGISTRATION_REQUEST,
    payload: data,
  };
};

export const getAllStudents = () => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8080/api/educationsystem/view-all-students`)
      .then((response) => {
        const students = response.data;

        dispatch(getAllStudentDetails(students));
      });
  };
};

const getAllStudentDetails = (data) => {
  return {
    type: GET_ALL_STUDENT_DETAILS,
    payload: data,
  };
};

export const getSingleStudentDetails = (id) => {
  return (dispatch) => {
    axios
      .get(
        `http://localhost:8080/api/educationsystem/view-single-validated-student/${id}`
      )
      .then((response) => {
        const students = response.data;

        dispatch(getSingleStudent(students));
      });
  };
};

const getSingleStudent = (data) => {
  return {
    type: GET_SINGLE_STUDENT_DETAILS,
    payload: data,
  };
};

export const getAllEnrolledCourses = (id) => {
  return (dispatch) => {
    axios
      .get(
        `http://localhost:8080/api/educationsystem/get-courses-enrolled/${id}`
      )
      .then((response) => {
        const courses = response.data;

        dispatch(getCourses(courses));
      });
  };
};

const getCourses = (data) => {
  return {
    type: GET_ENROLLED_COURES_BY_STUDENT,
    payload: data,
  };
};

export const showAllFeedback = () => {
  return (dispatch) => {
    axios
      .get(
        `http://localhost:8080/api/educationsystem/feedback/view-all-feedback`
      )
      .then((response) => {
        const feedbacks = response.data;

        dispatch(getAllfeedback(feedbacks));
      });
  };
};

const getAllfeedback = (data) => {
  return {
    type: VIEW_ALL_FEEDBACK,
    payload: data,
  };
};

export const addCourse = (course) => {
  return (dispatch) => {
    axios
      .post(
        "http://localhost:8080/api/educationsystem/course/add-course",
        course
      )
      .then((res) => {
        dispatch(addCourseAction(res.data));

        let completedHours = 1;
        var courseId = res.data.courseId;
        axios
          .post(
            `http://localhost:8080/api/educationsystem/progress/add-progress?completedHours=${completedHours}`
          )
          .then((response) => {
            let progressId = response.data.progressId;
            let progressObj = {
              courseId: courseId,
              progressId: progressId,
            };
            localStorage.setItem("progress", JSON.stringify(progressObj));
            axios.patch(
              `http://localhost:8080/api/educationsystem/course/update-progress?courseId=${courseId}&progressId=${progressId}`
            );
          });
      });
  };
};

const addCourseAction = (data) => {
  return {
    type: ADD_COURSE,
    payload: data,
  };
};

const getAllCourseAction = (data) => {
  return {
    type: GET_ALL_COURSES,

    payload: data,
  };
};

export const getAllCourses = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:8080/api/educationsystem/course/view-all-courses")

      .then((response) => {
        dispatch(getAllCourseAction(response.data));
      });
  };
};

const deleteCourseAction = (data) => {
  return {
    type: DELETE_COURSE,

    payload: data,
  };
};

export const deleteCourse = (courseId) => {
  return (dispatch) => {
    axios
      .delete(
        "http://localhost:8080/api/educationsystem/course/delete-course/" +
          courseId
      )

      .then((response) => {
        dispatch(deleteCourseAction(response.data));
      });
  };
};
const addTrainerAction = (data) => {
  return {
    type: ADD_TRAINER,
    data,
  };
};

export const approveStudentRequest = (studentId) => {
  return (dispatch) => {
    axios
      .patch(
        `http://localhost:8080/api/educationsystem/approve-student-request/${studentId}`
      )

      .then((response) => {
        dispatch(approveRequest(response.data));
      });
  };
};
const approveRequest = (data) => {
  return {
    type: APPROVE_STUDENT_REGISTRATION,
    payload: data,
  };
};

export const addTrainer = (trainer) => {
  return (dispatch) => {
    axios
      .post(
        "http://localhost:8080/api/educationsystem/trainer/add-trainer",
        trainer
      )
      .then((response) => {
        dispatch(addTrainerAction(response.data));
      });
  };
};

const getAllTrainerAction = (data) => {
  return {
    type: GET_ALL_TRAINER,

    payload: data,
  };
};

export const getAllTrainers = () => {
  return (dispatch) => {
    axios
      .get(
        "http://localhost:8080/api/educationsystem/trainer/view-all-trainers"
      )

      .then((response) => {
        dispatch(getAllTrainerAction(response.data));
      });
  };
};

const getAllTrainersForStudentAction = (data) => {
  return {
    type: GET_ALL_TRAINERS_FOR_STUDENT,

    payload: data,
  };
};

export const getAllTrainersForStudent = (courseId) => {
  return (dispatch) => {
    axios
      .get(
        "http://localhost:8080/api/educationsystem/course/view-trainers/" +
          courseId
      )

      .then((response) => {
        dispatch(getAllTrainersForStudentAction(response.data));
      });
  };
};

const getAllStudyMaterialForTrainerAction = (data) => {
  return {
    type: GET_ALL_STUDY_MATERIAL_FOR_STUDENT,

    payload: data,
  };
};

export const getAllStudyMaterialForTrainer = (trainerId) => {
  return (dispatch) => {
    axios
      .get(
        "http://localhost:8080/api/educationsystem/trainer/view-study-material/" +
          trainerId
      )

      .then((response) => {
        dispatch(getAllStudyMaterialForTrainerAction(response.data));
      });
  };
};

const deleteTrainerAction = (data) => {
  return {
    type: DELETE_TRAINER,

    payload: data,
  };
};

export const deleteTrainer = (trainerId) => {
  return (dispatch) => {
    axios
      .delete(
        "http://localhost:8080/api/educationsystem/trainer/delete-trainer/" +
          trainerId
      )

      .then((response) => {
        dispatch(deleteTrainerAction(response.data));
      });
  };
};

export const clearState = () => {
  return (dispatch) => {
    dispatch(clearStateAction());
  };
};

const clearStateAction = (data) => {
  return {
    type: CLEAR_STATE,

    data,
  };
};

// Message actions

export const addMessage = (message) => {
  return (dispatch) => {
    axios
      .post(
        "http://localhost:8080/educationsystem/message/add-message",
        message
      )
      .then((res) => {
        dispatch(addMsgAction(res.data));
      });
  };
};

const addMsgAction = (data) => {
  return {
    type: ADD_MESSAGE,
    data,
  };
};

export const getAllMessages = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:8080/educationsystem/message/view-all-messages")

      .then((response) => {
        dispatch(getAllMsgAction(response.data));
      });
  };
};

const getAllMsgAction = (data) => {
  return {
    type: GET_ALL_MESSAGES,

    payload: data,
  };
};

export const getAllProgresses = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:8080/educationsystem/progress/view-all-progresses")

      .then((response) => {
        dispatch(getAllPrgAction(response.data));
      });
  };
};

const getAllPrgAction = (data) => {
  return {
    type: GET_ALL_PROGRESSES,

    payload: data,
  };
};

// Payment

const getAllPaymentAction = (data) => {
  return {
    type: GET_ALL_PAYMENT,
    payload: data,
  };
};
export const getAllPayment = () => {
  return (dispatch) => {
    axios.get(BASE_URL + "view-Payment/").then((response) => {
      const payment = response.data;
      dispatch(getAllPaymentAction(payment));
    });
  };
};

const addPaymentAction = (data) => {
  return {
    type: ADD_PAYMENT,
    data,
  };
};
export const addPayment = (newPayment) => {
  return (dispatch) => {
    axios.post(BASE_URL + "add-Payment/", newPayment).then((response) => {
      alert(`Payment Sucessfully added!`);

      dispatch(addPaymentAction(response.data));
    });
  };
};

// Material
const getAllMaterialAction = (data) => {
  return {
    type: GET_ALL_MATERIAL,
    payload: data,
  };
};
export const getAllMaterial = () => {
  return (dispatch) => {
    axios.get(BASE_URL + "view-Studymaterial/").then((response) => {
      const material = response.data;
      dispatch(getAllMaterialAction(material));
    });
  };
};

const addMaterialAction = (data) => {
  return {
    type: ADD_MATERIAL,
    data,
  };
};
export const addMaterial = (newMaterial) => {
  return (dispatch) => {
    axios
      .post(BASE_URL + "add-Studymaterial/", newMaterial)
      .then((response) => {
        alert("Study Material Sucessfully added");

        dispatch(addMaterialAction(response.data));
      })
      .catch((error) => {});
  };
};

const deleteMaterialAction = (data) => {
  return {
    type: DELETE_MATERIAL,
    payload: data,
  };
};
export const deleteMaterial = (matId) => {
  return (dispatch) => {
    axios
      .delete(BASE_URL + "remove-Studymaterial/" + matId)
      .then((response) => {
        dispatch(deleteMaterialAction(response.data));
      })
      .catch((error) => {});
  };
};

// Question

const getAllQuestionAction = (data) => {
  return {
    type: GET_ALL_QUESTIONS,

    payload: data,
  };
};

export const getAllQuestions = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:8080/api/educationsystem/question/getAll")

      .then((response) => {
        dispatch(getAllQuestionAction(response.data));
      });
  };
};

const addQuesAction = (data) => {
  return {
    type: ADD_QUESTION,
    data,
  };
};

export const addQuestion = (question) => {
  return (dispatch) => {
    axios
      .post("http://localhost:8080/api/educationsystem/question/add", question)
      .then((res) => {
        dispatch(addQuesAction(res.data));
      });
  };
};

const deleteQuestionAction = (data) => {
  return {
    type: DELETE_QUESTION,

    payload: data,
  };
};

export const deleteQuestion = (questionId) => {
  return (dispatch) => {
    axios
      .delete(
        "http://localhost:8080/api/educationsystem/question/delete/" +
          questionId
      )

      .then((response) => {
        dispatch(deleteQuestionAction(response.data));
      });
  };
};

const updateQuesAction = (data) => {
  return {
    type: UPDATE_QUESTION,
    data,
  };
};

export const updateQuestion = (updatedQuesDetails) => {
  return (dispatch) => {
    axios
      .put(
        "http://localhost:8080/api/educationsystem/question/update",
        updatedQuesDetails
      )
      .then((res) => {
        dispatch(updateQuesAction(res.data));
      });
  };
};

const getQuesByIdAction = (data) => {
  return {
    type: GET_QUESTION_BY_ID,
    payload: data,
  };
};

//search by names function
export const getQuestionById = (questionId) => {
  return (dispatch) => {
    let URL =
      `http://localhost:8080/api/educationsystem/question/getQuestion/` +
      questionId;
    axios.get(URL).then((response) => {
      dispatch(getQuesByIdAction(response.data));
    });
  };
};

const updateTrainerAction = (data) => {
  return {
    type: UPDATE_TRAINER,
    data,
  };
};

export const updateTrainer = (trainerId, content) => {
  return (dispatch) => {
    axios
      .patch(
        `http://localhost:8080/api/educationsystem/trainer/update-study-material?trainerId=${trainerId}&content=${content}`
      )
      .then((response) => {
        dispatch(updateTrainerAction(response.data));
      });
  };
};

const updateCourseForTrainersAction = (data) => {
  return {
    type: UPDATE_COURSE_FOR_TRAINERS,
    data,
  };
};

export const updateCourseForTrainers = (courseId, firstName) => {
  return (dispatch) => {
    axios
      .patch(
        `http://localhost:8080/api/educationsystem/course/update-trainers?courseId=${courseId}&firstName=${firstName}`
      )
      .then((response) => {
        dispatch(updateCourseForTrainersAction(response.data));
      });
  };
};
