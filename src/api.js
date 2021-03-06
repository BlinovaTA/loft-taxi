export const setLogIn = async (email, password) => {
  return fetch('https://loft-taxi.glitch.me/auth', {
    method: 'POST',
    body: JSON.stringify({
      "email": email,
      "password": password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
};

export const setRegistrationToServer = async (email, password, name) => {
  return fetch('https://loft-taxi.glitch.me/register', {
    method: 'POST',
    body: JSON.stringify({
      "email": email,
      "password": password,
      "name": name,
      "surname": name
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
};

export const setCardDataToServer = async (cardNumber, expiryDate, cardName, cvc, token) => {
  return fetch('https://loft-taxi.glitch.me/card', {
    method: 'POST',
    body: JSON.stringify({
      "cardNumber": cardNumber,
      "expiryDate": expiryDate,
      "cardName": cardName,
      "cvc": cvc,
      "token": token
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => data.success);
};

export const getCardDataFromServer = async (token) => {
  return fetch(`https://loft-taxi.glitch.me/card?token=${token}`)
    .then(res => res.json());
};

export const getAddressListFromServer = async () => {
  return fetch('https://loft-taxi.glitch.me/addressList')
    .then(res => res.json());
};

export const getRouteFromServer = async (startAddress, endAddress) => {
  return fetch(`https://loft-taxi.glitch.me/route?address1=${startAddress}&address2=${endAddress}`)
    .then(res => res.json());
};