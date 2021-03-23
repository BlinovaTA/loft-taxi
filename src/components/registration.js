import React, { Component } from 'react';
import { PAGES } from '../constants';
import Input from './input';
import '../scss/form.scss';
import '../scss/button.scss';

export default class Registration extends Component {
  state = { login: '', password: '', name: '' };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  setPage = () => {
    this.props.setPage(PAGES.map.key);
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
          <Input title='Email*' name='login' type='email' value={login} onChange={this.handleChange}/>
          <Input title='Как вас зовут?*' name='name' type='text' value={name} onChange={this.handleChange}/>
          <Input title='Придумайте пароль*' name='password' type='password' value={password} onChange={this.handleChange}/>
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
