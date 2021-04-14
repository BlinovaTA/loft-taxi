import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Alert from 'antd/lib/alert';
import Input from './input';
import '../scss/form.scss';
import '../scss/button.scss';

export default class Registration extends Component {
  static propTypes = {
    formChange: PropTypes.func,
    registration: PropTypes.func,
    error: PropTypes.string
  }

  state = { email: '', password: '', name: '' };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { email, password, name } = this.state;
    const { formChange, registration, error } = this.props;

    return (
      <div className='wrapper registration-wrapper'>
        <div className='title-container'>
          <h1 className='title'>Регистрация</h1>
        </div>
        <form className='form registration-form' onSubmit={registration}>
          {error && <Alert className='form__block' banner message={error} type='error' showIcon />}
          <Input title='Email*' name='email' type='email' value={email} onChange={this.handleChange} />
          <Input title='Как вас зовут?*' name='name' type='text' value={name} onChange={this.handleChange} />
          <Input title='Придумайте пароль*' name='password' type='password' value={password} onChange={this.handleChange} />
          <button className='form__button button' type='submit'>Зарегистрироваться</button>
          <div className='form__switch'>
            <span className='form__to-title'>Уже зарегистрированны?</span>
            <button className='form__to-button' onClick={formChange}>Войти</button>
          </div>
        </form>
      </div>
    )
  }
}
