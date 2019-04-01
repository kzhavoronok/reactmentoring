import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import FilmCover from '../components/FilmCover';
import ItemTitle from '../components/ItemTitle';
import ItemGenre from '../components/ItemGenre';
import ItemReleaseDate from '../components/ItemReleaseDate';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles';

class MovieCard extends React.Component { 
 
  render() {
    const { classes, movie} = this.props;
  
    return (
      <>   
        <Grid item key={movie} sm={6} md={4} lg={3}>
          <Card className={classes.card}>
              <FilmCover className={classes.cardMedia} movie={movie}/>
              <ItemTitle title={movie.title}/>
              <ItemReleaseDate releaseDate={movie.release_date}/>
              <ItemGenre genres={movie.genres}/>              
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


