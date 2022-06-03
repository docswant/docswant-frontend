import React, { useEffect } from 'react';
import DoctorRegisterPat from '../../components/doctor/DoctorRegisterPat';
import { useSelector, useDispatch } from 'react-redux';
import {
  initializeRegister,
  registerChange,
  registerPatientFailure,
  registerPatientSuccess,
} from '../../modules/registerPatient';
import axios from 'axios';
import {
  duplicateDoctorFailure,
  duplicateDoctorSuccess,
} from '../../modules/duplicate';
import { getCookie } from '../../lib/cookie';

function DoctorRegisterPatContainer({ onOpen }) {
  const { registerP, duplicateDoctor, registerSuccess, user } = useSelector(
    ({ registerPatient, duplicate, user }) => ({
      user: user.user,
      registerSuccess: registerPatient.registerSuccess,
      registerP: registerPatient.registerP,
      duplicateDoctor: duplicate.duplicateDoctor,
    }),
  );
  const dispatch = useDispatch();

  const onChangeField = (e) => {
    const { name, value } = e.target;
    dispatch(
      registerChange({
        form: 'registerP',
        key: name,
        value,
      }),
    );
  };

  useEffect(() => {
    dispatch(
      initializeRegister({
        form: 'registerP',
      }),
    );
  }, [dispatch]);

  async function getDoctorDuplicate() {
    try {
      const response = await axios.get(
        `/api/v1/account/exists/${registerP.code}`,
      );
      dispatch(duplicateDoctorSuccess(response.data.data));
    } catch (e) {
      dispatch(duplicateDoctorFailure(e));
    }
  }

  async function onRegisterPatient() {
    const accessToken = getCookie('myAToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    try {
      await axios.post(
        'https://docswant.zooneon.dev/api/v1/patient',
        registerP,
      );
      dispatch(registerPatientSuccess(true));
    } catch (e) {
      dispatch(registerPatientFailure(e));
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    onRegisterPatient();
  };

  const onDuplicateDoctor = () => {
    getDoctorDuplicate();
  };

  useEffect(() => {
    if (registerSuccess === true) {
      window.location.reload(`/doctor/mainpage/${user.sub}`);
    }
  }, [registerSuccess, user]);

  useEffect(() => {
    dispatch(initializeRegister('registerP'));
  }, [dispatch]);

  return (
    <DoctorRegisterPat
      onOpen={onOpen}
      registerP={registerP}
      onChangeField={onChangeField}
      onDuplicateDoctor={onDuplicateDoctor}
      duplicateDoctor={duplicateDoctor}
      onSubmit={onSubmit}
    />
  );
}

export default DoctorRegisterPatContainer;
