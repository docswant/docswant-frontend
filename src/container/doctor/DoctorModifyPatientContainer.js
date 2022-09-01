import React, { useEffect } from 'react';
import DoctorModifyPatient from '../../components/doctor/DoctorModifyPatient';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeField,
  doctorModifyPatientFailure,
  doctorModifyPatientSuccess,
  initializeForm,
} from '../../modules/auth';
import { getCookie } from '../../lib/cookie';
import axios from 'axios';
import _ from 'lodash';
import { useParams } from 'react-router-dom';

function DoctorModifyPatientContainer({ onUpdate, code, obj }) {
  const { form, modifyPatientClear } = useSelector(({ auth }) => ({
    form: auth.modifyPatient,
    modifyPatientClear: auth.modifyPatientClear,
  }));
  const dispatch = useDispatch();
  const { user_Id } = useParams();

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      changeField({
        form: 'modifyPatient',
        key: name,
        value,
      }),
    );
  };

  async function getDoctorModifyPatient() {
    // let accessToken = getCookie('myAToken');
    const accessToken = JSON.parse(localStorage.getItem('myAToken'));
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    let editObject = _.pickBy(form, (value, key) => {
      return !_.isEmpty(value);
    });

    try {
      await axios.patch(
        `https://docswant.zooneon.dev/api/v1/patient/${code}`,
        editObject,
      );
      dispatch(doctorModifyPatientSuccess(true));
    } catch (e) {
      dispatch(doctorModifyPatientFailure(e));
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    // const {
    //   hospitalizationDate,
    //   surgeryDate,
    //   dischargeDate,
    //   diseaseName,
    //   hospitalRoom,
    // } = form;

    // if (
    //   [
    //     hospitalizationDate,
    //     surgeryDate,
    //     dischargeDate,
    //     diseaseName,
    //     hospitalRoom,
    //   ].includes('')
    // ) {
    //   alert('빈 칸을 모두 입력하세요');
    //   return;
    // }
    getDoctorModifyPatient();
  };

  useEffect(() => {
    dispatch(initializeForm('modifyPatient'));
  }, [dispatch]);

  useEffect(() => {
    if (modifyPatientClear === true) {
      window.location.replace(`/doctor/mainpage/1/${user_Id}`);
    }
  }, [modifyPatientClear, user_Id]);

  return (
    <DoctorModifyPatient
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      onUpdate={onUpdate}
      obj={obj}
    />
  );
}

export default DoctorModifyPatientContainer;
