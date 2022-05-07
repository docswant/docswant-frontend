import React, { useState } from 'react';
import Header from '../components/common/Header';
import InquiryListForm from '../components/patient/InquiryListForm';
import Footer from '../components/common/Footer';
import Navi from '../components/common/Navi';

function InquiryListPage() {
  const [inquiries, setInquiries] = useState([
    {
      id: 1,
      text: '안녕하세요',
    },
  ]);

  return (
    <div>
      <Header />
      <Navi />
      <InquiryListForm inquiries={inquiries} />
      <Footer />
    </div>
  );
}

export default InquiryListPage;
