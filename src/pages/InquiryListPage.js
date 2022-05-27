import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Navi from '../components/patient/Navi';
import PatientInquiryContainer from '../container/patient/PatientInquiryContainer';

function InquiryListPage() {
  return (
    <div>
      <Header />
      <Navi />
      <PatientInquiryContainer />
      <Footer />
    </div>
  );
}

export default InquiryListPage;
