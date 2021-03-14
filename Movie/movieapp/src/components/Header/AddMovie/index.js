import REACT from 'react';
import PropTypes from 'prop-types';

const AddMovieMenu = ({ style, addMovieController }) => {
  return (
    <button onClick={addMovieController} style={style}>+ ADD MOVIE</button>
  )
}

AddMovieMenu.propTypes = {
  style: PropTypes.object
}

export default AddMovieMenu;
