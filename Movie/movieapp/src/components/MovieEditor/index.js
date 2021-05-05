import React from 'react';
import InputField from './InputField';
import styles from './styles';
import imgPath from '../../asset/img/closeIcon.png'
const MovieEditor = ({ show, headTitle, rightButton, leftButton, ClickCloseController}) => {
  const data = [
    { title: "TITLE", type: "text" },
    { title: "RELEASE DATE", type: "date" },
    { title: "MOVIE URL", type: "text" },
    { title: "GENRE", options: ['Romantic', 'Scary'], type:null },
    { title: "OVERVIEW", type: "text" },
    { title: "RUNTIME", type: "text" },
  ]
  return (
    <div style={{
      ...styles.container,
      transform: show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: show ? '1' : '0'
    }}>
      <div style={styles.title}>{headTitle}</div>
      <div style={styles.closeIconContainer} onClick={ClickCloseController}>
      <img src={imgPath} style={styles.closeIcon} />
      </div>
      {data.map(({ title, type, options, placeholder }) => {
        return <InputField title={title} type={type} options={options} placeholder={placeholder} />
      })}
      <div style={styles.buttonContainer}>
        <button style={styles.leftButton}>{leftButton}</button>
        <button style={styles.rightButton}>{rightButton}</button>
      </div>
    </div>
  )
};
export default MovieEditor;