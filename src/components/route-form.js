import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from "classnames";
import Select from 'react-select'
import { getRoute } from '../store/actions/mapRoute';
import '../scss/route-form.scss';
import '../scss/select.scss';

class RouteForm extends Component {
  static propTypes = {
    addressList: PropTypes.array
  }

  state = {
    startAddress: '',
    endAddress: ''
  }

  startAddressChange = (e) => {
    const startAddress = e ? e.value : '';
    this.setState({ startAddress });
  }

  endAddressChange = (e) => {
    const endAddress = e ? e.value : '';
    this.setState({ endAddress });
  }

  sendOrder = (e) => {
    e.preventDefault();

    const { startAddress, endAddress } = this.state;

    this.props.getRoute(startAddress, endAddress);
  }

  render() {
    const { addressList, isPaymentData } = this.props;
    const { startAddress, endAddress } = this.state;

    const style = {
      control: base => ({
        ...base,
        border: 0,
        boxShadow: "none"
      })
    };

    const disabled = startAddress === '' || endAddress === '';

    return (
      <form className='route-form' onSubmit={this.sendOrder}>
        {isPaymentData
          ?
          <>
            <div className='selects-wrapper'>
              <div className='item-wrapper' data-testid="from">
                <Select
                  className='select'
                  isClearable={true}
                  options={addressList.filter(item => item.value !== startAddress && item.value !== endAddress)}
                  placeholder='Откуда'
                  styles={style}
                  onChange={this.startAddressChange}
                />
              </div>
              <div className='item-wrapper' data-testid="to">
                <Select
                  className='select'
                  isClearable={true}
                  options={addressList.filter(item => item.value !== endAddress && item.value !== startAddress)}
                  placeholder='Куда'
                  styles={style}
                  onChange={this.endAddressChange}
                />
              </div>
            </div>
            <button
              data-testid="order"
              type='submit'
              className={classNames('form__button', 'button', { ['button--disabled']: disabled })}
              disabled={disabled}
            >
              Заказать
            </button>
          </>
          :
          <div className="route-form__no-payment-data" data-testid="no-payment" >Для заказа введите платежные данные на странице <b>Профиль</b></div>}
      </form>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    addressList: state.address.addressList,
    isPaymentData: state.card.isPaymentData
  }
}

export default connect(mapStateToProps, { getRoute })(RouteForm)
