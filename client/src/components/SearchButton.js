import React from "react";
import Button from '@material-ui/core/Button';

export default class SearchButton extends React.PureComponent {

    render() {
      const { classes, onClick } = this.props;

      return (        
            <Button variant="contained" color="primary" classes={classes.searchButton} onClick={ onClick }>
            Search
            </Button>               
      );
    }
  }