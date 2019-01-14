import {
  ADD_STUDENT,
  UPDATE_STUDENT,
  DELETE_STUDENT,
} from './actions';
import initialStudents from './students.json';

const students = (state = initialStudents, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return [
        ...state,
        action.student,
      ];
    case UPDATE_STUDENT:
      return state.map(
        student => student.id === action.student.id ? action.student : student,
      );
    case DELETE_STUDENT:
      return state.filter(student => student.id !== action.id);
    default:
      return state;
  }
};

export default students;
