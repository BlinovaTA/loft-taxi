import React, { Component } from 'react';
import { pages, emailFormat } from '../consts';
import '../scss/form.scss';
import '../scss/button.scss';

export default class Login extends Component {
  state = { login: '', password: '' };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  setPage = () => {
    this.props.setPage(pages.map);
  }

  render() {
    const { login, password } = this.state;
    const { formChange } = this.props;

    return (
      <div className='wrapper login-wrapper'>
        <div className='title-container'>
          <h1 className='title'>Войти</h1>
        </div>
        <form className='form login-form'>
          <div className='form__block'>
            <div className='form__item-title'>Email</div>
            <input type='text' className='form__input' name='login' value={login} onChange={this.handleChange} />
          </div>
          <div className='form__block'>
            <div className='form__item-title'>Пароль</div>
            <input type='password' className='form__input' name='password' value={password} onChange={this.handleChange} />
          </div>
          <div className='form__block'>
            <p className='form__forgot-password'>Забыли пароль?</p>
          </div>
          <button className='form__button button' onClick={this.setPage}>Войти</button>
          <div className='form__switch'>
            <span className='form__to-title'>Новый пользователь? </span>
            <button className='form__to-button' onClick={formChange}>Регистрация</button>
          </div>
        </form>
      </div>
    )
  }
}
