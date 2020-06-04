import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MovieCard from './MovieCard'

const MovieList = props => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovie(response.data);
          console.log(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {movie.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  return (
    <MovieCard movie = {movie} />
  );
}

export default MovieList;
