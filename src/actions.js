export const ADD_STUDENT = 'ADD_STUDENT';
export const UPDATE_STUDENT = 'UPDATE_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';

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
