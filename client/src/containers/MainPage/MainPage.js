import React from "react";

import Toolbar from '@material-ui/core/Toolbar';
import MovieIcon from '@material-ui/icons/Movie';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles' 

import MoviesList from '../MoviesList'
import movies from '../../../mockdata/movies'

class  MoviesAppBar extends React.Component {
  
  render() {
    const { classes} = this.props;

      return <>        
                <AppBar position="static" color={classes.color}>
                  <Toolbar>
                  <MovieIcon className={classes.icon} />
                    <Typography variant="h6" color="inherit">
                      Movies
                    </Typography>
                  </Toolbar>
                </AppBar>
                <main>
                  <MoviesList movies={movies}/>
                </main>
                <footer className={classes.footer}>
                    <Typography variant="h6" align="center" gutterBottom>
                      Footer
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                      Something here to give the footer a purpose!
                    </Typography>
                </footer>
             </>;
      }
  }

  MoviesAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)( MoviesAppBar);
