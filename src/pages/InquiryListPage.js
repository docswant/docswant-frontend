import React from 'react';
import InquiryListForm from '../components/patient/InquiryListForm';
import Footer from '../components/common/Footer';
import NaviContainer from '../container/patient/NaviContainer';
import Header from '../components/common/Header';

function InquiryListPage() {
  return (
    <div>
      <Header />
      <NaviContainer />
      <InquiryListForm />
      <Footer />
    </div>
  );
}

export default InquiryListPage;
