import React,{useState} from 'react'
import Header from '../components/common/Header'
import InquiryListForm from '../components/patient/InquiryListForm'
import Footer from '../components/common/Footer'
import Navi from '../components/patient/Navi'

function InquiryListPage() {
  const [inquiries, setInquiries] = useState([
    
  ]);

  return (
    <div>
      <Header />
      <Navi />
      <InquiryListForm inquiries={inquiries} />
      <Footer />
    </div>
  )
}

export default InquiryListPage