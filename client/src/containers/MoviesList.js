import React from "react";
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import styles from '../styles';

import MovieCard from './MovieCard'

class MoviesList extends React.Component { 
  
  render(){
    
    const { classes, movies} = this.props;  
    const movieCards = movies.map((movie)=><MovieCard key={movie.id} movie={movie}/>)

    return (
      <div className={classNames(classes.layout, classes.cardGrid)}>
        <Grid container spacing={40}> 
          {movieCards}
        </Grid>
      </div>
    )
  }
}

MoviesList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MoviesList);