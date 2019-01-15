import {
  OPEN_STUDENT_FORM,
  CLOSE_STUDENT_FORM,
} from '../actions';

const initialState = {
  open: false,
};

const studentForm = (state = initialState, action) => {
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

export default studentForm;
