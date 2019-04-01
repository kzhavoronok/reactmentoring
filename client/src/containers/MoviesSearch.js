import React from "react";
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles';
import SearchFilters from '../components/SearchFilters'
import SearchField  from '../components/SearchField';
import SearchButton  from '../components/SearchButton';

class MovieSearch extends React.Component {
    
    render() {

      const { classes, onChange, onClickSearch, onClickFilter, value, filters } = this.props;

      return (
        <div>
          <Paper className={classes.root} >
                <SearchField classes={classes} onChange={onChange} value={value}/>
                <SearchButton classes={classes} onClick={onClickSearch}/>
                <SearchFilters classes={classes} filters={filters} onClick={onClickFilter}/>  
          </Paper>
        </div>
      );
    }
  }

  MovieSearch.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(MovieSearch);