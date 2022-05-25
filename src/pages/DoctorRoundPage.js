import React from 'react';
import Footer from '../components/common/Footer';
import DoctorRoundContainer from '../container/doctor/DoctorRoundContainer';
import DoctorNavi from '../components/doctor/DoctorNavi';
import DoctorHeader from '../components/doctor/DoctorHeader';

function DoctorRoundPage() {
  return (
    <div>
      <DoctorHeader />
      <DoctorNavi />
      <DoctorRoundContainer />
      <Footer />
    </div>
  );
}

export default DoctorRoundPage;
