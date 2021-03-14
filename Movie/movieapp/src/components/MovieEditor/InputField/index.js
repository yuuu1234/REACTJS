import React from 'react';

const InputField = ({ title, type, options, placeholder }) => {
  return (
    <div>
      <text>{title}</text>
      {type ? <input placeholder={placeholder} /> :
        options.map(value =>
          <option value={value}>{value}</option>
        )}
    </div>
  )
};
export default InputField;