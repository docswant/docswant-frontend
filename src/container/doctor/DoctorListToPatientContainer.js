import React, { useEffect } from 'react';
import DoctorListToPatient from '../../components/doctor/DoctorListToPatient';
import { useDispatch, useSelector } from 'react-redux';
import {
  questionChange,
  questionSubmitFailure,
  questionSubmitSuccess,
} from '../../modules/questionList';
import { useParams } from 'react-router-dom';
import { getCookie } from '../../lib/cookie';
import axios from 'axios';

function DoctorListToPatientContainer({ onOpen }) {
  const { questionText, questionSubmit } = useSelector(({ questionList }) => ({
    questionText: questionList.questionText,
    questionSubmit: questionList.questionSubmit,
  }));
  const { patient_Id } = useParams();
  const dispatch = useDispatch();
  const onChangeQuestion = (e) => {
    const { name, value } = e.target;
    dispatch(
      questionChange({
        key: name,
        value,
      }),
    );
  };

  async function onPatientToList() {
    const accessToken = getCookie('myAToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    try {
      await axios.post(
        `https://docswant.zooneon.dev/api/v1/patient/${patient_Id}/question`,
        {
          content: questionText,
        },
      );
      dispatch(questionSubmitSuccess(true));
    } catch (e) {
      dispatch(questionSubmitFailure(e));
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    onPatientToList();
  };

  useEffect(() => {
    if (questionSubmit === true) {
      window.location.replace(`/doctor/list/${patient_Id}`);
    }
  }, [patient_Id, questionSubmit]);

  return (
    <DoctorListToPatient
      questionText={questionText}
      onChangeQuestion={onChangeQuestion}
      onSubmit={onSubmit}
      onOpen={onOpen}
    />
  );
}

export default DoctorListToPatientContainer;
