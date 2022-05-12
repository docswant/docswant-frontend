import React from 'react';
import Footer from '../components/common/Footer';
import HeaderContainer from '../container/common/HeaderContainer';
import NaviContainer from '../container/patient/NaviContainer';
import PatientMyPageContainer from '../container/patient/PatientMyPageContainer';

export default function MyPage() {
  return (
    <div>
      <HeaderContainer />
      <NaviContainer />
      <PatientMyPageContainer />
      <Footer />
    </div>
  );
}
