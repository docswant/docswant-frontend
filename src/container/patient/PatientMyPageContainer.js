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
  const { user, patientGet, questionList } = useSelector(
    ({ user, patientGet, questionList }) => ({
      user: user.user,
      questionList: questionList.questionList,
      patientGet: patientGet.patientGet,
    }),
  );
  const { user_Id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    async function onGetPatient() {
      const accessToken = getCookie('myAToken');
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      try {
        const response = await axios.get(`/api/v1/patient/${user_Id}`);
        dispatch(patientGetSuccess(response.data.data));
      } catch (e) {
        dispatch(patientGetFailure(e));
      }
    }
    onGetPatient();
  }, [dispatch, user_Id]);

  useEffect(() => {
    async function onGetList() {
      const accessToken = getCookie('myAToken');
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      try {
        const response = await axios.get(
          `/api/v1/patient/${user_Id}/question?page=1&size=3`,
        );
        dispatch(questionListSuccess(response.data.data));
      } catch (e) {
        dispatch(questionListFailure(e));
      }
    }
    onGetList();
  }, [dispatch, user_Id]);

  return (
    <PatientMypage
      user={user}
      patientGet={patientGet}
      questionList={questionList}
    />
  );
}

export default PatientMyPageContainer;
