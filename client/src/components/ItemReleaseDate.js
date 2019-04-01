import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';

export default class ItemReleaseDate extends React.PureComponent { 
 
  render() {  
    return (<CardHeader subheader={this.props.releaseDate} />);
  }
}