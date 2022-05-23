import React, { useEffect } from 'react';
import PatientModify from '../../components/patient/PatientModify';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  duplicatePatientFailure,
  duplicatePatientSuccess,
} from '../../modules/duplicate';
import {
  changeField,
  initializeForm,
  patientModifyFailure,
  patientModifySuccess,
} from '../../modules/auth';
import _ from 'lodash';
import { getCookie, removeCookie } from '../../lib/cookie';

function PatientModifyContainer() {
  const { form, duplicatePatient, modifySuccess } = useSelector(
    ({ auth, duplicate }) => ({
      form: auth.modify,
      modifySuccess: auth.modifySuccess,
      duplicatePatient: duplicate.duplicatePatient,
    }),
  );
  const dispatch = useDispatch();
  const { user_Id } = useParams();

  async function getPatientDuplicate() {
    try {
      const response = await axios.get(
        `/api/v1/account/exists/${form.username}`,
      );
      dispatch(duplicatePatientSuccess(response.data.data));
    } catch (e) {
      dispatch(duplicatePatientFailure(e));
    }
  }

  const onDuplicatePatient = () => {
    getPatientDuplicate();
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      changeField({
        form: 'modify',
        key: name,
        value,
      }),
    );
  };

  async function getModifyPatient() {
    let accessToken = getCookie('myAToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    let editObject = _.pickBy(form, (value, key) => {
      return !_.isEmpty(value);
    });
    console.log(editObject);
    try {
      await axios.patch(
        `https://docswant.zooneon.dev/api/v1/patient/${user_Id}`,
        editObject,
      );
      removeCookie('myAToken');
      removeCookie('myRToken');
      dispatch(patientModifySuccess(true));
    } catch (e) {
      dispatch(patientModifyFailure(e));
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getModifyPatient();
  };
  useEffect(() => {
    dispatch(initializeForm({ form: 'modify' }));
  }, [dispatch]);

  useEffect(() => {
    if (modifySuccess === true) {
      window.location.replace('/');
    }
  }, [modifySuccess]);

  return (
    <PatientModify
      duplicatePatient={duplicatePatient}
      onChange={onChange}
      form={form}
      onDuplicatePatient={onDuplicatePatient}
      onSubmit={onSubmit}
    />
  );
}

export default PatientModifyContainer;
