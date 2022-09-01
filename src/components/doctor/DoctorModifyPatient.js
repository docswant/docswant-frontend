import React, { useEffect, useState } from 'react';
import palette from '../../lib/styles/palette';
import styled, { keyframes } from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

const ModalFade = keyframes`
  from{
    opacity: 0;
    margin-top: -50px;
  }
  to{
    opacity: 1;
    margin-top: 0%;
  }
`;
const DoctorModifyPatientBlock = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  left: 0;
  top: 0;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    padding: 1rem;
  }

  .formBlock {
    width: 425px;
    background-color: white;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    animation: ${ModalFade} 0.5s;

    form {
      display: flex;
      flex-direction: column;
    }

    @media (max-width: 425px) {
      width: 315px;
    }
    h2 {
      text-align: center;
    }
    .closeBlock {
      width: 100%;
      text-align: right;
      cursor: pointer;
      svg {
        font-size: 25px;
      }
    }

    input[type='number']::-webkit-outer-spin-button,
    input[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    button {
      width: 100%;
      outline: none;
      background-color: ${palette.blue[0]};
      border: none;
      padding: 1rem;
      border-radius: 7px;
      font-size: 20px;
      font-weight: bold;
      margin-top: 1rem;
      color: white;
      cursor: pointer;
      &:hover {
        background-color: ${palette.blue[1]};
      }
    }
  }
`;

const StyledInput = styled.input`
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 7px;
  width: 100%;
  padding: 1rem;
  font-size: 18px;
  outline: none;

  &::placeholder {
    color: #cccccc;
  }

  &:hover {
    border: 1px solid ${palette.blue[0]};
  }
`;

const ErrorMessageBlock = styled.div`
  text-align: center;
  margin: 0.3rem 0;
  color: red;
  font-weight: bold;
`;

const DoctorModifyPatient = ({ form, onSubmit, onChange, onUpdate, obj }) => {
  const [error, setError] = useState({
    hospitalizationDate: null,
    surgeryDate: null,
    dischargeDate: null,
  });

  const onCheckHospitalizationDate = (e) => {
    let RegExp = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
    setError({ ...error, hospitalizationDate: RegExp.test(e.target.value) });
  };
  const onChecksurgeryDate = (e) => {
    let RegExp = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
    setError({ ...error, surgeryDate: RegExp.test(e.target.value) });
  };
  const onCheckdischargeDate = (e) => {
    let RegExp = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
    setError({ ...error, dischargeDate: RegExp.test(e.target.value) });
  };

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);
  return (
    <DoctorModifyPatientBlock>
      <div className="formBlock">
        <div className="closeBlock">
          <AiOutlineClose onClick={onUpdate} />
        </div>
        <h2>환자 수정</h2>
        <form onSubmit={onSubmit}>
          <span>입원날짜</span>
          <StyledInput
            type="text"
            name="hospitalizationDate"
            value={form.hospitalizationDate}
            onChange={onChange}
            onKeyUp={onCheckHospitalizationDate}
            placeholder="ex) 2000-01-01"
          />
          {error.hospitalizationDate === false && (
            <ErrorMessageBlock>날짜 입력 형식을 지켜주세요</ErrorMessageBlock>
          )}
          <span>수술날짜</span>
          <StyledInput
            type="text"
            name="surgeryDate"
            value={form.surgeryDate}
            onChange={onChange}
            onKeyUp={onChecksurgeryDate}
            placeholder="ex) 2000-01-01"
          />
          {error.surgeryDate === false && (
            <ErrorMessageBlock>날짜 입력 형식을 지켜주세요</ErrorMessageBlock>
          )}
          <span>퇴원날짜</span>
          <StyledInput
            type="text"
            name="dischargeDate"
            value={form.dischargeDate}
            onChange={onChange}
            onKeyUp={onCheckdischargeDate}
            placeholder="ex) 2000-01-01"
          />
          {error.dischargeDate === false && (
            <ErrorMessageBlock>날짜 입력 형식을 지켜주세요</ErrorMessageBlock>
          )}
          <span>병명</span>
          <StyledInput
            type="text"
            name="diseaseName"
            value={form.diseaseName}
            placeholder={obj.diseaseName}
            onChange={onChange}
          />
          <span>병실위치</span>
          <StyledInput
            type="number"
            name="hospitalRoom"
            value={form.hospitalRoom}
            placeholder={obj.hospitalRoom}
            onChange={onChange}
          />
          <button>환자 수정</button>
        </form>
      </div>
    </DoctorModifyPatientBlock>
  );
};

export default DoctorModifyPatient;
