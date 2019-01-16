import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@material-ui/core';

import { deleteStudent, closeDeletionConfirmation } from '../actions';

const styles = theme => ({
  danger: {
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
  },
});

const mapStateToProps = state => ({
  id: state.deletionConfirmation.id,
});

const mapDispatchToProps = dispatch => ({
  deleteStudent: id => {
    dispatch(closeDeletionConfirmation());
    dispatch(deleteStudent(id));
  },
  closeDeletionConfirmation: () => dispatch(closeDeletionConfirmation()),
});

const DeletionConfirmation = ({
  id,
  deleteStudent,
  closeDeletionConfirmation,
  classes,
}) => {
  const open = id ? true : false;

  return (
    <Dialog
      open={open}
      onClose={closeDeletionConfirmation}
      disableBackdropClick
      aria-labelledby="deletion-confirmation-dialog-title"
    >
      <DialogTitle id="deletion-confirmation-dialog-title">
        Supprimer l'élève ?
      </DialogTitle>
      <DialogContent>
        <Typography component="p">
          Êtes-vous sûr(e) de vouloir retirer cet élève de la classe ?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDeletionConfirmation}>
          Annuler
        </Button>
        <Button
          className={classes.danger}
          variant="contained"
          color="primary"
          onClick={() => deleteStudent(id)}
        >
          Supprimer
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(DeletionConfirmation),
);
