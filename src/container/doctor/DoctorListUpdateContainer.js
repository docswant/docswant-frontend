import React, { useEffect } from 'react';
import DoctorListUpdate from '../../components/doctor/DoctorListUpdate';
import { useSelector, useDispatch } from 'react-redux';
import {
  questionUpdateChange,
  questionUpdateFailure,
  questionUpdateSuccess,
} from '../../modules/questionList';
import { getCookie } from '../../lib/cookie';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DoctorListUpdateContainer({ onUpdate, content, questionId }) {
  const { questionUpdateText, questionUpdate } = useSelector(
    ({ questionList }) => ({
      questionUpdateText: questionList.questionUpdateText,
      questionUpdate: questionList.questionUpdate,
    }),
  );
  const { patient_Id, page_number } = useParams();
  const dispatch = useDispatch();

  const onChangeField = (e) => {
    const { name, value } = e.target;
    dispatch(
      questionUpdateChange({
        key: name,
        value,
      }),
    );
  };

  async function getUpdateQuestion() {
    // const accessToken = getCookie('myAToken');
    const accessToken = JSON.parse(localStorage.getItem('myAToken'));
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    try {
      await axios.patch(
        `https://docswant.zooneon.dev/api/v1/patient/${patient_Id}/question/${questionId}/content`,
        {
          content: questionUpdateText,
        },
      );
      dispatch(questionUpdateSuccess(true));
    } catch (e) {
      dispatch(questionUpdateFailure(e));
    }
  }
  const onSubmit = (e) => {
    e.preventDefault();
    getUpdateQuestion();
  };

  useEffect(() => {
    dispatch(
      questionUpdateChange({
        key: 'questionUpdateText',
        value: content,
      }),
    );
  }, [dispatch, content]);

  useEffect(() => {
    if (questionUpdate === true) {
      window.location.replace(`/doctor/list/${page_number}/${patient_Id}`);
    }
  }, [questionUpdate, patient_Id, page_number]);

  return (
    <DoctorListUpdate
      onUpdate={onUpdate}
      onSubmit={onSubmit}
      onChangeField={onChangeField}
      questionUpdateText={questionUpdateText}
    />
  );
}

export default DoctorListUpdateContainer;
