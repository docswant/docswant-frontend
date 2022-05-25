import React from 'react';
import InquiryListForm from '../components/patient/InquiryListForm';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Navi from '../components/patient/Navi';

function InquiryListPage() {
  return (
    <div>
      <Header />
      <Navi />
      <InquiryListForm />
      <Footer />
    </div>
  );
}

export default InquiryListPage;
