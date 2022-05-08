import React, { useEffect } from 'react';
import LoginForm from '../components/auth/LoginForm';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeField,
  initializeForm,
  loginFailure,
  loginSucess,
} from '../modules/auth';
import axios from 'axios';
import jwt from 'jwt-decode';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

function LoginFormContainer() {
  const { form, loginForm, loginError } = useSelector(({ auth }) => ({
    form: auth.login,
    loginForm: auth.loginForm,
    loginError: auth.loginError,
  }));
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const navigate = useNavigate();

  const setCookie = (name, value, option) => {
    return cookies.set(name, value, { ...option });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  async function login() {
    const { username, password } = form;
    try {
      const response = await axios.post(
        'https://docswant.zooneon.dev/api/v1/login',
        { username, password },
      );
      let token = response.data.data.refreshToken;
      setCookie('myToken', token, {
        path: '/',
        secure: true,
        sameSite: 'none',
      });
      dispatch(loginSucess(jwt(token)));
    } catch (e) {
      dispatch(loginFailure(e));
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    login();
  };

  useEffect(() => {
    dispatch(
      initializeForm({
        form: 'login',
      }),
    );
  }, [dispatch]);

  useEffect(() => {
    if (loginForm) {
      navigate(`/patient/mypage/${loginForm.sub}`);
    }
  }, [loginForm, navigate]);

  return (
    <LoginForm
      form={form}
      loginForm={loginForm}
      loginError={loginError}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}

export default LoginFormContainer;
