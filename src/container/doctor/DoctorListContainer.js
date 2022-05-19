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
import {
  checkAnswerFailure,
  checkAnswerSuccess,
} from '../../modules/checkAnswer';
import { loadingFinish, loadingStart } from '../../modules/loading';

function DoctorListContainer() {
  const { patientGet, questionList, questionDelete, loading, checkAnswer } =
    useSelector(({ patientGet, questionList, loading, checkAnswer }) => ({
      patientGet: patientGet.patientGet,
      questionList: questionList.questionList,
      questionDelete: questionList.questionDelete,
      loading: loading.loading,
      checkAnswer: checkAnswer.checkAnswer,
    }));
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

  async function getAnswerCheck(questionId) {
    dispatch(loadingStart(true));
    const accessToken = getCookie('myAToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    try {
      const response = await axios.get(
        `/api/v1/patient/${patient_Id}/question/${questionId}`,
      );
      dispatch(checkAnswerSuccess(response.data.data));
    } catch (e) {
      dispatch(checkAnswerFailure(e));
    }
    dispatch(loadingFinish(false));
  }

  const onAnswerCheck = (questionId) => {
    getAnswerCheck(questionId);
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
      onAnswerCheck={onAnswerCheck}
      checkAnswer={checkAnswer}
    />
  );
}

export default DoctorListContainer;
