export const ADD_STUDENT = 'ADD_STUDENT';
export const UPDATE_STUDENT = 'UPDATE_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';
export const OPEN_STUDENT_FORM = 'OPEN_STUDENT_FORM';
export const CLOSE_STUDENT_FORM = 'CLOSE_STUDENT_FORM';
export const OPEN_DELETION_CONFIRMATION = 'OPEN_DELETION_CONFIRMATION';
export const CLOSE_DELETION_CONFIRMATION = 'CLOSE_DELETION_CONFIRMATION';

export const addStudent = student => ({
  type: ADD_STUDENT,
  student,
});

export const updateStudent = student => ({
  type: UPDATE_STUDENT,
  student,
});

export const deleteStudent = id => ({
  type: DELETE_STUDENT,
  id,
});

export const openStudentForm = student => ({
  type: OPEN_STUDENT_FORM,
  student,
});

export const closeStudentForm = () => ({
  type: CLOSE_STUDENT_FORM,
});

export const openDeletionConfirmation = id => ({
  type: OPEN_DELETION_CONFIRMATION,
  id,
});

export const closeDeletionConfirmation = () => ({
  type: CLOSE_DELETION_CONFIRMATION,
});
