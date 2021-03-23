import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    const {title, name, type, value, onChange} = this.props;

    return (
      <label className='form__block'>
        <div className='form__item-title'>{title}</div>
        <input type={type} className='form__input' name={name} value={value} onChange={onChange} />
      </label>
    )
  }
}
