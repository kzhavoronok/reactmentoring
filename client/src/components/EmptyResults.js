import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles';

class EmptyResults extends React.PureComponent { 
 
  render() {
    const { classes } = this.props;

    return (<Paper className={classes.notfoundpaper}><Typography align="center" variant="h1">No movies found</Typography></Paper>);
  }
}

EmptyResults.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(EmptyResults);
