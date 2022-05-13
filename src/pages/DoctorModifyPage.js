import React from 'react';
import Footer from '../components/common/Footer';
import DoctorModify from '../components/doctor/DoctorModify';
import DoctorHeaderContainer from '../container/doctor/DoctorHeaderContainer';
import DoctorNaviContainer from '../container/doctor/DoctorNaviContainer';

function DoctorModifyPage() {
  return (
    <div>
      <DoctorHeaderContainer />
      <DoctorNaviContainer />
      <DoctorModify />
      <Footer />
    </div>
  );
}

export default DoctorModifyPage;
