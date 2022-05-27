import React, {useState} from 'react'
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import InquiryForm from './InquiryForm';
import {MdDelete, MdEdit} from 'react-icons/md';
import InquiryModifyForm from './InquiryModifyForm';
import Loading from '../common/Loading';


const ListDel = styled.div`
  display: flex;
  color: lightgray;
  font-size: 20px;
  margin-left: 1rem;
  margin-right: .5rem;
  cursor: pointer;
  &:hover{
    color: #ff6b6b;
  }
  display: none;
`
const ListEdit = styled.div`
  display: flex;
  color: lightgray;
  font-size: 20px;
  cursor: pointer;
  &:hover{
    color: blue;
  }
  display: none;
`
const InquiryListBlock = styled.div`
  width: 100%;
  padding: 0 10rem;
  padding-bottom: 150px;
  align-items: center;
  @media(max-width: 768px){
    padding: 0 1rem;
  }
  .box{
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    border-bottom: 1px solid ${palette.blue[0]};
    padding: 0.5rem;
    color: black;
    @media(max-width: 768px){
      width: 90%;
    }
    &:hover{
      ${ListDel} {
        display: initial;
      }
      ${ListEdit} {
        display: initial;
      }
    }
  }
`
const BtnBlock = styled.div`
  text-align: right;
  padding: 1rem 10rem;
  @media(max-width: 768px){
    padding: 1rem 2rem;
  }
  button{
    width: 10rem;
    height: 3rem;
    margin-right: 10px;
    border: none;
    color: white;
    font-size: 20px;
    border-radius: 7px;
    font-weight: 600;
    @media(max-width: 768px){
      width: 8rem;
      height: 2rem;
      font-size: 16px;
    }
    cursor: pointer;
    background-color: ${palette.blue[0]};
    &:hover{
      background-color: ${palette.blue[1]};
    }
  }
`

function Inquiry({inquiry, openModal2, onGetDeleteInquiry}){
  return (
    <div className="box">
      <div>
        제목 : {inquiry.title} _ {inquiry.id}
        <ListDel>
          <MdDelete onClick={()=>{
            onGetDeleteInquiry()
          }}/>
        </ListDel>
        <ListEdit onClick={()=>{
          openModal2()
        }}>
          <MdEdit />
        </ListEdit>
      </div>
      <p>읽음</p>
    </div>
  );
}

function InquiryListForm({
  title,
  content,
  onGetAddInquiry,
  onChangeField,
  onGetDeleteInquiry,
  onGetUpdateInquiry,
  loading,
}){
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
 
  const [inquiries, setInquiries] = useState([
    {
      id: 1,
      title: '약 관련 문의',
      text: '첫번째 약 관련 문의',
      active: true
    },
    {
      id: 2,
      title: '약 관련 문의',
      text: '두번째 약 관련 문의',
      active: false
    },
    {
      id: 3,
      title: '약 관련 문의',
      text: '세번째 약 관련 문의',
      active: false
    },
    {
      id: 4,
      title: '약 관련 문의',
      text: '네번째 약 관련 문의',
      active: false
    },
    {
      id: 5,
      title: '약 관련 문의',
      text: '다섯번째 약 관련 문의',
      active: false
    },
  ]);

  const openModal1 = () => {
    setModalOpen1(true);
  };
  const closeModal1=()=>{
    setModalOpen1(false);
  };
  const openModal2 = () => {
    setModalOpen2(true);
  };
  const closeModal2=()=>{
    setModalOpen2(false);
  };

  return loading === true ? (
    <Loading />
  ) : (
    <>
      <BtnBlock>
        <button onClick={openModal1}>문의 하기</button>
      </BtnBlock>

      <InquiryForm
        open={modalOpen1}
        close={closeModal1}
        onChangeField={onChangeField}
        contnet={content}
        title={title}/>

      <InquiryListBlock>
        {inquiries.map(inquiry => (
          <Inquiry 
            inquiry = {inquiry}
            key={inquiry.id}
            openModal2={openModal2}
            onGetDeleteInquiry={onGetDeleteInquiry} />
        ))}
        <InquiryModifyForm 
          open={modalOpen2}
          close={closeModal2}
          inquiries={inquiries}
          onGetUpdateInquiry={onGetUpdateInquiry} />
      </InquiryListBlock>
    </>
  )
};

export default InquiryListForm