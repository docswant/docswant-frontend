import React, { useEffect } from 'react';
import RegisterForm from '../components/auth/RegisterForm';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeField,
  initializeForm,
  registerFailure,
  registerSuccess,
} from '../modules/auth';
import axios from 'axios';

function RegisterFormContainer() {
  const { form } = useSelector(({ auth }) => ({
    form: auth.register,
  }));
  const dispatch = useDispatch();

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      }),
    );
  };

  const onMajor = (medicalText) => {
    dispatch(
      changeField({
        form: 'register',
        key: 'major',
        value: medicalText,
      }),
    );
  };

  async function register() {
    try {
      const response = await axios.post('/api/v1/doctors', form);
      dispatch(registerSuccess(response.data));
    } catch (e) {
      dispatch(registerFailure(e));
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();

    register();

    const { username, password, passwordConfirm, code, name, major } = form;

    if ([username, password, passwordConfirm, code, name, major].includes('')) {
      alert('빈 칸을 모두 입력하세요');
    }
  };

  useEffect(() => {
    dispatch(
      initializeForm({
        form: 'register',
      }),
    );
  }, [dispatch]);

  return (
    <RegisterForm
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      onMajor={onMajor}
    />
  );
}

export default RegisterFormContainer;
