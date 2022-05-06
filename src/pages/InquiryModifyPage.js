import React from 'react'
import Header from '../components/common/Header'
import InquiryModifyForm from '../components/patient/InquiryModifyForm'
import Footer from '../components/common/Footer'
import Navi from '../components/patient/Navi'

function InquiryModifyPage() {
  return (
    <div>
      <Header />
      <Navi />
      <InquiryModifyForm />
      <Footer />
    </div>
  )
}

export default InquiryModifyPage