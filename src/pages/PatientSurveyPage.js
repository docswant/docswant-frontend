import React from 'react';
import Footer from '../components/common/Footer';
import PatientSurvey from '../components/patient/PatientSurvey';
import HeaderContainer from '../container/common/HeaderContainer';
import NaviContainer from '../container/patient/NaviContainer';

export default function PatientSurveyPage() {
  return (
    <div>
      <HeaderContainer />
      <NaviContainer />
      <PatientSurvey />
      <Footer />
    </div>
  );
}
