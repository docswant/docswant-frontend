import React, { useEffect } from 'react';
import LoginForm from '../../components/auth/LoginForm';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeField,
  initializeForm,
  loginFailure,
  loginSucess,
} from '../../modules/auth';
import axios from 'axios';
import jwt from 'jwt-decode';
import { setCookie } from '../../lib/cookie';
import { useNavigate } from 'react-router-dom';
import { stageUser, stageUserError } from '../../modules/user';

function LoginFormContainer() {
  const { form, user, loginForm, loginError } = useSelector(
    ({ auth, user }) => ({
      form: auth.login,
      loginForm: auth.loginForm,
      loginError: auth.loginError,
      user: user.user,
    }),
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        {
          username,
          password,
        },
      );
      let refresh = response.data.data.refreshToken;
      let access = response.data.data.accessToken;
      setCookie('myRToken', refresh, {
        path: '/',
        secure: true,
        sameSite: 'none',
      });
      setCookie('myAToken', access, {
        path: '/',
        secure: true,
        sameSite: 'none',
      });
      dispatch(loginSucess(response.data.data.accountType));
      dispatch(stageUser(jwt(access)));
    } catch (e) {
      dispatch(loginFailure(e));
      dispatch(stageUserError(e));
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
    if (user && loginForm === 'ACCOUNT_PATIENT') {
      navigate(`/patient/mainpage/${user.sub}`);
    } else if (user && loginForm === 'ACCOUNT_DOCTOR') {
      navigate(`/doctor/mainpage/${user.sub}`);
    }
  }, [loginForm, navigate, user]);

  return (
    <LoginForm
      form={form}
      loginError={loginError}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}

export default LoginFormContainer;
