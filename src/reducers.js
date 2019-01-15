import { combineReducers } from 'redux';
import {
  ADD_STUDENT,
  UPDATE_STUDENT,
  DELETE_STUDENT,
  OPEN_STUDENT_FORM,
  CLOSE_STUDENT_FORM,
  OPEN_DELETION_CONFIRMATION,
  CLOSE_DELETION_CONFIRMATION,
} from './actions';
import studentFixture from './students.json';

const initialStudents = {
  lastId: studentFixture.length,
  items: studentFixture,
};

const students = (state = initialStudents, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        lastId: state.lastId + 1,
        items: [
          ...state.items,
          {
            id: state.lastId + 1,
            ...action.student,
          },
        ],
      };
    case UPDATE_STUDENT:
      return {
        ...state,
        items: state.items.map(
          student =>
            student.id === action.student.id ? action.student : student,
        ),
      };
    case DELETE_STUDENT:
      return {
        ...state,
        items: state.items.filter(student => student.id !== action.id),
      };
    default:
      return state;
  }
};

const initialStudentForm = {
  open: false,
};

const studentForm = (state = initialStudentForm, action) => {
  switch (action.type) {
    case OPEN_STUDENT_FORM:
      return {
        open: true,
        student: action.student,
      };
    case CLOSE_STUDENT_FORM:
      return {
        open: false,
      };
    default:
      return state;
  }
};

const initialDeletionConfirmation = {
  id: null,
};

const deletionConfirmation = (state = initialDeletionConfirmation, action) => {
  switch (action.type) {
    case OPEN_DELETION_CONFIRMATION:
      return {
        id: action.id,
      };
    case CLOSE_DELETION_CONFIRMATION:
      return {
        id: null,
      };
    default:
      return state;
  }
};

export default combineReducers({
  students,
  studentForm,
  deletionConfirmation,
});
