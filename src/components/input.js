import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ title, name, type, register, required, maxLength, value }) => {
  return (
    <div className='form__block'>
      <label htmlFor={name} className='form__item-title'>{title}</label>
      <input defaultValue={value} type={type} className='form__input' name={name} id={name} {...register(name, { required, maxLength: maxLength })} />
    </div>
  )
}

Input.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  register: PropTypes.func,
  required: PropTypes.bool,
  maxLength: PropTypes.number,
  value: PropTypes.string
}

export default Input;