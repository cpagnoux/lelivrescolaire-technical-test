import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  card: {
    display: 'inline-block',
    margin: 10,
    width: 200,
  },
  media: {
    height: 200,
  },
  expand: {
    marginLeft: 'auto',
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class Student extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const {
      name,
      address,
      phone,
      editAction,
      deleteAction,
      classes
    } = this.props;

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`https://robohash.org/${name}.png?size=200x200`}
            title={name}
          />
          <CardContent>
            <Typography component="h2" variant="h6">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton onClick={editAction} aria-label="Éditer">
            <EditIcon />
          </IconButton>
          <IconButton onClick={deleteAction} aria-label="Supprimer">
            <DeleteIcon />
          </IconButton>
          <IconButton
            className={{
              [classes.expand]: true,
              [classes.expandOpen]: this.state.expanded,
            }}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Voir plus"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} unmountOnExit>
          <CardContent>
            <Typography paragraph>
              <strong>Adresse :</strong><br />
              {address.street}<br />
              {address.suite}<br />
              {address.city}, {address.zipcode}
            </Typography>
            <Typography paragraph>
              <strong>Téléphone des parents :</strong><br />
              {phone}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default withStyles(styles)(Student);
