import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from '../src/Movies/MovieList';
import Movie from '../src/Movies/Movie';

import SavedList from './Movies/SavedList';
import { Route} from 'react-router-dom';
import MovieCard from './Movies/MovieCard';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
          console.log(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path = "/" component={MovieList}/>
      <Route path = "/movies/:id">
        <Movie addToSavedList = {addToSavedList} />  
      </Route>
    </div>
  );
};

export default App;