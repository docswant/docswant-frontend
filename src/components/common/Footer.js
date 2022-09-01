import React from 'react';
import styled from 'styled-components';

//화면 하단 고정
const FooterBlock = styled.div`
  width: 100%;
  height: 120px;
  border-top: 1px solid #e1e1e1;
  bottom: 0;
  position: absolute;
  padding: 1rem;

  @media (max-width: 523px) {
    padding: 1rem 0.5rem;
  }

  @media (max-width: 768px) {
    display: none;
  }

  .FooterWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      font-weight: bold;
      font-size: 18px;
      margin: 0;
      margin-bottom: 0.3rem;
    }
    .FooterInfo {
      .Member {
        display: flex;
        font-size: 14px;
        color: #707070;
        div {
          padding: 0 0.5rem;

          span {
            @media (max-width: 523px) {
              display: block;
            }
          }
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterBlock>
      <div className="FooterWrapper">
        <p>스마트 회진 예약 시스템</p>
        <div className="FooterInfo">
          <div className="Member">
            <div style={{ paddingLeft: 0 }}>
              <span>16011012</span>
              <span>권준원</span>
            </div>
            <div>
              <span>17011480</span>
              <span>정재욱</span>
            </div>
            <div>
              <span>19011560</span>
              <span>김유진</span>
            </div>
            <div style={{ borderRight: 'none' }}>
              <span>19011513</span>
              <span>김민</span>
            </div>
          </div>
        </div>
      </div>
    </FooterBlock>
  );
};

export default Footer;
