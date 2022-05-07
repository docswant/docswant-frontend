import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Navi from '../components/common/Navi';
import PatientMypage from '../components/patient/PatientMypage';

export default function MyPage() {
  return (
    <div>
      <Header />
      <Navi />
      <PatientMypage />
      <Footer />
    </div>
  );
}
