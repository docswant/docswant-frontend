import React from 'react';
import { useSelector } from 'react-redux';
import PatientMypage from '../../components/patient/PatientMypage';

function PatientMyPageContainer() {
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));
  return <PatientMypage user={user} />;
}

export default PatientMyPageContainer;
