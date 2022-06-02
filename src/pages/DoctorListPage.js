import React from 'react';
import BottomNav from '../components/common/BottomNav';
import Footer from '../components/common/Footer';
import MainTemplete from '../components/common/MainTemplete';
import DoctorHeader from '../components/doctor/DoctorHeader';
import DoctorNavi from '../components/doctor/DoctorNavi';
import DoctorListContainer from '../container/doctor/DoctorListContainer';

function DoctorListPage() {
  return (
    <div>
      <DoctorHeader />
      <DoctorNavi />
      <MainTemplete>
        <DoctorListContainer />
      </MainTemplete>
      <Footer />
      <BottomNav />
    </div>
  );
}

export default DoctorListPage;
