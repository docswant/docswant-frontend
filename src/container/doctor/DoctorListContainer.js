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

function DoctorListContainer() {
  const { patientGet, questionList, questionDelete } = useSelector(
    ({ patientGet, questionList }) => ({
      patientGet: patientGet.patientGet,
      questionList: questionList.questionList,
      questionDelete: questionList.questionDelete,
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
      const accessToken = getCookie('myAToken');
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      try {
        const response = await axios.get(`/api/v1/patient/${patient_Id}`);
        dispatch(patientGetSuccess(response.data.data));
      } catch (e) {
        dispatch(patientGetFailure(e));
      }
    }
    onGetPatient();
  }, [dispatch, patient_Id]);

  useEffect(() => {
    async function onGetList() {
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
    />
  );
}

export default DoctorListContainer;
