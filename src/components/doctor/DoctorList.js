import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { AiOutlinePlus } from 'react-icons/ai';

const DoctorListBlock = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  padding-bottom: 150px;
  position: relative;

  .listHeader {
    margin-bottom: 3rem;
    span {
      margin-right: 2rem;
      font-size: 25px;
    }
  }
  .listInfo {
    width: 50%;
    border-bottom: 1px solid ${palette.blue[0]};
    display: flex;
    font-size: 20px;
    margin-bottom: 2.5rem;
    padding: 0.5rem;

    .listText {
      width: 80%;
      text-align: center;
    }
    .listButton {
      button {
        margin-left: 1rem;
        border: 1px solid ${palette.blue[0]};
        background-color: white;
        border-radius: 12px;
        padding: 0.3rem 0.9rem;
        cursor: pointer;
      }
    }
  }
  .patientListPlus {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${palette.blue[0]};

    svg {
      color: black;
      font-weight: bold;
      font-size: 25px;
      cursor: pointer;
    }
  }
`;

const DoctorList = () => {
  return (
    <DoctorListBlock>
      <div className="listHeader">
        <span>김세종 : 25세</span>
        <span>병동위치 : 1층</span>
        <span>입원날짜 : 3/23</span>
        <span>병명 : 코로나</span>
      </div>
      <div className="listInfo">
        <div className="listText">
          <span>심한 몸살</span>
        </div>
        <div className="listButton">
          <button>수정</button>
          <button>삭제</button>
        </div>
      </div>
      <div className="listInfo">
        <div className="listText">
          <span>심한 몸살</span>
        </div>
        <div className="listButton">
          <button>수정</button>
          <button>삭제</button>
        </div>
      </div>
      <div className="listInfo">
        <div className="listText">
          <span>심한 몸살</span>
        </div>
        <div className="listButton">
          <button>수정</button>
          <button>삭제</button>
        </div>
      </div>
      <div className="listInfo">
        <div className="listText">
          <span>심한 몸살</span>
        </div>
        <div className="listButton">
          <button>수정</button>
          <button>삭제</button>
        </div>
      </div>
      <div className="patientListPlus">
        <AiOutlinePlus />
      </div>
    </DoctorListBlock>
  );
};

export default DoctorList;
