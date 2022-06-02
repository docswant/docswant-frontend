import React from 'react';
import BottomNav from '../components/common/BottomNav';
import Footer from '../components/common/Footer';
import MainTemplete from '../components/common/MainTemplete';
import DoctorHeader from '../components/doctor/DoctorHeader';
import DoctorNavi from '../components/doctor/DoctorNavi';
import DoctorModifyContainer from '../container/doctor/DoctorModifyContainer';

function DoctorModifyPage() {
  return (
    <div>
      <DoctorHeader />
      <DoctorNavi />
      <MainTemplete>
        <DoctorModifyContainer />
      </MainTemplete>
      <Footer />
      <BottomNav />
    </div>
  );
}

export default DoctorModifyPage;
