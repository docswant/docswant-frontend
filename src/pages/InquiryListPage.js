import React from 'react';
import InquiryListForm from '../components/patient/InquiryListForm';
import Footer from '../components/common/Footer';
import NaviContainer from '../container/patient/NaviContainer';
import HeaderContainer from '../container/common/HeaderContainer';

function InquiryListPage() {
  return (
    <div>
      <HeaderContainer />
      <NaviContainer />
      <InquiryListForm />
      <Footer />
    </div>
  );
}

export default InquiryListPage;
