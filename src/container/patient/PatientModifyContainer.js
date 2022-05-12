import React, { useEffect } from 'react';
import PatientModify from '../../components/patient/PatientModify';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  duplicatePatientFailure,
  duplicatePatientSuccess,
} from '../../modules/duplicate';
import { changeField, initializeForm } from '../../modules/auth';

function PatientModifyContainer() {
  const { form, duplicatePatient } = useSelector(({ auth, duplicate }) => ({
    form: auth.modify,
    duplicatePatient: duplicate.duplicatePatient,
  }));
  const dispatch = useDispatch();

  async function getPatientDuplicate() {
    try {
      const response = await axios.get(
        `/api/v1/account/exists/${form.username}`,
      );
      dispatch(duplicatePatientSuccess(response.data.data));
    } catch (e) {
      dispatch(duplicatePatientFailure(e));
    }
  }

  const onDuplicatePatient = () => {
    getPatientDuplicate();
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      changeField({
        form: 'modify',
        key: name,
        value,
      }),
    );
  };

  useEffect(() => {
    dispatch(initializeForm({ form: 'modify' }));
  }, [dispatch]);

  return (
    <PatientModify
      duplicatePatient={duplicatePatient}
      onChange={onChange}
      form={form}
      onDuplicatePatient={onDuplicatePatient}
    />
  );
}

export default PatientModifyContainer;
