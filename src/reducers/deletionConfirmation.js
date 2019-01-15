import {
  OPEN_DELETION_CONFIRMATION,
  CLOSE_DELETION_CONFIRMATION,
} from '../actions';

const initialState = {
  id: null,
};

const deletionConfirmation = (state = initialState, action) => {
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

export default deletionConfirmation;
