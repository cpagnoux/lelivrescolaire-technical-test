import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { addStudent, closeStudentForm } from '../actions';

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
  closeStudentForm: () => dispatch(closeStudentForm()),
});

class StudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.student
      ? {
        name: props.student.name,
        addressStreet: props.student.address.street,
        addressSuite: props.student.address.suite,
        addressCity: props.student.address.city,
        addressZipcode: props.student.address.zipcode,
        phone: props.student.phone,
      }
      : {
        name: '',
        addressStreet: '',
        addressSuite: '',
        addressCity: '',
        addressZipcode: '',
        phone: '',
      };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = () => {
    this.props.addStudent({
      name: this.state.name,
      address: {
        street: this.state.addressStreet,
        suite: this.state.addressSuite,
        city: this.state.addressCity,
        zipcode: this.state.addressZipcode,
      },
      phone: this.state.phone,
    });
  };

  render() {
    const { open, student, closeStudentForm, classes } = this.props;
    const title = student ? 'Mettre à jour les informations' : 'Nouvel élève';
    const submitButtonText = student ? 'Mettre à jour' : 'Ajouter';

    return (
      <Dialog
        open={open}
        onClose={closeStudentForm}
        aria-labelledby="student-form-dialog-title"
      >
        <DialogTitle id="student-form-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <TextField
            id="student-name"
            label="Nom complet"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
            margin="dense"
            fullWidth
            autoFocus
          />
          <TextField
            id="student-address-street"
            label="Rue et numéro"
            name="addressStreet"
            type="text"
            value={this.state.addressStreet}
            onChange={this.handleInputChange}
            margin="dense"
            fullWidth
          />
          <TextField
            id="student-address-suite"
            label="Complément d'adresse"
            name="addressSuite"
            type="text"
            value={this.state.addressSuite}
            onChange={this.handleInputChange}
            margin="dense"
            fullWidth
          />
          <TextField
            className={classes.halfWidth}
            id="student-address-city"
            label="Ville"
            name="addressCity"
            type="text"
            value={this.state.addressCity}
            onChange={this.handleInputChange}
            margin="dense"
          />
          <TextField
            className={classes.halfWidth}
            id="student-address-zipcode"
            label="Code postal"
            name="addressZipcode"
            type="text"
            value={this.state.addressZipcode}
            onChange={this.handleInputChange}
            margin="dense"
          />
          <TextField
            className={classes.halfWidth}
            id="student-phone"
            label="Téléphone des parents"
            name="phone"
            type="text"
            value={this.state.phone}
            onChange={this.handleInputChange}
            margin="dense"
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeStudentForm}>
            Annuler
          </Button>
          <Button color="primary" onClick={this.handleFormSubmit}>
            {submitButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(StudentForm)
);
