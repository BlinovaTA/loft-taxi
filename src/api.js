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
    .then(res => res.json())
    .then(data => data);
};

export const setRegistration = async (email, password, name) => {
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
    .then(res => res.json())
    .then(data => data);
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
    .then(res => res.json())
    .then(data => data);
};