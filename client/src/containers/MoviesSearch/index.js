import React from "react";
import PropTypes from 'prop-types';
import TextField  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles';
import SearchFilter from './SearchFilter'

class MovieSearch extends React.Component {
    
    render() {

      const { classes } = this.props;

      return (
        <div>
          <Paper className={classes.root} >
            <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                <Grid item>
                    <TextField
                    id="outlined-name"
                    label="Find your movie"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"              
                    />              
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" classes={classes.searchButton}>
                    Search
                  </Button>
                </Grid>
                <SearchFilter />                
            </Grid>      
          </Paper>
        </div>
      );
    }
  }

  MovieSearch.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(MovieSearch);