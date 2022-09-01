import React from 'react';
import DoctorBottomNav from '../components/common/DoctorBottomNav';
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
      <DoctorBottomNav />
    </div>
  );
}

export default DoctorModifyPage;
