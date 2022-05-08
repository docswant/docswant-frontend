//React의 기본 메인 페이지
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import InquiryPage from './pages/InquiryPage';
import InquiryListPage from './pages/InquiryListPage';
import InquiryModifyPage from './pages/InquiryModifyPage';
import MyPage from './pages/MyPage';
import PatientModifyPage from './pages/PatientModifyPage';
import PatientSurveyPage from './pages/PatientSurveyPage';

function App() {
  return (
    // 컴포넌트 경로 설정
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/patient/mypage/:user_Id" element={<MyPage />} />
      <Route path="/patient/survey/:user_Id" element={<PatientSurveyPage />} />
      <Route path="/patient/modify/:user_Id" element={<PatientModifyPage />} />
      <Route path="/inquiry" element={<InquiryPage />} />
      <Route path="/inquiry_list" element={<InquiryListPage />} />
      <Route path="/inquiry_modify" element={<InquiryModifyPage />} />
    </Routes>
  );
}

export default App;
