import REACT from 'react';
import PropTypes from 'prop-types';

const AddMovieMenu = ({ style }) => {
  return (
    <button style={style}>+ ADD MOVIE</button>
  )
}

AddMovieMenu.propTypes = {
  style: PropTypes.object
}

export default AddMovieMenu;
