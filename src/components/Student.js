import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from '@material-ui/core';
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  ExpandMore as ExpandMoreIcon,
} from '@material-ui/icons';

const styles = theme => ({
  card: {
    display: 'inline-block',
    margin: theme.spacing.unit,
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
        <CardActionArea onClick={this.handleExpandClick}>
          <CardMedia
            className={classes.media}
            image={`https://robohash.org/${name}.png?size=200x200`}
            title={name}
          />
          <CardContent>
            <Typography component="h2" variant="h6" color="primary">
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
            <Typography component="h3" variant="subtitle2" color="secondary">
              Adresse :
            </Typography>
            <Typography paragraph>
              {address.street}<br />
              {!!address.suite && <>{address.suite}<br /></>}
              {address.city}, {address.zipcode}
            </Typography>
            <Typography component="h3" variant="subtitle2" color="secondary">
              Téléphone des parents :
            </Typography>
            <Typography paragraph>
              {phone}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default withStyles(styles)(Student);
