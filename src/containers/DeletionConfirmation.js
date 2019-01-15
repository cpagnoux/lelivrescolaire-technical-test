import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { deleteStudent, closeDeletionConfirmation } from '../actions';

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
  closeDeletionConfirmation
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
        <Button color="primary" onClick={() => deleteStudent(id)}>
          Supprimer
        </Button>
        <Button onClick={closeDeletionConfirmation}>
          Annuler
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeletionConfirmation);
