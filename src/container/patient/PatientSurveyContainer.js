import React, { useEffect } from 'react';
import PatientSurvey from '../../components/patient/PatientSurvey';
import { useSelector, useDispatch } from 'react-redux';
import { getCookie } from '../../lib/cookie';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  questionListFailure,
  questionListSuccess,
} from '../../modules/questionList';

function PatientSurveyContainer() {
  const { questionList } = useSelector(({ questionList }) => ({
    questionList: questionList.questionList,
  }));
  const { user_Id } = useParams();
  const dispatch = useDispatch();

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
  return <PatientSurvey questionList={questionList} />;
}

export default PatientSurveyContainer;
