import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  Divider,
  Drawer,
  Fab,
  Typography,
} from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';

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
  title: {
    margin: theme.spacing.unit * 2,
  },
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
      <Typography
        className={classes.title}
        component="h1"
        variant="h4"
        color="primary"
      >
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
