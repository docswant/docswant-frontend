import React from 'react';
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
const DoctorModifyPatientBlock = styled.div``;

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

const DoctorModifyPatient = () => {
  return (
    <DoctorModifyPatientBlock>
      <div className="formBlock">
        <div className="closeBlock" onClick={onOpen}>
          <AiOutlineClose />
        </div>
        <h2>환자 등록</h2>
        <form onSubmit={onSubmit}>
          <span>환자 코드</span>
          <div className="duplicateBlock">
            <StyledInput
              type="text"
              name="code"
              value={registerP.code}
              placeholder="환자코드를 입력해주세요"
              onChange={onChangeField}
            />
            <button
              type="button"
              className="duplicate"
              onClick={onDuplicateDoctor}
            >
              중복확인
            </button>
          </div>
          {duplicateDoctor === true && (
            <ErrorMessageBlock>아이디가 중복됩니다.</ErrorMessageBlock>
          )}
          {duplicateDoctor === false && (
            <ErrorMessageBlock>사용가능한 아이디 입니다.</ErrorMessageBlock>
          )}
          <span>환자 이름</span>
          <StyledInput
            type="text"
            name="name"
            value={registerP.name}
            onChange={onChangeField}
            placeholder="환자이름을 입력해주세요"
          />
          <span>생년월일</span>
          <StyledInput
            type="date"
            name="birthDate"
            value={registerP.birthDate}
            onChange={onChangeField}
          />
          <span>입원날짜</span>
          <StyledInput
            type="date"
            name="hospitalizationDate"
            value={registerP.hospitalizationDate}
            onChange={onChangeField}
          />
          <span>병명</span>
          <StyledInput
            type="text"
            name="diseaseName"
            value={registerP.diseaseName}
            placeholder="병명을 입력해주세요"
            onChange={onChangeField}
          />
          <span>병실위치</span>
          <StyledInput
            type="number"
            name="hospitalRoom"
            value={registerP.hospitalRoom}
            placeholder="병실위치를 입력해주세요"
            onChange={onChangeField}
          />
          <button>환자 등록</button>
        </form>
      </div>
    </DoctorModifyPatientBlock>
  );
};

export default DoctorModifyPatient;
