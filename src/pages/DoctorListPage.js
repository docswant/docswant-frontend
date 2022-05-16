import React from 'react';
import Footer from '../components/common/Footer';
import DoctorList from '../components/doctor/DoctorList';
import DoctorHeaderContainer from '../container/doctor/DoctorHeaderContainer';
import DoctorNaviContainer from '../container/doctor/DoctorNaviContainer';

function DoctorListPage() {
  return (
    <div>
      <DoctorHeaderContainer />
      <DoctorNaviContainer />
      <DoctorList />
      <Footer />
    </div>
  );
}

export default DoctorListPage;
