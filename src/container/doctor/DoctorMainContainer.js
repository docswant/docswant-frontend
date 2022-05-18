import React, { useEffect } from 'react';
import DoctorMain from '../../components/doctor/DoctorMain';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { getCookie } from '../../lib/cookie';
import {
  patientDeleteFailure,
  patientDeleteSuccess,
  patientListFailure,
  patientListSuccess,
} from '../../modules/patientList';

function DoctorMainContainer() {
  const { patientList, patientDelete, user } = useSelector(
    ({ user, patientList }) => ({
      user: user.user,
      patientList: patientList.patientList,
      patientDelete: patientList.patientDelete,
    }),
  );
  const dispatch = useDispatch();

  async function onPatientDelete(username) {
    const accessToken = getCookie('myAToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    try {
      await axios.delete(
        `https://docswant.zooneon.dev/api/v1/patient/${username}`,
      );
      dispatch(patientDeleteSuccess(true));
    } catch (e) {
      dispatch(patientDeleteFailure(e));
    }
  }

  const onGetPatientDelete = (username) => {
    if (
      // eslint-disable-next-line no-restricted-globals
      confirm('환자를 삭제하시겠습니까?') === true
    ) {
      onPatientDelete(username);
    } else {
      return;
    }
  };

  useEffect(() => {
    async function onGetPatientList() {
      const accessToken = getCookie('myAToken');
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      try {
        const response = await axios.get('/api/v1/patient?page=1&size=6');
        dispatch(patientListSuccess(response.data.data));
      } catch (e) {
        dispatch(patientListFailure(e));
      }
    }
    onGetPatientList();
  }, [dispatch]);

  useEffect(() => {
    if (patientDelete === true) {
      window.location.reload(`/doctor/mainpage/${user.sub}`);
    }
  }, [patientDelete, user]);

  return (
    <DoctorMain
      patientList={patientList}
      onGetPatientDelete={onGetPatientDelete}
    />
  );
}

export default DoctorMainContainer;