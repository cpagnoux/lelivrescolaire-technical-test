import React from 'react';
import Student from './Student';

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

export default StudentList;
