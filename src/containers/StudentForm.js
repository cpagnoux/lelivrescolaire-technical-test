import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { addStudent, updateStudent, closeStudentForm } from '../actions';

const styles = {
  halfWidth: {
    width: '50%',
  },
};

const mapStateToProps = state => ({
  open: state.studentForm.open,
  student: state.studentForm.student,
});

const mapDispatchToProps = dispatch => ({
  addStudent: student => {
    dispatch(closeStudentForm());
    dispatch(addStudent(student));
  },
  updateStudent: student => {
    dispatch(closeStudentForm());
    dispatch(updateStudent(student));
  },
  closeStudentForm: () => dispatch(closeStudentForm()),
});

class StudentForm extends React.Component {
  getDefaultObject = student => {
    return student
      ? student
      : {
        name: '',
        address: {
          street: '',
          suite: '',
          city: '',
          zipcode: '',
        },
        phone: '',
      };
  };

  handleSubmit = (event, action) => {
    event.preventDefault();
    const data = new FormData(event.target);

    switch (action) {
      case 'CREATE':
        this.props.addStudent({
          name: data.get('name'),
          address: {
            street: data.get('addressStreet'),
            suite: data.get('addressSuite'),
            city: data.get('addressCity'),
            zipcode: data.get('addressZipcode'),
          },
          phone: data.get('phone'),
        });
        break;
      case 'UPDATE':
        this.props.updateStudent({
          id: this.props.student.id,
          name: data.get('name'),
          address: {
            street: data.get('addressStreet'),
            suite: data.get('addressSuite'),
            city: data.get('addressCity'),
            zipcode: data.get('addressZipcode'),
          },
          phone: data.get('phone'),
        });
        break;
      default:
    }
  };

  render() {
    const { open, student, closeStudentForm, classes } = this.props;
    const title = student ? 'Mettre à jour les informations' : 'Nouvel élève';
    const submitButtonText = student ? 'Mettre à jour' : 'Ajouter';
    const action = student ? 'UPDATE' : 'CREATE';
    const defaultObject = this.getDefaultObject(student);

    return (
      <Dialog
        open={open}
        onClose={closeStudentForm}
        aria-labelledby="student-form-dialog-title"
      >
        <DialogTitle id="student-form-dialog-title">
          {title}
        </DialogTitle>
        <form onSubmit={e => this.handleSubmit(e, action)}>
          <DialogContent>
            <TextField
              id="student-name"
              label="Nom complet"
              name="name"
              type="text"
              defaultValue={defaultObject.name}
              required
              margin="dense"
              fullWidth
              autoFocus
            />
            <TextField
              id="student-address-street"
              label="Adresse (rue et numéro)"
              name="addressStreet"
              type="text"
              defaultValue={defaultObject.address.street}
              required
              margin="dense"
              fullWidth
            />
            <TextField
              id="student-address-suite"
              label="Complément d'adresse"
              name="addressSuite"
              type="text"
              defaultValue={defaultObject.address.suite}
              margin="dense"
              fullWidth
            />
            <TextField
              className={classes.halfWidth}
              id="student-address-city"
              label="Ville"
              name="addressCity"
              type="text"
              defaultValue={defaultObject.address.city}
              required
              margin="dense"
            />
            <TextField
              className={classes.halfWidth}
              id="student-address-zipcode"
              label="Code postal"
              name="addressZipcode"
              type="text"
              defaultValue={defaultObject.address.zipcode}
              required
              margin="dense"
            />
            <TextField
              className={classes.halfWidth}
              id="student-phone"
              label="Téléphone des parents"
              name="phone"
              type="tel"
              defaultValue={defaultObject.phone}
              required
              margin="dense"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeStudentForm}>
              Annuler
            </Button>
            <Button variant="contained" color="primary" type="submit">
              {submitButtonText}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    );
  }
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(StudentForm),
);
