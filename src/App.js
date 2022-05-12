//React의 기본 메인 페이지
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import InquiryListPage from './pages/InquiryListPage';
import InquiryModifyPage from './pages/InquiryModifyPage';
import MyPage from './pages/MyPage';
import PatientModifyPage from './pages/PatientModifyPage';
import PatientSurveyPage from './pages/PatientSurveyPage';
import DoctorModifyPage from './pages/DoctorModifyPage';
import DoctorMainPage from './pages/DoctorMainPage';

function App() {
  return (
    // 컴포넌트 경로 설정
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* 환자 */}
      <Route path="/:user_Info/mainpage/:user_Id/P" element={<MyPage />} />
      <Route
        path="/:user_Info/survey/:user_Id/P"
        element={<PatientSurveyPage />}
      />
      <Route
        path="/:user_Info/modify/:user_Id/P"
        element={<PatientModifyPage />}
      />
      <Route path="/inquiry" element={<InquiryPage />} />
      <Route path="/inquiry_list" element={<InquiryListPage />} />
      <Route path="/inquiry_modify" element={<InquiryModifyPage />} />
      {/* 의사 */}
      <Route
        path="/:user_Indo/mainpage/:user_Id/D"
        element={<DoctorMainPage />}
      />
      <Route
        path="/:user_Info/modify/:user_Id/D"
        element={<DoctorModifyPage />}
      />
      <Route path='/inquiry_list' element={<InquiryListPage />} />
      <Route path='/inquiry_modify' element={<InquiryModifyPage />} />
    </Routes>
  );
}

export default App;
