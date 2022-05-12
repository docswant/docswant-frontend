import React from 'react';
import Header from '../../components/common/Header';
import { useSelector } from 'react-redux';

function HeaderContainer() {
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));
  return <Header user={user} />;
}

export default HeaderContainer;
