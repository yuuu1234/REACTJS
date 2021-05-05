import React from 'react';
import styles from './styles';
import Filter from './Filter';
import MovieCards from './MovieCards';
import movieUrl from '../../asset/img/movie1.jpeg'
const data = [
  {
    imgPath: movieUrl,
    movieName: 'Harry Poter',
    year: '2009',
    type: 'Magic'
  },
]
const Body = ({ movieEditController,
  openMovieEditor,
  editButtonController,
  deleteButtonController,
  ClickCloseController,
  openEditMovie,
  openDeleteMovie }) => {
    console.log('body',openDeleteMovie)
  return (
    <div style={styles.mainContainer}>
      <Filter />
      <MovieCards movies={data}
        movieEditController={movieEditController}
        openMovieEditor={openMovieEditor}
        editButtonController={editButtonController}
        deleteButtonController={deleteButtonController}
        ClickCloseController={ClickCloseController}
        openEditMovie={openEditMovie}
        openDeleteMovie={openDeleteMovie} />
    </div>
  )
};

export default Body;