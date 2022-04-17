import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { BsGithub } from 'react-icons/bs';
import { SiNotion } from 'react-icons/si';

//화면 하단 고정
const FooterBlock = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  border-top: 1px solid ${palette.gray[0]};
  padding: 1rem;

  .FooterWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    #image {
      width: 100px;
      height: 100px;
      background-color: gray;
      margin-right: 1rem;
    }

    .FooterInfo {
      .LinkSNS {
        font-size: 25px;
        a {
          margin-right: 0.5rem;
        }
      }
      .Member {
        display: flex;
        font-size: 14px;
        color: #707070;
        div {
          border-right: 1px solid gray;
          padding: 0 0.5rem;
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterBlock>
      <div className="FooterWrapper">
        <div id="image"></div>
        <div className="FooterInfo">
          <div className="LinkSNS">
            <a href="https://github.com/docswant">
              <BsGithub />
            </a>
            <a href="https://www.notion.so/zzooneon/c99bda3578f74ec59fb12ecffd6f3013">
              <SiNotion />
            </a>
          </div>
          <div className="Member">
            <div style={{ paddingLeft: 0 }}>16000000 권준원</div>
            <div>17011480 정재욱</div>
            <div>19000000 김유진</div>
            <div style={{ borderRight: 'none' }}>19000000 김민</div>
          </div>
        </div>
      </div>
    </FooterBlock>
  );
};

export default Footer;
