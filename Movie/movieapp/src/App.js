import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import styles from './styles';
import ErrorBoundary from './ErrorBoundary';
import Footer from './components/Footer';
import Modal from './components/Modal';
function App() {
  const [show, setShow] = useState(false);
  const [addMovieShow, setAddMovieShow] = useState(false);
  const [openMovieEditor, setOpenMovieEditor] = useState(false);
  const [openEditMovie, setOpenEditMovie] = useState(false);
  const [openDeleteMovie, setOpenDeleteMovie] = useState(false);
  const addMovieController = () => {
    setShow(!show);
    setAddMovieShow(!addMovieShow);
  }
  const ClickCloseController = () => {
    setShow(false);
    setAddMovieShow(false);
    setOpenEditMovie(false);
    setOpenMovieEditor(false);
    setOpenDeleteMovie(false);
  }
  const movieEditController = () => {
    setOpenMovieEditor(!openMovieEditor);
  }

  const editButtonController = () => {
    setOpenEditMovie(!openEditMovie);
  }

  const deleteButtonController = () => {
    setOpenDeleteMovie(!openDeleteMovie);
  }
  return (
    <div className="App" style={styles.mainContainer}>
      <Modal show={show} addMovieShow={addMovieShow} ClickCloseController={ClickCloseController} />
      <Modal show={openEditMovie} editMovieShow={openEditMovie} ClickCloseController={ClickCloseController}/>
      <Header addMovieController={addMovieController} />
      <Body movieEditController={movieEditController}
        openMovieEditor={openMovieEditor}
        editButtonController={editButtonController}
        deleteButtonController={deleteButtonController}
        ClickCloseController={ClickCloseController}
        openEditMovie={openEditMovie}
        openDeleteMovie={openDeleteMovie}
        />
      <Footer />
    </div>
  );
}

export default App;
