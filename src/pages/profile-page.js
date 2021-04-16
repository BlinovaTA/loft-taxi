import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { setCardData } from '../store/actions/card';
import { getCardDataFromLocalStorage } from '../localstorage';
import Header from '../components/header';
import Input from '../components/input';
import smallLogo from '../img/small-logo.svg';
import chip from '../img/chip.svg';
import circles from '../img/circles.svg';
import { PAGES } from '../constants';
import '../scss/form.scss';
import '../scss/card-layout.scss';

const Profile = ({ useDispatchHook = useDispatch, token, error }) => {
  const dispatch = useDispatchHook();
  const { register, handleSubmit } = useForm();
  const [isEdit, setIsEdit] = useState(true);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cardName, setCardName] = useState('');
  const [cvc, setCVC] = useState('');

  useEffect(() => {
    const localStorageData = getCardDataFromLocalStorage();

    setCardNumber(localStorageData.cardNumber);
    setExpiryDate(localStorageData.expiryDate);
    setCardName(localStorageData.cardName);
    setCVC(localStorageData.cvc);
  }, []);

  const onSubmit = (data) => {
    const { cardNumber, expiryDate, cardName, cvc } = data;

    dispatch(setCardData(cardNumber, expiryDate, cardName, cvc, token));
    setIsEdit(false);
  };

  return (
    <div className='page-container'>
      <Header page={PAGES.profile.key} />
      <div className='page-content'>
        <div className='container'>
          <div className={`wrapper ${isEdit ? 'edit-profile-wrapper' : 'gotomap-profile-wrapper'}`}>
            <h1 className='title'>Профиль</h1>
            <p className='subtitle'>
              {
                isEdit ? 'Введите платежные данные' :
                  error ? error :
                    'Платёжные данные обновлены. Теперь вы можете заказывать такси.'
              }
            </p>
            {
              isEdit
                ?
                <form className='form profile-form' onSubmit={handleSubmit(onSubmit)}>
                  <div className='form__row'>
                    <div className='form__col'>
                      <Input title='Имя владельца' name='cardName' type='text' register={register} value={cardName} />
                      <Input title='Номер карты' name='cardNumber' type='text' register={register} value={cardNumber} />
                      <div className='form__row'>
                        <div className='form__col'>
                          <Input title='MM/YY' name='expiryDate' type='text' register={register} value={expiryDate} />
                        </div>
                        <div className='form__col'>
                          <Input title='CVC' name='cvc' type='text' register={register} value={cvc} maxLength={3} />
                        </div>
                      </div>
                    </div>
                    <div className='form__col'>
                      <div className='card-layout'>
                        <div className='card-layout__header'>
                          <img className='card-layout__small-logo' alt='smallLogo' src={smallLogo} />
                          <div className='card-layout__card-expiry-date'>{expiryDate}</div>
                        </div>
                        <div className='card-layout__content'>
                          <p>{cardNumber}</p>
                        </div>
                        <div className='card-layout__footer'>
                          <img className='card-layout__chip' alt='chip' src={chip} />
                          <img className='card-layout__circles' alt='circles' src={circles} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button data-testid='save' className='button' type='submit'>Сохранить</button>
                </form>
                :
                <Link className='button' to={PAGES.map.link}>Перейти на карту</Link>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

Profile.propTypes = {
  useDispatchHook: PropTypes.func,
  token: PropTypes.string,
  error: PropTypes.string
}

const mapStateToProps = function (state) {
  return {
    token: state.authorization.token,
    error: state.card.error
  }
}

export default connect(mapStateToProps)(Profile);
