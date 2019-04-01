import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles';
import Chip from '@material-ui/core/Chip';

class SearchFilter extends React.Component {
    
    render() {
      const { classes, filter, onClick } = this.props;     

      return ( 
        <Chip
        clickable
        label={filter.name}
        onClick={() => onClick(filter.name)} 
        className={classes.chip}
        variant="outlined"
        color={filter.active ? "primary" : "inherit"}
      />         
      );
    }
  }

  SearchFilter.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(SearchFilter);