import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Navi from '../components/patient/Navi';
import PatientInquiryContainer from '../container/patient/PatientInquiryContainer';
import BottomNav from '../components/common/BottomNav';
import MainTemplete from '../components/common/MainTemplete';

function InquiryListPage() {
  return (
    <div>
      <Header />
      <Navi />
      <MainTemplete>
        <PatientInquiryContainer />
      </MainTemplete>
      <Footer />
      <BottomNav />
    </div>
  );
}

export default InquiryListPage;
