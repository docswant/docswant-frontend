import React, { useEffect } from 'react';
import DoctorMain from '../../components/doctor/DoctorMain';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { getCookie } from '../../lib/cookie';
import {
  patientListFailure,
  patientListSuccess,
} from '../../modules/patientList';

function DoctorMainContainer() {
  const { patientList } = useSelector(({ patientList }) => ({
    patientList: patientList.patientList,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    async function onGetPatientList() {
      const accessToken = getCookie('myAToken');
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      try {
        const response = await axios.get('/api/v1/patient?page=1&size=3');
        dispatch(patientListSuccess(response.data.data));
      } catch (e) {
        dispatch(patientListFailure(e));
      }
    }
    onGetPatientList();
  }, [dispatch]);

  return <DoctorMain patientList={patientList} />;
}

export default DoctorMainContainer;
