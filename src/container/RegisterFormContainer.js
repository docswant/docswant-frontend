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

  async function register() {
    let registerForm = {
      code: form.code,
      username: form.username,
      password: form.password,
      name: form.name,
      major: form.major,
    };
    console.log(registerForm);
    try {
      const response = await axios.post('/api/vi/doctor', { registerForm });

      dispatch(registerSuccess(response.data.data));
    } catch (e) {
      dispatch(registerFailure(e));
    }
  }
  async function getDuplicateCode(code) {
    try {
      const response = await axios.get(`/api/v1/doctor/validate?code=${code}`);
      dispatch(duplicateCodeSuccess(response.data.data));
    } catch (e) {
      dispatch(duplicateCodeFailure(e));
    }
  }

  async function getDuplicateUser(username) {
    try {
      const response = await axios.get(
        `api/v1/account/exists?username=${username}`,
      );
      dispatch(duplicateUserSuccess(response.data.data));
    } catch (e) {
      dispatch(duplicateUserFailure(e));
    }
  }

  const onDuplicateCode = () => {
    getDuplicateCode(form.code);
  };

  const onDuplicateUser = () => {
    getDuplicateUser(form.username);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { username, password, passwordConfirm, code, name, major } = form;

    if ([username, password, passwordConfirm, code, name, major].includes('')) {
      alert('빈 칸을 모두 입력하세요');
      return;
    }
    if (
      duplicateCode === false ||
      duplicateUser === true ||
      duplicateCode === null ||
      duplicateUser === null
    ) {
      alert('중복 검사를 진행해 주세요');
      return;
    }

    register();
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
