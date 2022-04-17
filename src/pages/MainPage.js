import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';

//에인 페이지 첫 화면
function MainPage() {
  return (
    <div>
      {/* 메인페이지에 들어갈 컴포넌트 나열 */}
      <Header />
      <Footer />
    </div>
  );
}

export default MainPage;
