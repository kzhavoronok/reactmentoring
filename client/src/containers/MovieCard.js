import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles';
import CardHeader from '@material-ui/core/CardHeader';
import { CardContent } from '@material-ui/core';

class MovieCard extends React.Component { 
 
  render(){
    const { classes, movie} = this.props;
  
    return (
      <>   
        <Grid item key={movie} sm={6} md={4} lg={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={movie.poster_path} // eslint-disable-line max-len
              title={movie.title}
            />
            <CardHeader
            title={movie.title}
            subheader={movie.genres.join(' / ')}   
            /> 
            <CardHeader
              subheader={movie.release_date}   
            /> 
          </Card>
        </Grid>    
      </>
    );
  }
}

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieCard);


{/* <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Album layout
              </Typography>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                Something short and leading about the collection below—its contents, the creator, etc.
                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                entirely.
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={16} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Main call to action
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Secondary action
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div> */}


