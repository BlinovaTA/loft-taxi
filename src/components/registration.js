import React, { Component } from 'react';
import { pages } from '../constants';
import '../scss/form.scss';
import '../scss/button.scss';

export default class Registration extends Component {
  state = { login: '', password: '', name: '' };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  setPage = () => {
    this.props.setPage(pages.map.key);
  }

  render() {
    const { login, password, name } = this.state;
    const { formChange } = this.props;

    return (
      <div className='wrapper registration-wrapper'>
        <div className='title-container'>
          <h1 className='title'>Регистрация</h1>
        </div>
        <form className='form registration-form'>
          <label className='form__block'>
            <div className='form__item-title'>Email*</div>
            <input type='text' className='form__input' name='login' value={login} onChange={this.handleChange} />
          </label>
          <label className='form__block'>
            <div className='form__item-title'>Как вас зовут?*</div>
            <input type='text' className='form__input' name='name' value={name} onChange={this.handleChange} />
          </label>
          <label className='form__block form__block--last'>
            <div className='form__item-title'>Придумайте пароль*</div>
            <input type='password' className='form__input' name='password' value={password} onChange={this.handleChange} />
          </label>
          <button className='form__button button' onClick={this.setPage}>Зарегистрироваться</button>
          <div className='form__switch'>
            <span className='form__to-title'>Уже зарегистрированны?</span>
            <button className='form__to-button' onClick={formChange}>Войти</button>
          </div>
        </form>
      </div>
    )
  }
}
