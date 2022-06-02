import React from 'react';
import Footer from '../components/common/Footer';
import DoctorRoundContainer from '../container/doctor/DoctorRoundContainer';
import DoctorNavi from '../components/doctor/DoctorNavi';
import DoctorHeader from '../components/doctor/DoctorHeader';
import BottomNav from '../components/common/BottomNav';
import MainTemplete from '../components/common/MainTemplete';

function DoctorRoundPage() {
  return (
    <div>
      <DoctorHeader />
      <DoctorNavi />
      <MainTemplete>
        <DoctorRoundContainer />
      </MainTemplete>
      <Footer />
      <BottomNav />
    </div>
  );
}

export default DoctorRoundPage;
