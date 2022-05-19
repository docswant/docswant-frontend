import React, { useEffect } from 'react';
import DoctorList from '../../components/doctor/DoctorList';
import { useSelector, useDispatch } from 'react-redux';
import { getCookie } from '../../lib/cookie';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { patientGetFailure, patientGetSuccess } from '../../modules/patientGet';
import {
  questionDeleteFailure,
  questionDeleteSuccess,
  questionListFailure,
  questionListSuccess,
} from '../../modules/questionList';
import { loadingFinish, loadingStart } from '../../modules/loading';

function DoctorListContainer() {
  const { patientGet, questionList, questionDelete, loading } = useSelector(
    ({ patientGet, questionList, loading }) => ({
      patientGet: patientGet.patientGet,
      questionList: questionList.questionList,
      questionDelete: questionList.questionDelete,
      loading: loading.loading,
    }),
  );
  const dispatch = useDispatch();
  const { patient_Id } = useParams();

  async function onDeleteQuestion(id) {
    const accessToken = getCookie('myAToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    try {
      await axios.delete(
        `https://docswant.zooneon.dev/api/v1/patient/${patient_Id}/question/${id}`,
      );
      dispatch(questionDeleteSuccess(true));
    } catch (e) {
      dispatch(questionDeleteFailure(e));
    }
  }

  const onGetDeleteQuestion = (id) => {
    if (
      // eslint-disable-next-line no-restricted-globals
      confirm('설문을 삭제하시겠습니까?') === true
    ) {
      onDeleteQuestion(id);
    } else {
      return;
    }
  };

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
    async function onGetList() {
      dispatch(loadingStart(true));
      const accessToken = getCookie('myAToken');
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

      try {
        const response = await axios.get(
          `/api/v1/patient/${patient_Id}/question?page=1&size=3`,
        );
        dispatch(questionListSuccess(response.data.data));
      } catch (e) {
        dispatch(questionListFailure(e));
      }
      dispatch(loadingFinish(false));
    }
    onGetList();
  }, [dispatch, patient_Id]);

  useEffect(() => {
    if (questionDelete === true) {
      window.location.replace(`/doctor/list/${patient_Id}`);
    }
  }, [questionDelete, patient_Id]);

  return (
    <DoctorList
      patientGet={patientGet}
      questionList={questionList}
      onGetDeleteQuestion={onGetDeleteQuestion}
      loading={loading}
    />
  );
}

export default DoctorListContainer;
