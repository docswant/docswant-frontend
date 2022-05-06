import React,{useState} from 'react'
import Header from '../components/common/Header'
import InquiryListForm from '../components/patient/InquiryListForm'
import Footer from '../components/common/Footer'

function InquiryListPage() {
  const [inquiries, setInquiries] = useState([
    {
      id: 1,
      text: '안녕하세요'
    },
  ]);

  return (
    <div>
      <Header />
      <InquiryListForm inquiries={inquiries} />
      <Footer />
    </div>
  )
}

export default InquiryListPage