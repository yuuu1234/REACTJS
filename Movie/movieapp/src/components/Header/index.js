import React, { Fragment } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie'
import styles from './styles';
import PropTypes from 'prop-types';

const Header = ({ }) => {
  return (
    <div style={styles.mainContainer}>
      <AddMovie style={styles.addMovieButton} />
      <div style={styles.searchArea}>
        <div>FIND YOUR MOVIE</div>
        <div style={styles.SearchBar}>
          <SearchBar placeholder={'what do you want to watch'} buttonName={'SEARCH'} />
        </div>
      </div>
    </div>
  )
};
Header.propTypes = {
}

export default Header;