import React from 'react';
import styles from './styles';
import Filter from './Filter';
import MovieCards from './MovieCards';

const data = [{ imgPath: "", movieName: "", year: "", type: "" },]
const Body = () => {
  return (
    <div style={styles.mainContainer}>
      <Filter />
      <MovieCards movies={data} />
    </div>
  )
};

export default Body;