import React from 'react'
import Footer from '../components/common/Footer';
import DoctorNaviContainer from '../container/doctor/DoctorNaviContainer';
import DoctorHeaderContainer from '../container/doctor/DoctorHeaderContainer';
import DoctorRoundContainer from '../container/doctor/DoctorRoundContainer';

function DoctorRoundPage() {
  return (
    <div>
      <DoctorHeaderContainer />
      <DoctorNaviContainer />
      <DoctorRoundContainer />
      <Footer />
    </div>
  )
}

export default DoctorRoundPage