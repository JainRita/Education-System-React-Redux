import * as actionCreators from "../actions/action";

const initialState = {
  returnedMessage: "",
  studentObj: "",
  paymentObj: "",
  courseObj: "",
  studentList: [],
  feedbackList: [],
  courseList: [],
  studentDetailsList: [],
  trainerList: [],
  registrationStatus: [],
  messageList: [],

  progressList: [],

  messageObj: {
    date: "",
    message: "",
  },

  paymentList: [],
  materialList: [],
  questionList: [],
  questionObj: {
    questionId: "",
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correctAnswer: "",
  },
  registrationSuccess: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionCreators.REQUEST_REGISTRATION:
      let message = action.payload;

      return {
        registrationStatus: message,
      };

    case actionCreators.SHOW_REGISTRATION_REQUEST:
      let students = action.payload;

      return {
        studentList: students,
      };

    case actionCreators.GET_ALL_STUDENT_DETAILS:
      let studentList = action.payload;

      return {
        studentDetailsList: studentList,
      };

    case actionCreators.GET_SINGLE_STUDENT_DETAILS:
      let student = action.payload;

      return {
        studentObj: student,
      };

    case actionCreators.GET_ENROLLED_COURES_BY_STUDENT:
      let courses = action.payload;

      return {
        courseList: courses,
      };

    case actionCreators.VIEW_ALL_FEEDBACK:
      let feedbacks = action.payload;

      return {
        feedbackList: feedbacks,
      };

    case actionCreators.ADD_COURSE:
      let courseData = action.payload;

      return {
        returnedMessage: "Course Added Successfully!",
        courseObj: courseData,
      };

    case actionCreators.GET_ALL_COURSES:
      let listOfCourses = action.payload;

      return {
        returnedMessage: "Course Details!",

        courseList: listOfCourses,
      };

    case actionCreators.DELETE_COURSE:
      let listAfterDeletionCourse = action.payload;

      return {
        returnedMessage: "Course Deleted",

        trainerList: listAfterDeletionCourse,
      };

    case actionCreators.APPROVE_STUDENT_REGISTRATION:
      let listAfterApproveRequest = action.payload;

      return {
        returnedMessage: "Approved request sucecssful",

        studentList: listAfterApproveRequest,
      };

    case actionCreators.ADD_TRAINER:
      return {
        returnedMessage: "Trainer Added Successfully!",
      };

    case actionCreators.GET_ALL_TRAINER:
      let listOfTrainers = action.payload;

      return {
        returnedMessage: "Trainer Details!",

        trainerList: listOfTrainers,
      };
    case actionCreators.GET_ALL_TRAINERS_FOR_STUDENT:
      let listOfTrainersForStudent = action.payload;

      return {
        returnedMessage: "Trainer Details!",

        trainerList: listOfTrainersForStudent,
      };

    case actionCreators.UPDATE_TRAINER:
      return {
        returnedMessage: "Trainer Updated !",
      };

    case actionCreators.UPDATE_COURSE_FOR_TRAINERS:
      return {
        returnedMessage: "Course Updated !",
      };
    case actionCreators.GET_ALL_STUDY_MATERIAL_FOR_STUDENT:
      let listOfStudyMaterialForStudent = action.payload;

      return {
        returnedMessage: "Study Material Details!",

        materialList: listOfStudyMaterialForStudent,
      };

    case actionCreators.DELETE_TRAINER:
      let listAfterDeletionTrainer = action.payload;

      return {
        returnedMessage: "Trainer Deleted",

        trainerList: listAfterDeletionTrainer,
      };

    case actionCreators.CLEAR_STATE:
      return {
        returnedMessage: "",
        studentObj: "",
        paymentObj: "",
        studentList: [],
        feedbackList: [],
        courseList: [],
        studentDetailsList: [],
        trainerList: [],
        registrationStatus: [],
        messageList: [],

        progressList: [],

        messageObj: {
          date: "",
          message: "",
        },

        paymentList: [],
        materialList: [],
        questionList: [],
        questionObj: {
          questionId: "",
          question: "",
          option1: "",
          option2: "",
          option3: "",
          option4: "",
          correctAnswer: "",
        },
        registrationSuccess: "",
      };

    case actionCreators.ADD_MESSAGE:
      let listAfterAddition = action.data.messages;

      return {
        returnedMessage: "Message Added",

        messageList: listAfterAddition,
      };

    case actionCreators.GET_ALL_MESSAGES:
      let listOfMessages = action.payload;

      return {
        returnedMessage: "Message Details!",

        messageList: listOfMessages,
      };

    case actionCreators.GET_ALL_PROGRESSES:
      let listOfProgresses = action.payload;

      return {
        returnedMessage: "Progress Details!",

        progressList: listOfProgresses,
      };

    case actionCreators.GET_ALL_PAYMENT:
      let listOfPayment = action.payload;

      return {
        returnedMessage: "Payment Details!!",
        paymentList: listOfPayment,
      };
    case actionCreators.ADD_PAYMENT:
      let AfterAdditionPayment = action.data;
      return {
        returnedMessage: "Payment added!!",
        paymentObj: AfterAdditionPayment,
      };
    case actionCreators.GET_ALL_MATERIAL:
      let listOfMaterial = action.payload;

      return {
        returnedMessage: "Study Material Details!!",
        materialList: listOfMaterial,
      };

    case actionCreators.DELETE_MATERIAL:
      let listOfAfterDeletionOfMaterial = action.payload;

      return {
        returnedMessage: "study material deleted",
        materialList: listOfAfterDeletionOfMaterial,
      };
    case actionCreators.ADD_MATERIAL:
      let listAfterAdditionMaterial = action.data.materialList;

      return {
        returnedMessage: "Material added!!",
        materialList: listAfterAdditionMaterial,
      };
    case actionCreators.GET_ALL_QUESTIONS:
      let listOfQuestions = action.payload;

      return {
        returnedMessage: "Course Details!",

        questionList: listOfQuestions,
      };

    case actionCreators.DELETE_QUESTION:
      let listAfterDeletion = action.payload;

      return {
        returnedMessage: "Question Deleted",

        questionList: listAfterDeletion,
      };

    case actionCreators.ADD_QUESTION:
      let listAfterAdditionQuestion = action.data.questions;

      return {
        returnedMessage: "Question Added",
        questionList: listAfterAdditionQuestion,
      };

    case actionCreators.UPDATE_QUESTION:
      let listAfterUpdationQuestion = action.data.questions;

      return {
        returnedMessage: "Question Updated",
        questionList: listAfterUpdationQuestion,
      };

    case actionCreators.GET_QUESTION_BY_ID:
      let listOfQuestionById = action.payload;

      return {
        questionObj: listOfQuestionById,
      };

    default:
      return state;
  }
};

export default reducer;
