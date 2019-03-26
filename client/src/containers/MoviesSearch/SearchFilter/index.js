import React from "react";
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styles from '../../../styles';
import Chip from '@material-ui/core/Chip';

class SearchFilter extends React.Component {
    handleClick(){
        console.log("Please, impelment a filter...")
    }

    render() {

      const { classes } = this.props;

      return (       
        <Grid container direction="row" spacing={24}>
            <Grid item>
                <Chip label="Title"
                onClick={this.handleClick}
                className={classes.chip}
                variant="outlined"
                />
                <Chip
                label="Genre"
                onClick={this.handleClick}
                className={classes.chip}
                variant="outlined"
                />
            </Grid>
        </Grid>
      );
    }
  }

  SearchFilter .propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(SearchFilter);