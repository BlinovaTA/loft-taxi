import React, { Component } from 'react';
import Login from '../components/login';
import Registration from '../components/registration';
import icon from '../img/big-logo.svg';
import '../scss/login-page.scss';

export default class LoginPage extends Component {
  state = { isLogin: true };

  formChange = () => {
    const { isLogin } = this.state;
    this.setState({ isLogin: !isLogin });
  }

  render() {
    const { isLogin } = this.state;
    const { setPage } = this.props;

    return (
      <div className='login-page'>
        <div className='login-page__icon'>
          <img className='login-page__img' alt='big-logo' src={icon} />
        </div>
        <div className='login-page__map'>
          {
            isLogin
              ? <Login formChange={this.formChange} setPage={setPage} />
              : <Registration formChange={this.formChange} setPage={setPage} />
          }
        </div>
      </div>
    )
  }
}
