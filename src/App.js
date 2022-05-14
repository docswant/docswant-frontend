//React의 기본 메인 페이지
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import InquiryListPage from './pages/InquiryListPage';
import MyPage from './pages/MyPage';
// import PatientModifyPage from './pages/PatientModifyPage';
import PatientSurveyPage from './pages/PatientSurveyPage';
import DoctorMainPage from './pages/DoctorMainPage';
import DoctorModifyPage from './pages/DoctorModifyPage';

function App() {
  return (
    // 컴포넌트 경로 설정
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* 환자 */}
      <Route path="/patient/mainpage/:user_Id" element={<MyPage />} />
      <Route path="/patient/survey/:user_Id" element={<PatientSurveyPage />} />
      <Route
        path="/patient/inquiry_list/:user_Id"
        element={<InquiryListPage />}
      />
      {/* 의사 */}
      <Route path="/doctor/mainpage/:user_Id" element={<DoctorMainPage />} />
      <Route path="/doctor/modify/:user_Id" element={<DoctorModifyPage />} />
    </Routes>
  );
}

export default App;
