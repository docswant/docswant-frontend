import React from 'react';
import DoctorNavi from '../../components/doctor/DoctorNavi';
import { useSelector } from 'react-redux';

export default function DoctorNaviContainer() {
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));
  return <DoctorNavi user={user} />;
}
