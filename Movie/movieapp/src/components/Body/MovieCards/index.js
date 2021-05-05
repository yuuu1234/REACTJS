import React from 'react';
import MovieCard from './MovieCard';
import styles from './styles';

const MovieCards = ({ movies,
  openMovieEditor,
  movieEditController,
  editButtonController,
  deleteButtonController,
  ClickCloseController,
  openEditMovie,
  openDeleteMovie }) => {
  const content = movies.map(({ imgPath, movieName, year, type }) =>
    <MovieCard imgPath={imgPath} movieName={movieName}
      year={year} type={type}
      openMovieEditor={openMovieEditor}
      movieEditController={movieEditController}
      editButtonController={editButtonController}
      deleteButtonController={deleteButtonController}
      ClickCloseController={ClickCloseController}
      openEditMovie={openEditMovie}
      openDeleteMovie={openDeleteMovie}
    />
  )
  return (
    <div style={styles.movieCardContainer}>
      {content}
    </div>
  )
};

export default MovieCards;