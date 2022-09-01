import React, { useEffect } from 'react';
import PatientAnswerToDoctor from '../../components/patient/PatientAnswerToDoctor';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  answerChange,
  answerFailure,
  answerInitialize,
  answerSuccess,
} from '../../modules/answer';
import { getCookie } from '../../lib/cookie';
import axios from 'axios';

function PatientAnswerToDoctorContainer({ onOpen, questionId }) {
  const { answerText, answer } = useSelector(({ answer }) => ({
    answerText: answer.answerText,
    answer: answer.answer,
  }));
  const dispatch = useDispatch();
  const { user_Id, page_number } = useParams();

  const onChangeField = (e) => {
    const { name, value } = e.target;
    dispatch(
      answerChange({
        key: name,
        value,
      }),
    );
  };

  async function getAnswerDoctor() {
    // const accessToken = getCookie('myAToken');
    const accessToken = JSON.parse(localStorage.getItem('myAToken'));
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    try {
      await axios.patch(
        `https://docswant.zooneon.dev/api/v1/patient/${user_Id}/question/${questionId}/answer`,
        {
          answer: answerText,
        },
      );
      dispatch(answerSuccess(true));
    } catch (e) {
      dispatch(answerFailure(e));
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getAnswerDoctor();
  };

  useEffect(() => {
    if (answer === true) {
      window.location.replace(`/patient/survey/${page_number}/${user_Id}`);
    }
  }, [answer, user_Id, page_number]);

  useEffect(() => {
    dispatch(
      answerInitialize({
        key: 'answerText',
      }),
    );
  }, [dispatch]);

  return (
    <PatientAnswerToDoctor
      onOpen={onOpen}
      onSubmit={onSubmit}
      onChangeField={onChangeField}
      answerText={answerText}
    />
  );
}

export default PatientAnswerToDoctorContainer;
