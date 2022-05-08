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

function LoginFormContainer() {
  const { form } = useSelector(({ auth }) => ({
    form: auth.login,
  }));
  const dispatch = useDispatch();

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
      dispatch(loginSucess(response.data.data));
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

  return <LoginForm form={form} onChange={onChange} onSubmit={onSubmit} />;
}

export default LoginFormContainer;
