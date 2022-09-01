import React from 'react';
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
const ModyModal = styled.div`
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
    cursor: pointer;
    border: 0;
  }
  section {
    width: 90%;
    max-width: 450px;
    margin: 0 auto;
    border-radius: 1rem;
    background-color: white;
    animation: ${ModalFade} 0.5s;
    overflow: hidden;
    header {
      position: relative;
      padding: 16px 30px;
      background-color: ${palette.blue[0]};
      font-weight: 700;
      button {
        position: absolute;
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
      padding: 16px;
      border-top: 1px solid ${palette.gray[1]};
      textarea {
        resize: none;
        width: 100%;
        height: 10rem;
        font-size: 16px;
        border: none;
      }
    }
    footer {
      padding: 12px 16px;
      text-align: center;
      button {
        width: 100%;
        padding: 6px 12px;
        color: white;
        background-color: ${palette.blue[0]};
        border-radius: 5px;
        font-size: 13px;
        font-weight: bold;
        &:hover {
          background-color: ${palette.blue[1]};
          cursor: pointer;
        }
      }
      .close {
        margin-left: 1rem;
      }
    }
  }
  .openModal {
    display: flex;
    align-items: center;
    animation: ${ModalbgFade} 0.5s;
  }
`;

function InquiryModifyForm(props) {
  const {
    open,
    close,
    onGetUpdateInquiry,
    updateId,
    onChangeField,
    content,
    text,
  } = props;

  return (
    <ModyModal>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              문의사항을 수정해주세요.
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>
              <textarea
                name="content"
                value={content}
                onChange={onChangeField}
                placeholder={text}
              ></textarea>
            </main>
            <footer>
              <button
                className="submit"
                onClick={() => onGetUpdateInquiry(updateId)}
              >
                수정하기
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </ModyModal>
  );
}

export default InquiryModifyForm;
