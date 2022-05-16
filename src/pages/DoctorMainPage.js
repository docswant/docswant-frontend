import React from 'react';
import Footer from '../components/common/Footer';
import DoctorNaviContainer from '../container/doctor/DoctorNaviContainer';
import DoctorHeaderContainer from '../container/doctor/DoctorHeaderContainer';
import DoctorMainContainer from '../container/doctor/DoctorMainContainer';

function DoctorMainPage() {
  return (
    <div>
      <DoctorHeaderContainer />
      <DoctorNaviContainer />
      <DoctorMainContainer />
      <Footer />
    </div>
  );
}

export default DoctorMainPage;
