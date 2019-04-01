import React from "react";
import TextField  from '@material-ui/core/TextField';

export default class SearchField extends React.PureComponent {

    render() {
      const { classes, onChange, value } = this.props;

      return (       
                <TextField
                id="outlined-name"
                label="Find your movie"
                className={classes.textField}
                margin="normal"
                variant="outlined"  
                value={value}
                onChange={(e) => onChange(e.target.value)}           
                /> 
            );
    }
  }