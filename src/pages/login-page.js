import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Login from '../components/login';
import Registration from '../components/registration';
import icon from '../img/big-logo.svg';
import { PAGES } from '../constants';
import '../scss/login-page.scss';
import { Redirect } from 'react-router-dom';

const LoginPage = ({ authorization }) => {
  const [isLogin, setIsLogin] = useState(true);

  const formChange = () => {
    setIsLogin(!isLogin);
  }

  return (
    <div className='login-page'>
      <div className='login-page__icon'>
        <img className='login-page__img' alt='big-logo' src={icon} />
      </div>
      <div className='login-page__map'>
        {
          isLogin
            ? <Login formChange={formChange} error={authorization.error.authorization} />
            : <Registration formChange={formChange} error={authorization.error.registration} />
        }
      </div>
      {authorization.isLoggedIn && <Redirect to={PAGES.map.link} />}
    </div>
  )
}

LoginPage.propTypes = {
  authorization: PropTypes.object
}

const mapStateToProps = function (state) {
  return {
    authorization: state.authorization
  }
}

export default connect(mapStateToProps)(LoginPage);