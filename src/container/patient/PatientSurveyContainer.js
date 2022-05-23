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
import { loadingFinish, loadingStart } from '../../modules/loading';

function PatientSurveyContainer() {
  const { questionList, loading } = useSelector(
    ({ questionList, loading }) => ({
      questionList: questionList.questionList,
      loading: loading.loading,
    }),
  );
  const { user_Id, page_number } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    async function onGetList() {
      const accessToken = getCookie('myAToken');
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      dispatch(loadingStart(true));
      try {
        const response = await axios.get(
          `/api/v1/patient/${user_Id}/question?page=${page_number}&size=5`,
        );
        dispatch(questionListSuccess(response.data.data));
      } catch (e) {
        dispatch(questionListFailure(e));
      }
      dispatch(loadingFinish(false));
    }
    onGetList();
  }, [dispatch, user_Id, page_number]);
  return <PatientSurvey questionList={questionList} loading={loading} />;
}

export default PatientSurveyContainer;
