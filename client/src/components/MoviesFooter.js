import React from "react";
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles' 

class MoviesFooter extends React.PureComponent { 
  
  render() {
      const { classes } = this.props;

      return  <footer className={classes.footer}>
                    <Typography variant="h6" align="center" gutterBottom>
                      Footer
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                      Something here to give the footer a purpose!
                    </Typography>
                </footer>;
      }
  }

  MoviesFooter.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)( MoviesFooter);
