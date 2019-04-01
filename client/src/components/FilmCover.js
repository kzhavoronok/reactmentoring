import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';

export default class FilmCover extends React.PureComponent { 
 
  render() {
    const { className, movie} = this.props;
  
    return (      
        <CardMedia className={className}
                   image={movie.poster_path}
                   title={movie.title}
                />  
      
    );
  }
}
