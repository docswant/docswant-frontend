import React from 'react';
import Footer from '../components/common/Footer';
import MainTemplete from '../components/common/MainTemplete';
import HeaderContainer from '../container/common/HeaderContainer';
import NaviContainer from '../container/patient/NaviContainer';
import PatientSurveyContainer from '../container/patient/PatientSurveyContainer';

export default function PatientSurveyPage() {
  return (
    <div>
      <HeaderContainer />
      <NaviContainer />
      <MainTemplete>
        <PatientSurveyContainer />
      </MainTemplete>
      <Footer />
    </div>
  );
}
