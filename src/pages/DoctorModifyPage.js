import React from 'react';
import Footer from '../components/common/Footer';
import DoctorHeader from '../components/doctor/DoctorHeader';
import DoctorNavi from '../components/doctor/DoctorNavi';
import DoctorModifyContainer from '../container/doctor/DoctorModifyContainer';

function DoctorModifyPage() {
  return (
    <div>
      <DoctorHeader />
      <DoctorNavi />
      <DoctorModifyContainer />
      <Footer />
    </div>
  );
}

export default DoctorModifyPage;
