import {
  ADD_STUDENT,
  UPDATE_STUDENT,
  DELETE_STUDENT,
} from '../actions';
import studentFixture from '../students.json';

const initialState = {
  lastId: studentFixture.length,
  items: studentFixture,
};

const students = (state = initialState, action) => {
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

export default students;
