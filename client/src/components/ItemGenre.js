import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';

export default class ItemGenre extends React.PureComponent { 
 
  render() {  
    return (<CardHeader subheader={this.props.genres.join(' / ')} />);
  }
}
