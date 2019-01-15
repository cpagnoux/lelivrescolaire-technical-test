import React from 'react';
import { connect } from 'react-redux';
import Student from '../components/Student';

const mapStateToProps = state => ({
  students: state,
});

const StudentList = ({ students }) => (
  <div>
    {students.map(student => (
      <Student
        key={student.id}
        name={student.name}
        address={student.address}
        phone={student.phone}
      />
    ))}
  </div>
);

export default connect(
  mapStateToProps,
)(StudentList);
