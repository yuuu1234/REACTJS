import React, { Fragment } from 'react';
import Backdrop from '..//../UI/Backdrop.js';
import MovieEditor from '../MovieEditor';
const Modal = ({ show, addMovieShow, editMovieShow,ClickCloseController, }) => {
  let [title, leftButton, rightButton] = ["", "", ""];
  if (addMovieShow) {
    [title, leftButton, rightButton] = ["ADD MOVIE", "RESET", "SUBMIT"]
  }else if(editMovieShow){
    [title, leftButton, rightButton] = ["EDIT MOVIE", "RESET", "SAVE"]
  }else{
    
  }
  const isShown = (show && (addMovieShow || editMovieShow)) ? true : false;
  return (
    <Fragment>
      <Backdrop show={show} />
      <MovieEditor show={isShown} headTitle={title} leftButton={leftButton} rightButton={rightButton}
        ClickCloseController={ClickCloseController} />
    </Fragment>
  )
};

export default Modal;