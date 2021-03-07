import React, { Fragment } from 'react';
import TypeMenu from './TypeMenu';
import SortBar from './SortBar';
import styles from './styles';
const Filter = () => {
  const allTypes = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];
  const sortMenu = ['RELEASE DATE']
  return (
    <div style={styles.filterContainer}>
      <TypeMenu allTypes={allTypes} />
      <SortBar sortMenu={sortMenu} />
    </div>
  )
};

export default Filter;