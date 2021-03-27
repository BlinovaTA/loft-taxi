import React, { createContext, useState } from 'react';

export const AuthorizationContext = createContext();

export const AuthorizatonProvider = ({ children }) => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (email, password) => {
    if ((email !== 'test@test.com') || (password !== '123')) {
      return;
    }

    setIsLoggedIn(true);

    return true;
  }

  const logout = () => {
    setIsLoggedIn(false);
  }

  return (
    <AuthorizationContext.Provider value={{ login, logout, isLoggedIn }}>
      {children}
    </AuthorizationContext.Provider>
  )
}