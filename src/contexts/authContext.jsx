import PropTypes from 'prop-types';
import axios from 'axios';
import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [uuid, setUuid] = useState(false);
  const [token, setToken] = useState('');
  const [favorite, setFavorite] = useState(null);

  /*Création session avec Cookies */
  const loginUser = (mail, password) => {
    return axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/auth/logIn`, {
        email: mail,
        password,
      })
      .then((res) => {
        setEmail(res.data.email);
        setUuid(res.data.uuiduser);
        setToken(res.data.token);
        setFavorite(res.data.favorite_id);

        document.cookie = `user_token=${res.data.token};expires=${new Date(
          Date.now() + 1000 * 60 * 60 * 4
        )};SameSite=None`;
        return 'ValidateAuth';
      })
      .catch(() => {
        setEmail('');
        setUuid('');
        return 'Identifiants erronés';
      });
  };

  /*Création d'un utliisateur dans la BDD */
  const createUser = (mail, password) => {
    return axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/users/signIn`, {
        email: mail,
        password,
      })
      .then(() => {
        return 'ValidateLogin';
      })
      .catch(() => {
        return "Erreur au niveau de l'email ou du mot de passe";
      });
  };

  return (
    <AuthContext.Provider
      value={{
        loginUser,
        createUser,

        email,
        uuid,
        token,
        favorite,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.any,
};
