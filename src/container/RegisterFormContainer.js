import React, { useEffect } from 'react';
import RegisterForm from '../components/auth/RegisterForm';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeField,
  initializeForm,
  registerFailure,
  registerSuccess,
} from '../modules/auth';
import {
  duplicateCodeFailure,
  duplicateCodeSuccess,
  duplicateUserFailure,
  duplicateUserSuccess,
} from '../modules/duplicate';
import axios from 'axios';

function RegisterFormContainer() {
  const { form, duplicateCode, duplicateUser } = useSelector(
    ({ auth, duplicate }) => ({
      form: auth.register,
      duplicateCode: duplicate.duplicateCode,
      duplicateUser: duplicate.duplicateUser,
    }),
  );
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

  async function getRegister() {
    const { code, username, password, name, major } = form;
    try {
      const response = await axios.post('/api/v1/doctor', {
        code,
        username,
        password,
        name,
        major,
      });
      dispatch(registerSuccess(response.data.data));
    } catch (e) {
      dispatch(registerFailure(e));
    }
  }
  async function getDuplicateCode() {
    try {
      const response = await axios.get(
        `/api/v1/doctor/validate?code=${form.code}`,
      );
      dispatch(duplicateCodeSuccess(response.data.data));
    } catch (e) {
      dispatch(duplicateCodeFailure(e));
    }
  }

  async function getDuplicateUser() {
    try {
      const response = await axios.get(
        `api/v1/account/exists?username=${form.username}`,
      );
      dispatch(duplicateUserSuccess(response.data.data));
    } catch (e) {
      dispatch(duplicateUserFailure(e));
    }
  }

  const onDuplicateCode = () => {
    getDuplicateCode();
  };

  const onDuplicateUser = () => {
    getDuplicateUser();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRegister();

    const { username, password, passwordConfirm, code, name, major } = form;

    if ([username, password, passwordConfirm, code, name, major].includes('')) {
      alert('빈 칸을 모두 입력하세요');
      return;
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
      onDuplicateCode={onDuplicateCode}
      onDuplicateUser={onDuplicateUser}
      onSubmit={onSubmit}
      duplicateCode={duplicateCode}
      duplicateUser={duplicateUser}
    />
  );
}

export default RegisterFormContainer;
