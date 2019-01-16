import { combineReducers } from 'redux';

import deletionConfirmation from './deletionConfirmation';
import studentForm from './studentForm';
import students from './students';

export default combineReducers({
  deletionConfirmation,
  studentForm,
  students,
});
