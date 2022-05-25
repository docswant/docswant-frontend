import React from 'react';
import BottomNav from '../components/common/BottomNav';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Navi from '../components/patient/Navi';
import PatientModifyContainer from '../container/patient/PatientModifyContainer';

function PatientModifyPage() {
  return (
    <div>
      <Header />
      <Navi />
      <PatientModifyContainer />
      <Footer />
      <BottomNav />
    </div>
  );
}

export default PatientModifyPage;
