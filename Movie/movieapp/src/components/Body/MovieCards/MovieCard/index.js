import React, { useEffect, useState } from 'react';
import styles from './styles';
import closeIconPath from '../../../../asset/img/closeIcon.png';

const movieEditor = () => {
  return (
    <div>
      <div>Edit</div>
      <div>Delete</div>
    </div>
  )
}
const MovieCard = ({ imgPath, movieName, year, type,
  openMovieEditor,
  movieEditController,
  editButtonController,
  deleteButtonController,
  ClickCloseController,
  openEditMovie,
  openDeleteMovie }) => {
  useEffect(() => { }, [openMovieEditor])
  return (
    <div style={styles.movieCardContainer}>
      {openMovieEditor ?
        <div style={styles.movieEditor}>
          <img src={closeIconPath} style={styles.closeImg} onClick={ClickCloseController} />
          <div style={styles.edit} onClick={editButtonController}> Edit</div>
          <div style={styles.delete} onClick={deleteButtonController}>Delete</div>
        </div> :
        null}
      {openDeleteMovie ?
        <div>
          <img src={closeIconPath} style={styles.closeImg} onClick={ClickCloseController} />
          <div>DELETE MOVIE</div>
          <div>Are you sure you want to delete this movie?</div>
        </div> :
        null
      }
      <div style={styles.roundButton} onClick={movieEditController} >
        <div style={styles.dots}></div>
      </div>
      <img src={imgPath} style={styles.movieImg} />
      <div style={styles.movieDes}>
        <div>
          <div style={styles.movieName}>{movieName}</div>
          <div style={styles.movieType}>{type}</div>
        </div>
        <div style={styles.movieYear}>{year}</div>
      </div>
    </div>
  )
};


export default MovieCard;