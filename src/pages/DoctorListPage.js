import React from 'react';
import Footer from '../components/common/Footer';
import MainTemplete from '../components/common/MainTemplete';
import DoctorHeaderContainer from '../container/doctor/DoctorHeaderContainer';
import DoctorListContainer from '../container/doctor/DoctorListContainer';
import DoctorNaviContainer from '../container/doctor/DoctorNaviContainer';

function DoctorListPage() {
  return (
    <div>
      <DoctorHeaderContainer />
      <DoctorNaviContainer />
      <MainTemplete>
        <DoctorListContainer />
      </MainTemplete>
      <Footer />
    </div>
  );
}

export default DoctorListPage;
