import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import palette from '../../lib/styles/palette';

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
const ModalbgFade = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;
const AddRoundModal = styled.div`
  .modal {
    display: none;
    position: fixed;
    align-items: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);
  }
  button {
    outline: 0;
    border: 0;
  }
  section {
    width: 90%;
    max-width: 450px;
    margin: 0 auto;
    border-radius: 1rem;
    background-color: white;
    animation: ${ModalFade} 0.3s;
    overflow: hidden;
    header {
      position: relative;
      padding: 16px 30px;
      background-color: ${palette.blue[0]};
      font-weight: 800;
      button {
        position: absolute;
        cursor: pointer;
        top: 15px;
        right: 15px;
        width: 30px;
        font-size: 21px;
        font-weight: 700;
        text-align: center;
        background-color: transparent;
      }
    }
    main {
      display: flex;
      flex-direction: column;
      padding: 16px;
      border-top: 1px solid ${palette.gray[1]};
      border-bottom: 1px solid ${palette.gray[1]};

      @media (max-width: 364px) {
        padding: 12px;
      }
      .box {
        display: flex;
        flex-direction: column;
      }
      input {
        width: 100%;
        border: 1px solid ${palette.blue[0]};
        padding: 1rem;
        margin: 0.5rem 0;
        font-size: 18px;
        border-radius: 7px;
        outline: none;

        &::placeholder {
          color: #cccccc;
        }

        &:hover {
          border: 1px solid ${palette.blue[0]};
        }
      }
    }
    footer {
      padding: 12px 16px;
      text-align: center;
      button {
        padding: 6px 12px;
        color: white;
        background-color: ${palette.blue[0]};
        border-radius: 5px;
        font-size: 13px;
        &:enabled:hover {
          background-color: ${palette.blue[1]};
          cursor: pointer;
        }
      }
    }
  }
  .openModal {
    display: flex;
    align-items: center;
    animation: ${ModalbgFade} 0.3s;
  }
`;

const ErrorMessageBlock = styled.div`
  text-align: center;
  margin: 0.3rem 0;
  color: red;
  font-weight: bold;
`;

function AddRound(props) {
  const { open, close, onChangeField, patient, time, date, onGetAddRounding } =
    props;
  const [error, setError] = useState(false);

  const onCheckRoundingDate = (e) => {
    let RegExp = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
    setError(RegExp.test(e.target.value));
  };

  return (
    <AddRoundModal>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              회진 일정 추가
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>
              <div className="box">
                <div>환자코드</div>
                <input
                  className="code"
                  name="patient"
                  type="text"
                  placeholder="ex) PATIENT001"
                  value={patient}
                  onChange={onChangeField}
                />
              </div>
              <div className="box">
                <div>회진날짜</div>
                <input
                  name="date"
                  type="text"
                  placeholder="ex) 2000-01-01"
                  value={date}
                  onChange={onChangeField}
                  onKeyUp={onCheckRoundingDate}
                />
                {error === false && (
                  <ErrorMessageBlock style={{ display: 'block' }}>
                    날짜 입력 형식을 지켜주세요
                  </ErrorMessageBlock>
                )}
              </div>
              <div className="box">
                <div>회진시간</div>
                <input
                  name="time"
                  type="text"
                  placeholder="ex) 13:00"
                  value={time}
                  onChange={onChangeField}
                />
              </div>
            </main>
            <footer>
              <button
                disabled={!patient && !time ? true : false}
                onClick={onGetAddRounding}
              >
                추가하기
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </AddRoundModal>
  );
}

export default AddRound;
