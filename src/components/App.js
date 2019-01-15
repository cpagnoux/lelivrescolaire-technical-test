import React from 'react';
import Typography from '@material-ui/core/Typography';
import StudentList from '../containers/StudentList';

const App = () => (
  <div>
    <Typography variant="h1" align="center">
      Classe de 3e
    </Typography>
    <StudentList />
  </div>
);

export default App;
