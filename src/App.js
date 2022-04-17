//React의 기본 메인 페이지
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
  return (
    //컴포넌트 경로 설정
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
