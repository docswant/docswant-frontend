import React from 'react';
import BottomNav from '../components/common/BottomNav';
import Footer from '../components/common/Footer';
import HeaderContainer from '../container/common/HeaderContainer';
import NaviContainer from '../container/patient/NaviContainer';
import PatientModifyContainer from '../container/patient/PatientModifyContainer';

function PatientModifyPage() {
  return (
    <div>
      <HeaderContainer />
      <NaviContainer />
      <PatientModifyContainer />
      <Footer />
      <BottomNav />
    </div>
  );
}

export default PatientModifyPage;
