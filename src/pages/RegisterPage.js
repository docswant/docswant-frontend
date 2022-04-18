import React from 'react';
import RegisterForm from '../components/auth/RegisterForm';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';

function RegisterPage() {
  return (
    <div>
      <Header />
      <RegisterForm />
      <Footer />
    </div>
  );
}

export default RegisterPage;
