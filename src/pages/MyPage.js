import React from 'react';
import BottomNav from '../components/common/BottomNav';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import MainTemplete from '../components/common/MainTemplete';
import Navi from '../components/patient/Navi';
import PatientMyPageContainer from '../container/patient/PatientMyPageContainer';

export default function MyPage() {
  return (
    <div>
      <Header />
      <Navi />
      <MainTemplete>
        <PatientMyPageContainer />
      </MainTemplete>
      <Footer />
      <BottomNav />
    </div>
  );
}
