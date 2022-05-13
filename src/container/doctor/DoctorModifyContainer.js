import React, { useEffect } from 'react';
import DoctorModify from '../../components/doctor/DoctorModify';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import axios from 'axios';
import {
  duplicateDoctorFailure,
  duplicateDoctorSuccess,
} from '../../modules/duplicate';

function DoctorModifyContainer() {
  const { form, duplicateDoctor } = useSelector(({ auth, duplicate }) => ({
    form: auth.modifyDoctor,
    duplicateDoctor: duplicate.duplicateDoctor,
  }));
  const dispatch = useDispatch();

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      changeField({
        form: 'modifyDoctor',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  async function getDoctorDuplicate() {
    try {
      const response = await axios.get(
        `/api/v1/account/exists/${form.username}`,
      );
      dispatch(duplicateDoctorSuccess(response.data.data));
    } catch (e) {
      dispatch(duplicateDoctorFailure(e));
    }
  }

  const onDuplicateDoctor = () => {
    getDoctorDuplicate();
  };

  useEffect(() => {
    dispatch(initializeForm({ form: 'modifyDoctor' }));
  }, [dispatch]);

  return (
    <DoctorModify
      form={form}
      duplicateDoctor={duplicateDoctor}
      onChange={onChange}
      onSubmit={onSubmit}
      onDuplicateDoctor={onDuplicateDoctor}
    />
  );
}

export default DoctorModifyContainer;
