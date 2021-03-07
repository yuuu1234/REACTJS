import React, { useState } from 'react';
import styles from './styles';
import PropTypes from 'prop-types';

const SortBar = ({ sortMenu }) => {
  const [value, setValue] = useState(sortMenu[0])
  const content = sortMenu.map(sort =>
    <option value={sort} onChange={e => setValue(e.target.value)}>{sort}</option>
  )
  return (
    <div style={styles.sort}>
      <div style={{ marginTop: 8, marginRight: 10 }}>SORT BY</div>
      <select style={styles.content} value={value}>
        {content}
      </select>
    </div>
  )
}

SortBar.propTypes = {
  sortMenu: PropTypes.array
}

export default SortBar;