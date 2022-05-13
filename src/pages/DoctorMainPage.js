import React from 'react';
import Footer from '../components/common/Footer';
import DoctorMain from '../components/doctor/DoctorMain';
import DoctorNaviContainer from '../container/doctor/DoctorNaviContainer';
import DoctorHeaderContainer from '../container/doctor/DoctorHeaderContainer';

function DoctorMainPage() {
  return (
    <div>
      <DoctorHeaderContainer />
      <DoctorNaviContainer />
      <DoctorMain />
      <Footer />
    </div>
  );
}

export default DoctorMainPage;
