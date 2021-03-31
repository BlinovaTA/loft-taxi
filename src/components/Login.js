import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import '../scss/form.scss';
import '../scss/button.scss';

export default class Login extends Component {
  static propTypes = {
    formChange: PropTypes.func
  }

  state = { email: '', password: '' };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { email, password } = this.state;
    const { formChange, authorization } = this.props;

    return (
      <div className='wrapper login-wrapper'>
        <div className='title-container'>
          <h1 className='title'>Войти</h1>
        </div>
        <form className='form login-form' onSubmit={authorization}>
          <Input title='Email' name='email' type='email' value={email} onChange={this.handleChange} />
          <Input title='Пароль' name='password' type='password' value={password} onChange={this.handleChange} />
          <div className='form__block'>
            <p className='form__forgot-password'>Забыли пароль?</p>
          </div>
          <button type='submit' className='form__button button'>Войти</button>
          <div className='form__switch'>
            <span className='form__to-title'>Новый пользователь? </span>
            <button className='form__to-button' onClick={formChange}>Регистрация</button>
          </div>
        </form>
      </div>
    )
  }
}