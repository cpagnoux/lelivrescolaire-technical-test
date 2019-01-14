import React from 'react';
import Typography from '@material-ui/core/Typography';
import StudentList from './StudentList';
import students from '../students.json';

const App = () => (
  <div>
    <Typography variant="h1" align="center">
      Classe de 3e
    </Typography>
    <StudentList students={students} />
  </div>
);

export default App;
