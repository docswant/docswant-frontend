import React from 'react';
import Footer from '../components/common/Footer';
import DoctorRoundContainer from '../container/doctor/DoctorRoundContainer';
import DoctorNavi from '../components/doctor/DoctorNavi';
import DoctorHeader from '../components/doctor/DoctorHeader';
import MainTemplete from '../components/common/MainTemplete';
import DoctorBottomNav from '../components/common/DoctorBottomNav';

function DoctorRoundPage() {
  return (
    <div>
      <DoctorHeader />
      <DoctorNavi />
      <MainTemplete>
        <DoctorRoundContainer />
      </MainTemplete>
      <Footer />
      <DoctorBottomNav />
    </div>
  );
}

export default DoctorRoundPage;
