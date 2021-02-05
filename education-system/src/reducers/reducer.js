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
  console.log("here is where");
  switch (action.type) {
    case actionCreators.REQUEST_REGISTRATION:
      let message = action.payload;
      console.log(message, "From reducer.js");
      return {
        registrationStatus: message,
      };

    case actionCreators.SHOW_REGISTRATION_REQUEST:
      let students = action.payload;
      console.log(students, "request");
      return {
        studentList: students,
      };

    case actionCreators.GET_ALL_STUDENT_DETAILS:
      let studentList = action.payload;
      console.log(studentList + "from reducer");
      return {
        studentDetailsList: studentList,
      };

    case actionCreators.GET_SINGLE_STUDENT_DETAILS:
      let student = action.payload;
      console.log(student + "from reducer");
      return {
        studentObj: student,
      };

    case actionCreators.GET_ENROLLED_COURES_BY_STUDENT:
      let courses = action.payload;
      console.log(courses + "from reducer");
      return {
        courseList: courses,
      };

    case actionCreators.VIEW_ALL_FEEDBACK:
      let feedbacks = action.payload;
      console.log(feedbacks, "request");
      return {
        feedbackList: feedbacks,
      };

    case actionCreators.ADD_COURSE:
      // let messageAfterAdditionCourse = action.data.message;
      let courseData = action.payload;

      console.log("Adding Course...");
      console.log("from course added....");
      console.log(courseData);

      // console.log(messageAfterAdditionCourse);

      return {
        returnedMessage: "Course Added Successfully!",
        courseObj: courseData,
      };

    case actionCreators.GET_ALL_COURSES:
      let listOfCourses = action.payload;

      console.log("List of Courses");

      console.log(listOfCourses);

      return {
        returnedMessage: "Course Details!",

        courseList: listOfCourses,
      };

    case actionCreators.DELETE_COURSE:
      let listAfterDeletionCourse = action.payload;

      console.log("Deleting Course");

      console.log(listAfterDeletionCourse);

      // console.log(messageAfterDeletion)

      return {
        returnedMessage: "Course Deleted",

        trainerList: listAfterDeletionCourse,
      };

    case actionCreators.APPROVE_STUDENT_REGISTRATION:
      let listAfterApproveRequest = action.payload;

      console.log("Approving Course");

      console.log(listAfterApproveRequest);

      // console.log(messageAfterDeletion)

      return {
        returnedMessage: "Approved request sucecssful",

        studentList: listAfterApproveRequest,
      };

    case actionCreators.ADD_TRAINER:
      console.log("Adding Trainer...");

      return {
        returnedMessage: "Trainer Added Successfully!",
      };

    case actionCreators.GET_ALL_TRAINER:
      let listOfTrainers = action.payload;

      console.log("List of Trainers");

      console.log(listOfTrainers);

      return {
        returnedMessage: "Trainer Details!",

        trainerList: listOfTrainers,
      };
    case actionCreators.GET_ALL_TRAINERS_FOR_STUDENT:
      let listOfTrainersForStudent = action.payload;

      console.log("List of Trainers");

      //console.log(listOfTrainers);

      return {
        returnedMessage: "Trainer Details!",

        trainerList: listOfTrainersForStudent,
      };

    case actionCreators.UPDATE_TRAINER:
      console.log("Updating Trainer");

      return {
        returnedMessage: "Trainer Updated !",
      };

    case actionCreators.UPDATE_COURSE_FOR_TRAINERS:
      console.log("Updating Course");

      return {
        returnedMessage: "Course Updated !",
      };
    case actionCreators.GET_ALL_STUDY_MATERIAL_FOR_STUDENT:
      let listOfStudyMaterialForStudent = action.payload;

      console.log("List of Study Material");

      //console.log(listOfTrainers);

      return {
        returnedMessage: "Study Material Details!",

        materialList: listOfStudyMaterialForStudent,
      };

    case actionCreators.DELETE_TRAINER:
      let listAfterDeletionTrainer = action.payload;

      console.log("Deleting Trainer");

      console.log(listAfterDeletionTrainer);

      // console.log(messageAfterDeletion)

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
      let messageAfterAddition = action.data.message;

      let listAfterAddition = action.data.messages;

      console.log("Addition of message");

      console.log(listAfterAddition);

      console.log(messageAfterAddition);

      return {
        returnedMessage: "Message Added",

        messageList: listAfterAddition,
      };

    case actionCreators.GET_ALL_MESSAGES:
      let listOfMessages = action.payload;

      console.log("List of Messages");

      console.log(listOfMessages);

      return {
        returnedMessage: "Message Details!",

        messageList: listOfMessages,
      };

    case actionCreators.GET_ALL_PROGRESSES:
      let listOfProgresses = action.payload;

      console.log("List of Progresses");

      console.log(listOfProgresses);

      return {
        returnedMessage: "Progress Details!",

        progressList: listOfProgresses,
      };
    // case actionCreators.CLEAR_STATE:
    //   return {
    //     returnedMessage: "",

    //     messageList: [],

    //     progressList: [],
    //   };

    case actionCreators.GET_ALL_PAYMENT:
      let listOfPayment = action.payload;

      console.log("List of Payment");
      console.log(listOfPayment);

      return {
        returnedMessage: "Payment Details!!",
        paymentList: listOfPayment,
      };
    case actionCreators.ADD_PAYMENT:
      let AfterAdditionPayment = action.data;
      console.log("Addition of Payment");
      console.log(AfterAdditionPayment);
      //console.log(messageAfterAddition);
      return {
        returnedMessage: "Payment added!!",
        paymentObj: AfterAdditionPayment,
      };
    case actionCreators.GET_ALL_MATERIAL:
      let listOfMaterial = action.payload;
      // let resMessage=action.data.resMessage
      // console.log(action.data)
      console.log("List of Study Materials");
      console.log(listOfMaterial);
      // if(listOfTrainees.length==0){
      //     resMessage='No Data Found'
      // }
      return {
        returnedMessage: "Study Material Details!!",
        materialList: listOfMaterial,
      };

    case actionCreators.DELETE_MATERIAL:
      let listOfAfterDeletionOfMaterial = action.payload;
      console.log("deleting study material");
      console.log(listOfAfterDeletionOfMaterial);
      return {
        returnedMessage: "study material deleted",
        materialList: listOfAfterDeletionOfMaterial,
      };
    case actionCreators.ADD_MATERIAL:
      let messageAfterAdditionMaterial = action.data.message;
      let listAfterAdditionMaterial = action.data.materialList;
      console.log("Addition of Payment");
      console.log(listAfterAddition);
      console.log(messageAfterAdditionMaterial);
      return {
        returnedMessage: "Material added!!",
        materialList: listAfterAdditionMaterial,
      };
    // case actionCreators.CLEAR_STATE:
    //   return {
    //     returnedMessage: "",
    //     materialList: [],
    //   };

    case actionCreators.GET_ALL_QUESTIONS:
      let listOfQuestions = action.payload;

      console.log("List of Questions");

      console.log(listOfQuestions);

      return {
        returnedMessage: "Course Details!",

        questionList: listOfQuestions,
      };

    case actionCreators.DELETE_QUESTION:
      let listAfterDeletion = action.payload;

      console.log("Deleting Question");

      console.log(listAfterDeletion);

      // console.log(messageAfterDeletion)

      return {
        returnedMessage: "Question Deleted",

        questionList: listAfterDeletion,
      };

    case actionCreators.ADD_QUESTION:
      let messageAfterAdditionQuestion = action.data.message;
      let listAfterAdditionQuestion = action.data.questions;
      console.log("Addition of question");
      console.log(listAfterAdditionQuestion);
      console.log(messageAfterAdditionQuestion);
      return {
        returnedMessage: "Question Added",
        questionList: listAfterAdditionQuestion,
      };

    case actionCreators.UPDATE_QUESTION:
      let messageAfterUpdationQuestion = action.data.message;
      let listAfterUpdationQuestion = action.data.questions;
      console.log("Updating Question");
      console.log(listAfterUpdationQuestion);
      console.log(messageAfterUpdationQuestion);
      return {
        returnedMessage: "Question Updated",
        questionList: listAfterUpdationQuestion,
      };

    case actionCreators.GET_QUESTION_BY_ID:
      let listOfQuestionById = action.payload;
      console.log("List of Question by Id");
      console.log(listOfQuestionById);
      return {
        questionObj: listOfQuestionById,
      };

    // case actionCreators.CLEAR_STATE:
    //   return {
    //     returnedMessage: "",
    //     questionList: [],
    //   };

    default:
      return state;
  }
};

export default reducer;
