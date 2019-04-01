import React from "react";
import Toolbar from '@material-ui/core/Toolbar';
import MovieIcon from '@material-ui/icons/Movie';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles' 

class MoviesAppBar extends React.PureComponent { 
  
  render() {
      const { classes } = this.props;

      return  <AppBar position="static" color={classes.color}>
                  <Toolbar>
                  <MovieIcon className={classes.icon} />
                    <Typography variant="h6" color="inherit">
                      Movies
                    </Typography>
                  </Toolbar>
                </AppBar>;              
      }
  }

  MoviesAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(MoviesAppBar);
