import React from 'react';
import PropTypes from 'prop-types';
import { registration } from "../store/actions/authorization";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Alert from 'antd/lib/alert';
import Input from './input';
import '../scss/form.scss';
import '../scss/button.scss';

const Registration = ({ useDispatchHook = useDispatch, formChange, error }) => {
  const dispatch = useDispatchHook();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { email, password, name } = data;
    dispatch(registration(email, password, name));
  };

  return (
    <div className='wrapper registration-wrapper'>
      <div className='title-container'>
        <h1 className='title'>Регистрация</h1>
      </div>
      <form className='form registration-form' onSubmit={handleSubmit(onSubmit)}>
        {error && <Alert className='form__block' banner message={error} type='error' showIcon />}
        <Input title='Email*' name='email' type='email' register={register} />
        <Input title='Как вас зовут?*' name='name' type='text' register={register} />
        <Input title='Придумайте пароль*' name='password' type='password' register={register} />
        <button data-testid='registration' className='form__button button' type='submit'>Зарегистрироваться</button>
        <div className='form__switch'>
          <span className='form__to-title'>Уже зарегистрированны?</span>
          <button className='form__to-button' onClick={formChange}>Войти</button>
        </div>
      </form>
    </div>
  )
}

Registration.propTypes = {
  useDispatchHook: PropTypes.func,
  formChange: PropTypes.func,
  error: PropTypes.string
}

export default Registration;
