import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Navi from '../components/patient/Navi';
import PatientModifiy from '../components/patient/PatientModify';

function PatientModifyPage() {
  return (
    <div>
      <Header />
      <Navi />
      <PatientModifiy />
      <Footer />
    </div>
  );
}

export default PatientModifyPage;
