import React from "react";
import MoviesList from './MoviesList'
import MoviesSearch from './MoviesSearch'
import EmptyResults from '../components/EmptyResults'
import MovieDetails from './MovieDetails'

class MainPageContent extends React.Component {
  constructor(props){
    super(props);
    
    const { movies, filters } = this.props;

    this.state = {
      movies: movies, 
      filters: filters,
      displayedMovies: movies, 
      searchedValue:''
    }

    this.updateMovies = this.updateMovies.bind(this);
    this.updateSearchedValue = this.updateSearchedValue.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
  }
  
  updateMovies(displayedMovies){
    this.setState({displayedMovies})
  }

  updateSearchedValue(searchedValue) {    
    this.setState({
        searchedValue: searchedValue,
    });
  }

  searchMovies(){
   var filterByProperty = this.state.filters.filter((filter)=>filter.active)[0].value;
   var filterResult = this.state.movies.filter((movie)=> movie[filterByProperty].toString().toLowerCase().indexOf(this.state.searchedValue.toLowerCase()) > -1);
   
   this.updateMovies(filterResult);
  }

  updateFilter(filterName){
    var updatedFilters = this.state.filters.slice(0); //clone array
    updatedFilters.forEach(filter => {
      if(filter.name===filterName){
        filter.active=true;
      }
      else{
        filter.active=false;
      }
    });
    this.setState({filters: updatedFilters})
  }

  areMoviesFound() {
    return this.state.displayedMovies.length > 0
  }
  
  render() {
      return (
                <main>
                {/* <MovieDetails/> */}
                  <MoviesSearch 
                    onChange={this.updateSearchedValue}
                    onClickSearch={this.searchMovies}
                    onClickFilter={this.updateFilter}
                    value={this.state.searchedValue}
                    filters = {this.state.filters}
                  />     

                  { this.areMoviesFound() 
                    ? <MoviesList movies={this.state.displayedMovies}/> 
                    : <EmptyResults/> }

                </main>
              );
      }
  }

  export default MainPageContent;
