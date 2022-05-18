import React from 'react';
import Footer from '../components/common/Footer';
import MainTemplete from '../components/common/MainTemplete';
import DoctorNaviContainer from '../container/doctor/DoctorNaviContainer';
import DoctorHeaderContainer from '../container/doctor/DoctorHeaderContainer';
import DoctorMainContainer from '../container/doctor/DoctorMainContainer';

function DoctorMainPage() {
  return (
    <div>
      <DoctorHeaderContainer />
      <DoctorNaviContainer />
      <MainTemplete>
        <DoctorMainContainer />
      </MainTemplete>
      <Footer />
    </div>
  );
}

export default DoctorMainPage;
