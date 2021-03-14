import React from 'react';
import MovieCard from './MovieCard';
const MovieCards = ({ movies }) => {
  const content = movies.map(({ imgPath, movieName, year, type }) =>
    <MovieCard imgPath={imgPath} movieName={movieName} year={year} type={type} />
  )
  return (
    <div>
      {content}
    </div>
  )
};

export default MovieCards;