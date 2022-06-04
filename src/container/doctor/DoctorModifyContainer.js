import React, { useEffect } from 'react';
import DoctorModify from '../../components/doctor/DoctorModify';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeField,
  doctorModifyFailure,
  doctorModifySuccess,
  initializeForm,
} from '../../modules/auth';
import axios from 'axios';
import {
  duplicateDoctorFailure,
  duplicateDoctorSuccess,
} from '../../modules/duplicate';
import _ from 'lodash';
import { useParams } from 'react-router-dom';

function DoctorModifyContainer() {
  const { form, duplicateDoctor, doctorModify } = useSelector(
    ({ auth, duplicate }) => ({
      form: auth.modifyDoctor,
      duplicateDoctor: duplicate.duplicateDoctor,
      doctorModify: auth.doctorModify,
    }),
  );
  const dispatch = useDispatch();
  const { user_Id } = useParams();

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      changeField({
        form: 'modifyDoctor',
        key: name,
        value,
      }),
    );
  };

  const onMajor = (medicalText) => {
    dispatch(
      changeField({
        form: 'modifyDoctor',
        key: 'major',
        value: medicalText,
      }),
    );
  };

  async function getDoctorDuplicate() {
    try {
      const response = await axios.get(
        `/api/v1/account/exists/${form.username}`,
      );
      dispatch(duplicateDoctorSuccess(response.data.data));
    } catch (e) {
      dispatch(duplicateDoctorFailure(e));
    }
  }

  const onDuplicateDoctor = () => {
    getDoctorDuplicate();
  };

  async function getModifyDoctor() {
    const accessToken = JSON.parse(localStorage.getItem('myAToken'));
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    let editObject = _.pickBy(form, (value, key) => {
      return !_.isEmpty(value);
    });
    try {
      await axios.patch(
        `https://docswant.zooneon.dev/api/v1/doctor/${user_Id}`,
        editObject,
      );
      dispatch(doctorModifySuccess(true));
    } catch (e) {
      dispatch(doctorModifyFailure(e));
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const { username, password, passwordConfirm, major } = form;

    if ([username, password, passwordConfirm, major].includes('')) {
      alert('빈 칸을 모두 입력하세요');
      return;
    }

    if (duplicateDoctor === null || duplicateDoctor === null) {
      alert('중복검사를 해주세요');
      return;
    }

    getModifyDoctor();
  };

  useEffect(() => {
    dispatch(initializeForm('modifyDoctor'));
  }, [dispatch]);

  useEffect(() => {
    if (doctorModify === true) {
      window.location.replace('/');
    }
  }, [doctorModify]);

  return (
    <DoctorModify
      form={form}
      duplicateDoctor={duplicateDoctor}
      onChange={onChange}
      onSubmit={onSubmit}
      onMajor={onMajor}
      onDuplicateDoctor={onDuplicateDoctor}
    />
  );
}

export default DoctorModifyContainer;
