//React의 기본 메인 페이지
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import InquiryListPage from './pages/InquiryListPage';
import MyPage from './pages/MyPage';
import PatientModifyPage from './pages/PatientModifyPage';
import PatientSurveyPage from './pages/PatientSurveyPage';
import DoctorModifyPage from './pages/DoctorModifyPage';
import DoctorMainPage from './pages/DoctorMainPage';
import DoctorListPage from './pages/DoctorListPage';
import DoctorRoundPage from './pages/DoctorRoundPage';
import DoctorInquiryPage from './pages/DoctorInquiryPage';

function App() {
  return (
    // 컴포넌트 경로 설정
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* 환자 */}
      <Route path="/patient/mainpage/:user_Id" element={<MyPage />} />
      <Route
        path="/patient/survey/:page_number/:user_Id"
        element={<PatientSurveyPage />}
      />
      <Route path="/patient/modify/:user_Id" element={<PatientModifyPage />} />
      <Route
        path="/patient/inquiry_list/:user_Id"
        element={<InquiryListPage />}
      />
      {/* 의사 */}
      <Route
        path="/doctor/mainpage/:page_number/:user_Id"
        element={<DoctorMainPage />}
      />
      <Route path="/doctor/modify/:user_Id" element={<DoctorModifyPage />} />
      <Route
        path="/doctor/list/:page_number/:patient_Id"
        element={<DoctorListPage />}
      />
      <Route path="/doctor/round/:user_Id" element={<DoctorRoundPage />} />
      <Route
        path="/doctor/inquiry/:page_number/:user_Id/:patient_Id"
        element={<DoctorInquiryPage />}
      />
    </Routes>
  );
}

export default App;
