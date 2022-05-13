import React from 'react';
import { useSelector } from 'react-redux';
import DoctorHeader from '../../components/doctor/DoctorHeader';

function DoctorHeaderContainer() {
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));
  return <DoctorHeader user={user} />;
}

export default DoctorHeaderContainer;
