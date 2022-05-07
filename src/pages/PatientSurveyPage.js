import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Navi from '../components/common/Navi';
import PatientSurvey from '../components/patient/PatientSurvey';

export default function PatientSurveyPage() {
  return (
    <div>
      <Header />
      <Navi />
      <PatientSurvey />
      <Footer />
    </div>
  );
}
