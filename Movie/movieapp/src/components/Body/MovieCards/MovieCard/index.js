import React from 'react';

const MovieCard = ({ imgPath, movieName, year, type }) => {
  return (
    <div>
      <img src={imgPath} />
      <div>
        <div>{movieName}</div>
        <div>{year}</div>
        <div>{type}</div>
      </div>
    </div>
  )
};

export default MovieCard;