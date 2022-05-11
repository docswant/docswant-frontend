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
import { useNavigate } from 'react-router-dom';

function RegisterFormContainer() {
  const { form, duplicateCode, duplicateUser, registerForm, registerError } =
    useSelector(({ auth, duplicate }) => ({
      form: auth.register,
      registerForm: auth.registerForm,
      registerError: auth.registerError,
      duplicateCode: duplicate.duplicateCode,
      duplicateUser: duplicate.duplicateUser,
    }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    const { code, username, password, major, name } = form;
    try {
      const response = await axios.post(
        'https://docswant.zooneon.dev/api/v1/doctor',
        {
          code,
          username,
          password,
          major,
          name,
        },
      );
      dispatch(registerSuccess(response.data.data));
    } catch (e) {
      dispatch(registerFailure(e));
    }
  }
  async function getDuplicateCode() {
    try {
      const response = await axios.get(`/api/v1/doctor/validate/${form.code}`);
      dispatch(duplicateCodeSuccess(response.data.data));
    } catch (e) {
      dispatch(duplicateCodeFailure(e));
    }
  }

  async function getDuplicateUser() {
    try {
      const response = await axios.get(
        `api/v1/account/exists/${form.username}`,
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

    if (duplicateCode === null || duplicateUser === null) {
      alert('중복검사를 해주세요');
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

  useEffect(() => {
    if (registerForm) {
      navigate('/');
    } else if (registerError) {
      alert('아이디 또는 의사코드를 확인해주세요');
    }
  }, [registerForm, registerError, navigate]);

  return (
    <RegisterForm
      form={form}
      onChange={onChange}
      registerError={registerError}
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
