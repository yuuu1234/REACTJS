import React, { Fragment } from 'react';
import Backdrop from '..//../UI/Backdrop.js';
import MovieEditor from '../MovieEditor';
const Modal = ({ show, addMovieShow }) => {
  const [title, leftButton, rightButton] = addMovieShow ? ["ADD MOVIE", "RESET", "SUBMIT"] : ["", "", ""]
  const isShown = (show && addMovieShow) ? true : false;
  return (
    <Fragment>
      <Backdrop show={show} />
      <MovieEditor show={isShown} headTitle={title} leftButton={leftButton} rightButton={rightButton} />
    </Fragment>
  )
};

export default Modal;