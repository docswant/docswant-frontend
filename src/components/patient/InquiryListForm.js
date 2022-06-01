import React, {useState} from 'react'
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import InquiryForm from './InquiryForm';
import {MdDelete, MdEdit} from 'react-icons/md';
import InquiryModifyForm from './InquiryModifyForm';
import InquiryContent from './InquiryContent';
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
    padding: 1rem 0;
    color: black;
    @media(max-width: 768px){
      width: 90%;
    }
    .content{
      cursor: pointer;
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

function Inquiry({i, openModal2, openModal3, onGetDeleteInquiry}){
  return (
    <div className="box">
      <div>
        <span className="content" onClick={()=>{
          openModal3(i.content)
        }}>
          제목 : {i.content}
        </span>
        <ListDel>
          <MdDelete onClick={()=>{
            onGetDeleteInquiry(i.id)
          }}/>
        </ListDel>
        <ListEdit onClick={()=>{
          openModal2(i.id, i.content)
        }}>
          <MdEdit />
        </ListEdit>
      </div>
      {i.status === "READ" && (<p>읽음</p>)}
    </div>
  );
}

function InquiryListForm({
  inquiry,
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
  const [modalOpen3, setModalOpen3] = useState(false);

  const [updateId, setUpdateId] = useState(null);
  const [text, setText] = useState("");
  const [deleteId, setDeleteId] = useState(null);


  const openModal1 = () => {
    setModalOpen1(true);
  };
  const closeModal1=()=>{
    setModalOpen1(false);
  };
  const openModal2 = (updateId, text) => {
    setUpdateId(updateId);
    setText(text);
    setModalOpen2(true);
  };
  const closeModal2=()=>{
    setModalOpen2(false);
  };
  const openModal3 = (text) => {
    setText(text);
    setModalOpen3(true);
  };
  const closeModal3=()=>{
    setModalOpen3(false);
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
        title={title}
        onGetAddInquiry={onGetAddInquiry}/>

      <InquiryListBlock>
        {inquiry && (
          inquiry.content.map(i => (
            <Inquiry 
              i = {i}
              key={i.id}
              openModal2={openModal2}
              openModal3={openModal3}
              onGetDeleteInquiry={onGetDeleteInquiry} />
          ))
        )}
        <InquiryContent
          open={modalOpen3}
          close={closeModal3}
          text={text} />

        <InquiryModifyForm 
          open={modalOpen2}
          close={closeModal2}
          onGetUpdateInquiry={onGetUpdateInquiry}
          updateId = {updateId}
          onChangeField={onChangeField}
          content={content}
          text={text} />
        
      </InquiryListBlock>
    </>
  )
};

export default InquiryListForm