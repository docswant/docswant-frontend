//React의 기본 메인 페이지
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    //컴포넌트 경로 설정
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
