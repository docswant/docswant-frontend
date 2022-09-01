import React from 'react';
import Footer from '../components/common/Footer';
import MainTemplete from '../components/common/MainTemplete';
import DoctorMainContainer from '../container/doctor/DoctorMainContainer';
import DoctorNavi from '../components/doctor/DoctorNavi';
import DoctorHeader from '../components/doctor/DoctorHeader';
import DoctorBottomNav from '../components/common/DoctorBottomNav';

function DoctorMainPage() {
  return (
    <div>
      <DoctorHeader />
      <DoctorNavi />
      <MainTemplete>
        <DoctorMainContainer />
      </MainTemplete>
      <Footer />
      <DoctorBottomNav />
    </div>
  );
}

export default DoctorMainPage;
