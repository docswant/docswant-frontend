import React, { useEffect } from 'react';
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
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: baseline;
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

const DoctorModifyPatient = ({ form, onSubmit, onChange, onUpdate, obj }) => {
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
            type="date"
            name="hospitalizationDate"
            value={form.hospitalizationDate}
            onChange={onChange}
          />
          <span>수술날짜</span>
          {obj.surgeryDate ? (
            <StyledInput
              type="date"
              name="surgeryDate"
              value={form.surgeryDate}
              onChange={onChange}
            />
          ) : (
            <StyledInput
              type="date"
              name="surgeryDate"
              value={form.surgeryDate}
              onChange={onChange}
            />
          )}
          <span>퇴원날짜</span>
          {obj.dischargeDate ? (
            <StyledInput
              type="date"
              name="dischargeDate"
              value={form.dischargeDate}
              onChange={onChange}
            />
          ) : (
            <StyledInput
              type="date"
              name="dischargeDate"
              value={form.dischargeDate}
              onChange={onChange}
            />
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
