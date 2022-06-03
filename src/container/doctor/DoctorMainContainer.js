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
import { loadingFinish, loadingStart } from '../../modules/loading';
import { useParams } from 'react-router-dom';

function DoctorMainContainer() {
  const { patientList, patientDelete, user, loading } = useSelector(
    ({ user, patientList, loading }) => ({
      user: user.user,
      patientList: patientList.patientList,
      patientDelete: patientList.patientDelete,
      loading: loading.loading,
    }),
  );
  const dispatch = useDispatch();
  const { page_number } = useParams();

  async function onPatientDelete(username) {
    const accessToken = JSON.parse(localStorage.getItem('myAToken'));
    // const accessToken = getCookie('myAToken');
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
      const accessToken = JSON.parse(localStorage.getItem('myAToken'));
      // const accessToken = getCookie('myAToken');
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      dispatch(loadingStart(true));
      try {
        const response = await axios.get(
          `https://docswant.zooneon.dev/api/v1/patient?page=${page_number}&size=6`,
        );
        dispatch(patientListSuccess(response.data.data));
      } catch (e) {
        dispatch(patientListFailure(e));
      }
      dispatch(loadingFinish(false));
    }
    onGetPatientList();
  }, [dispatch, page_number]);

  useEffect(() => {
    if (patientDelete === true) {
      window.location.reload(`/doctor/mainpage/${page_number}/${user.sub}`);
    }
  }, [patientDelete, user, page_number]);

  return (
    <DoctorMain
      patientList={patientList}
      onGetPatientDelete={onGetPatientDelete}
      loading={loading}
    />
  );
}

export default DoctorMainContainer;
