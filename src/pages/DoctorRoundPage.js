import React from 'react'
import Footer from '../components/common/Footer';
import DoctorNaviContainer from '../container/doctor/DoctorNaviContainer';
import DoctorHeaderContainer from '../container/doctor/DoctorHeaderContainer';
import DoctorRound from '../components/doctor/DoctorRound';

function DoctorRoundPage() {
  return (
    <div>
      <DoctorHeaderContainer />
      <DoctorNaviContainer />
      <DoctorRound />
      <Footer />
    </div>
  )
}

export default DoctorRoundPage