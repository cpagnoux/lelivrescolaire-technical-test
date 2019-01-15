import { combineReducers } from 'redux';
import students from './students';
import studentForm from './studentForm';
import deletionConfirmation from './deletionConfirmation';

export default combineReducers({
  students,
  studentForm,
  deletionConfirmation,
});
