import React from "react";
import MainPageContent from './MainPageContent'
import MoviesAppBar from '../components/MoviesAppBar'
import MoviesFooter  from '../components/MoviesFooter'
import movies from '../../mockdata/movies'
import filters from '../../mockdata/filters'

class App extends React.Component {

    render() {      
      
      return  (
        <>        
          <MoviesAppBar />
          <MainPageContent movies={movies.data} filters={filters}/>
          <MoviesFooter />
        </>
     );
  }
}

export default App;

