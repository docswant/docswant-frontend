import React from 'react';
import Footer from '../components/common/Footer';
import DoctorHeaderContainer from '../container/doctor/DoctorHeaderContainer';
import DoctorListContainer from '../container/doctor/DoctorListContainer';
import DoctorNaviContainer from '../container/doctor/DoctorNaviContainer';

function DoctorListPage() {
  return (
    <div>
      <DoctorHeaderContainer />
      <DoctorNaviContainer />
      <DoctorListContainer />
      <Footer />
    </div>
  );
}

export default DoctorListPage;
