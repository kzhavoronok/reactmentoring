import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';

export default class ItemTitle extends React.PureComponent { 
 
  render() {  
    return (<CardHeader title={this.props.title} />);
  }
}
