import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import DeletionConfirmation from '../containers/DeletionConfirmation';
import Panel from '../containers/Panel';
import StudentForm from '../containers/StudentForm.js';
import StudentList from '../containers/StudentList';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 2,
  },
});

const App = ({ classes }) => (
  <div className={classes.root}>
    <CssBaseline />
    <Panel title="Classe de 3e" />
    <main className={classes.content}>
      <StudentList />
    </main>
    <StudentForm />
    <DeletionConfirmation />
  </div>
);

export default withStyles(styles)(App);
