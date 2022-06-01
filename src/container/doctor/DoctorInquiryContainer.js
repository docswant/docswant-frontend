import React, { useEffect } from 'react';
import DoctorInquiry from '../../components/doctor/DoctorInquiry';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { getCookie } from '../../lib/cookie';
import { loadingStart, loadingFinish } from '../../modules/loading';
import { useParams } from 'react-router-dom';
import { patientGetSuccess, patientGetFailure } from '../../modules/patientGet';

function DoctorInquiryContainer() {
  const { patientGet } = useSelector(({ patientGet }) => ({
    patientGet: patientGet.patientGet,
  }));
  const dispatch = useDispatch();
  const { patient_Id } = useParams();

  useEffect(() => {
    async function onGetPatient() {
      dispatch(loadingStart(true));
      const accessToken = getCookie('myAToken');
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      try {
        const response = await axios.get(`/api/v1/patient/${patient_Id}`);
        dispatch(patientGetSuccess(response.data.data));
      } catch (e) {
        dispatch(patientGetFailure(e));
      }
      dispatch(loadingFinish(false));
    }
    onGetPatient();
  }, [dispatch, patient_Id]);

  async function getInquiryList(id) {
    let accessToken = getCookie('myAToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    try {
      const response = await axios.get(
        `https://docswant.zooneon.dev/api/v1/patient/${patient_Id}/requirement/${id}`,
      );
      console.log(response.data.data);
    } catch (e) {}
  }

  const onGetInquiryList = (id) => {
    getInquiryList(id);
  };

  return (
    <DoctorInquiry
      patientGet={patientGet}
      onGetInquiryList={onGetInquiryList}
    />
  );
}

export default DoctorInquiryContainer;