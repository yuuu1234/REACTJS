import React from 'react';
import InputField from './InputField';
import styles from './styles'
const MovieEditor = ({ show, headTitle, rightButton, leftButton }) => {
  const data = [
    { title: "TITLE", type: "text" },
    { title: "RELEASE DATE", type: "date" },
    { title: "MOVIE URL", type: "text" },
    { title: "GENRE", options: [] },
    { title: "OVERVIEW", type: "text" },
    { title: "RUNTIME", type: "text" },
  ]
  return (
    <div style={{
      ...styles.container,
      transform: show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: show ? '1' : '0'
    }}>
      <div>{headTitle}</div>
      {data.map(({ title, type, options, placeholder }) => {
        <InputField title={title} type={type} options={options} placeholder={placeholder} />
      })}
      <div>
        <button>{leftButton}</button>
        <button>{rightButton}</button>
      </div>
    </div>
  )
};
export default MovieEditor;