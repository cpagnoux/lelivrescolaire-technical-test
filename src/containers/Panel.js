import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import { openStudentForm } from '../actions';

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    flexShrink: 0,
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit * 2,
  },
});

const mapDispatchToProps = dispatch => ({
  openStudentForm: () => dispatch(openStudentForm()),
});

const Panel = ({ title, openStudentForm, classes }) => (
  <Drawer
    className={classes.drawer}
    variant="permanent"
    classes={{ paper: classes.drawerPaper }}
  >
    <div className={classes.toolbar}>
      <Typography component="h1" variant="h4">
        {title}
      </Typography>
    </div>
    <Divider />
    <Fab
      className={classes.fab}
      variant="extended"
      color="primary"
      onClick={openStudentForm}
      aria-label="Ajouter"
    >
      <AddIcon className={classes.extendedIcon} />
      Ajouter un élève
    </Fab>
  </Drawer>
);

export default withStyles(styles)(
  connect(
    null,
    mapDispatchToProps,
  )(Panel),
);