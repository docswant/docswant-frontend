import React, { useEffect } from 'react';
import RegisterForm from '../components/auth/RegisterForm';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeField,
  duplicateFailure,
  duplicateSuccess,
  initializeForm,
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

  async function getDuplicate(code) {
    try {
      const response = await axios.get(
        `https://docswant.zooneon.dev/api/v1/doctor/validate?code=${code}`,
      );
      console.log(response.data);
    } catch (e) {
      duplicateFailure(e);
      console.log(e);
    }
  }

  const onDuplicate = () => {
    getDuplicate(form.code);
  };

  const onSubmit = (e) => {
    e.preventDefault();

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
      onMajor={onMajor}
      onDuplicate={onDuplicate}
      onSubmit={onSubmit}
    />
  );
}

export default RegisterFormContainer;
