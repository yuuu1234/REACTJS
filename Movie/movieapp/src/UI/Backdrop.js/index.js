import React from 'react';
import styles from './styles';

const Backdrop = ({ show }) => {
  return (show ? <div style={styles.container}></div> : null)
}
export default Backdrop;