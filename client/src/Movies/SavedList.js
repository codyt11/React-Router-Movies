import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const SavedList = props => {
  const { id } = props;

  return (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">
        <NavLink activeClassName = "saved-active" to={`/movies/${movie.id}`}>
          {movie.title}
        </NavLink>
      </span>
    ))}
    
    <button className="home-button"><Link to="/">Home</Link></button>
  </div>
  );
}

export default SavedList;