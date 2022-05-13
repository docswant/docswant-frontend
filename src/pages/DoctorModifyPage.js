import React from 'react';
import Footer from '../components/common/Footer';
import DoctorHeaderContainer from '../container/doctor/DoctorHeaderContainer';
import DoctorModifyContainer from '../container/doctor/DoctorModifyContainer';
import DoctorNaviContainer from '../container/doctor/DoctorNaviContainer';

function DoctorModifyPage() {
  return (
    <div>
      <DoctorHeaderContainer />
      <DoctorNaviContainer />
      <DoctorModifyContainer />
      <Footer />
    </div>
  );
}

export default DoctorModifyPage;
