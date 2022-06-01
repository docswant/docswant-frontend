import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PatientMypage from '../../components/patient/PatientMypage';
import { getCookie } from '../../lib/cookie';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { patientGetFailure, patientGetSuccess } from '../../modules/patientGet';
import {
  questionListFailure,
  questionListSuccess,
} from '../../modules/questionList';

function PatientMyPageContainer() {
  const { patientGet, questionList } = useSelector(
    ({ patientGet, questionList }) => ({
      questionList: questionList.questionList,
      patientGet: patientGet.patientGet,
    }),
  );
  const { user_Id } = useParams();
  const dispatch = useDispatch();
  const today = new Date();
  let year = today.getFullYear();
  let month = ('0' + (today.getMonth() + 1)).slice(-2);
  let day = ('0' + today.getDate()).slice(-2);
  let dateString = year + '-' + month + '-' + day;

  useEffect(() => {
    async function onGetPatient() {
      const accessToken = getCookie('myAToken');
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      try {
        const response = await axios.get(
          `/api/v1/patient/${user_Id}/rounding?date=${dateString}`,
        );
        dispatch(patientGetSuccess(response.data.data));
        localStorage.setItem('patient', JSON.stringify(response.data.data));
      } catch (e) {
        dispatch(patientGetFailure(e));
      }
    }
    onGetPatient();
  }, [dispatch, user_Id, dateString]);

  useEffect(() => {
    async function onGetList() {
      const accessToken = getCookie('myAToken');
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      try {
        const response = await axios.get(
          `/api/v1/patient/${user_Id}/question?page=1&size=100`,
        );
        dispatch(questionListSuccess(response.data.data));
      } catch (e) {
        dispatch(questionListFailure(e));
      }
    }
    onGetList();
  }, [dispatch, user_Id]);

  return <PatientMypage patientGet={patientGet} questionList={questionList} />;
}

export default PatientMyPageContainer;
