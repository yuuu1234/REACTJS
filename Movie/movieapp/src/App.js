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
  const addMovieController = () => {
    setShow(!show);
    setAddMovieShow(!addMovieShow);
  }
  return (
    <div className="App" style={styles.mainContainer}>
      <Modal show={show} addMovieShow={addMovieShow} />
      <Header addMovieController={addMovieController} />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
