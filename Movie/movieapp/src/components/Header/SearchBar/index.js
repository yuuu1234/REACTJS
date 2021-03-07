import React, { useState } from 'react';
import styles from './styles';
import PropTypes from 'prop-types';

const SearchBar = ({ placeholder, buttonName }) => {
  const [value, setValue] = useState('');

  return (
    <form>
      <input
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button style={styles.searchButton}>{buttonName}</button>
    </form>
  )
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  buttonName: PropTypes.string,
}

export default SearchBar;