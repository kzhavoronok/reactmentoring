import React from "react";
import Grid from '@material-ui/core/Grid';
import SearchFilter from './SearchFilter'

export default class SearchFilters extends React.PureComponent {
    
  render() {
      const { filters, onClick } = this.props;
    
      return (       
        <Grid container direction="row" spacing={24}>
            <Grid item>
               {filters.map((filter)=>(<SearchFilter key={filter.name} filter={filter} onClick={onClick}/>))}
            </Grid>
        </Grid>
      );
    }
  }