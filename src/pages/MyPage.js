import React from 'react';
import BottomNav from '../components/common/BottomNav';
import Footer from '../components/common/Footer';
import MainTemplete from '../components/common/MainTemplete';
import HeaderContainer from '../container/common/HeaderContainer';
import NaviContainer from '../container/patient/NaviContainer';
import PatientMyPageContainer from '../container/patient/PatientMyPageContainer';

export default function MyPage() {
  return (
    <div>
      <HeaderContainer />
      <NaviContainer />
      <MainTemplete>
        <PatientMyPageContainer />
      </MainTemplete>
      <Footer />
      <BottomNav />
    </div>
  );
}
