import React from 'react';
import DoctorBottomNav from '../components/common/DoctorBottomNav';
import Footer from '../components/common/Footer';
import MainTemplete from '../components/common/MainTemplete';
import DoctorHeader from '../components/doctor/DoctorHeader';
import DoctorNavi from '../components/doctor/DoctorNavi';
import DoctorInquiryContainer from '../container/doctor/DoctorInquiryContainer';

function DoctorInquiryPage() {
  return (
    <div>
      <DoctorHeader />
      <DoctorNavi />
      <MainTemplete>
        <DoctorInquiryContainer />
      </MainTemplete>
      <Footer />
      <DoctorBottomNav />
    </div>
  );
}

export default DoctorInquiryPage;
