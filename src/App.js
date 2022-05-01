//React의 기본 메인 페이지
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import InquiryPage from './pages/InquiryPage';
import InquiryListPage from './pages/InquiryListPage';


function App() {
  return (
    //컴포넌트 경로 설정
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/inquiry" element={<InquiryPage/>} />
      <Route path='/inquiry_list' element={<InquiryListPage />} />
    </Routes>
  );
}

export default App;
