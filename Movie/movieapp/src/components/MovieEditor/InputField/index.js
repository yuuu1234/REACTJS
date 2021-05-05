import React from 'react';
import styles from './styles';

const InputField = ({ title, type, options, placeholder }) => {
  return (
    <div style={styles.mainContainer}>
      <text>{title}</text>
      {type ? <input placeholder={placeholder} type={type} style={styles.inputField}/> :
        <select style={styles.inputField}>
          {options.map(value =>
          <option value={value}>{value}</option>
        )}
        </select>
        }
    </div>
  )
};
export default InputField;