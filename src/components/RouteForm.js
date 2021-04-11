import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select'
import { getRoute } from '../store/actions/mapRoute';
import { setStartAddress, setEndAddress } from '../store/actions/address';
import '../scss/route-form.scss';
import '../scss/select.scss';

class RouteForm extends Component {
  static propTypes = {
    addressList: PropTypes.array,
    startAddress: PropTypes.string,
    endAddress: PropTypes.string
  }

  startAddressChange = (e) => {
    this.props.setStartAddress(e ? e.value : '');
  }

  endAddressChange = (e) => {
    this.props.setEndAddress(e ? e.value : '');
  }

  sendOrder = (e) => {
    e.preventDefault();

    const { startAddress, endAddress } = this.props;

    if (startAddress !== '' && endAddress !== '') {
      this.props.getRoute(startAddress, endAddress);
    }
  }

  render() {
    const { addressList, startAddress, endAddress, isPaymentData } = this.props;

    const style = {
      control: base => ({
        ...base,
        border: 0,
        boxShadow: "none"
      })
    };

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
            <button data-testid="order" type='submit' className='form__button button'>Заказать</button>
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
    startAddress: state.address.startAddress,
    endAddress: state.address.endAddress,
    isPaymentData: state.card.isPaymentData
  }
}

export default connect(mapStateToProps, { setStartAddress, setEndAddress, getRoute })(RouteForm)
