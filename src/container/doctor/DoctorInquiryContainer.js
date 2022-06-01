import React, { useEffect } from 'react';
import DoctorInquiry from '../../components/doctor/DoctorInquiry';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { getCookie } from '../../lib/cookie';
import { loadingStart, loadingFinish } from '../../modules/loading';
import { useParams } from 'react-router-dom';
import { patientGetSuccess, patientGetFailure } from '../../modules/patientGet';
import {
  inquiryConfirmFailure,
  inquiryConfirmSuccess,
  inquiryFailure,
  inquirySuccess,
} from '../../modules/inquiry';

function DoctorInquiryContainer() {
  const { patientGet, inquiry } = useSelector(({ patientGet, inquiry }) => ({
    patientGet: patientGet.patientGet,
    inquiry: inquiry.inquiry,
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

  useEffect(() => {
    async function getInquiryList() {
      let accessToken = getCookie('myAToken');
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

      try {
        const response = await axios.get(
          `https://docswant.zooneon.dev/api/v1/patient/${patient_Id}/requirement?page=1&size=3`,
        );
        dispatch(inquirySuccess(response.data.data));
      } catch (e) {
        dispatch(inquiryFailure(e));
      }
    }

    getInquiryList();
  }, [dispatch, patient_Id]);

  async function getConfirmInquiry(id) {
    let accessToken = getCookie('myAToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    try {
      await axios.get(
        `https://docswant.zooneon.dev/api/v1/patient/${patient_Id}/requirement/${id}`,
      );
      dispatch(inquiryConfirmSuccess(true));
    } catch (e) {
      dispatch(inquiryConfirmFailure(e));
    }
  }

  const onGetConfirmInquiry = (id) => {
    getConfirmInquiry(id);
  };

  return (
    <DoctorInquiry
      patientGet={patientGet}
      inquiry={inquiry}
      onGetConfirmInquiry={onGetConfirmInquiry}
    />
  );
}

export default DoctorInquiryContainer;
