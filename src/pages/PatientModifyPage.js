import React from 'react';
import Footer from '../components/common/Footer';
import PatientModifiy from '../components/patient/PatientModify';
import HeaderContainer from '../container/common/HeaderContainer';
import NaviContainer from '../container/patient/NaviContainer';

function PatientModifyPage() {
  return (
    <div>
      <HeaderContainer />
      <NaviContainer />
      <PatientModifiy />
      <Footer />
    </div>
  );
}

export default PatientModifyPage;
