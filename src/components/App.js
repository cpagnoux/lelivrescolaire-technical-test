import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Panel from './Panel';
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
    <Panel title="Classe de 3e" />
    <main className={classes.content}>
      <StudentList />
    </main>
  </div>
);

export default withStyles(styles)(App);
