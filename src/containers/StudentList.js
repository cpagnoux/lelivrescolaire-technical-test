import React from 'react';
import { connect } from 'react-redux';

import { openStudentForm, openDeletionConfirmation } from '../actions';
import Student from '../components/Student';

const mapStateToProps = state => ({
  students: state.students.items,
});

const mapDispatchToProps = dispatch => ({
  openStudentForm: student => dispatch(openStudentForm(student)),
  openDeletionConfirmation: id => dispatch(openDeletionConfirmation(id)),
});

const StudentList = ({ students, openStudentForm, openDeletionConfirmation }) => (
  <div>
    {students.map(student => (
      <Student
        key={student.id}
        name={student.name}
        address={student.address}
        phone={student.phone}
        editAction={() => openStudentForm(student)}
        deleteAction={() => openDeletionConfirmation(student.id)}
      />
    ))}
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StudentList);
