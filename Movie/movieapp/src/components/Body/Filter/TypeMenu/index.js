import React from 'react';
import styles from './styles';
import PropTypes from 'prop-types';

const TypeMenu = ({ allTypes }) => {
  const content = allTypes.map(type => <button style={styles.content} >{type}</button>)
  return (
    <form style={styles.typeMenu}>{content}</form>
  )
};

TypeMenu.propTypes = {
  allTypes: PropTypes.array,
}

export default TypeMenu;