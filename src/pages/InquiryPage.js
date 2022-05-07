import React, { useRef, useState } from 'react';
import InquiryForm from '../components/patient/InquiryForm';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Navi from '../components/common/Navi';

function InquiryPage() {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const nextId = useRef(2);
  const onCreate = () => {
    const inquiry = {
      id: nextId.current,
      text,
    };

    setText('');
    alert('제출 완료 되었습니다.');
    nextId.current += 1;
  };

  return (
    <div>
      <Header />
      <Navi />
      <InquiryForm text={text} onChange={onChange} onCreate={onCreate} />
      <Footer />
    </div>
  );
}

export default InquiryPage;
