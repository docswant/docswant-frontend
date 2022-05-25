import React from 'react';
import Footer from '../components/common/Footer';
import MainTemplete from '../components/common/MainTemplete';
import DoctorMainContainer from '../container/doctor/DoctorMainContainer';
import DoctorNavi from '../components/doctor/DoctorNavi';
import DoctorHeader from '../components/doctor/DoctorHeader';

function DoctorMainPage() {
  return (
    <div>
      <DoctorHeader />
      <DoctorNavi />
      <MainTemplete>
        <DoctorMainContainer />
      </MainTemplete>
      <Footer />
    </div>
  );
}

export default DoctorMainPage;
