import React from 'react';
import Navi from '../../components/patient/Navi';
import { useSelector } from 'react-redux';

function NaviContainer() {
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));
  return <Navi user={user} />;
}

export default NaviContainer;
