import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ title, name, type, value, onChange }) => {
  return (
    <div className='form__block'>
      <label htmlFor={name} className='form__item-title'>{title}</label>
      <input type={type} className='form__input' name={name} id={name} value={value} onChange={onChange} />
    </div>
  )
}

Input.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Input;