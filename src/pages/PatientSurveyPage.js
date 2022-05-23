import React from 'react';
import BottomNav from '../components/common/BottomNav';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import MainTemplete from '../components/common/MainTemplete';
import NaviContainer from '../container/patient/NaviContainer';
import PatientSurveyContainer from '../container/patient/PatientSurveyContainer';

export default function PatientSurveyPage() {
  return (
    <div>
      <Header />
      <NaviContainer />
      <MainTemplete>
        <PatientSurveyContainer />
      </MainTemplete>
      <Footer />
      <BottomNav />
    </div>
  );
}
