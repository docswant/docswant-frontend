import React, {useState, useRef} from 'react'
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import InquiryForm from './InquiryForm';
import {MdDelete, MdEdit} from 'react-icons/md';
import InquiryModifyForm from './InquiryModifyForm';


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
  .box{
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    border-bottom: 1px solid ${palette.blue[0]};
    padding: 0.5rem;
    color: black;
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
  button{
    width: 10rem;
    height: 3rem;
    margin-right: 10px;
    border: none;
    color: white;
    font-size: 20px;
    border-radius: 7px;
    font-weight: 600;
    cursor: pointer;
    background-color: ${palette.blue[0]};
    &:hover{
      background-color: ${palette.blue[1]};
    }
  }
`

function Inquiry({inquiry, onRemove, openModal2, onToggle}){
  return (
    <div className="box">
      <div>
        제목 : {inquiry.title} _ {inquiry.id}
        <ListDel onClick={()=>onRemove(inquiry.id)}>
          <MdDelete />
        </ListDel>
        <ListEdit onClick={()=>{
          openModal2()
          onToggle(inquiry.id)
        }}>
          <MdEdit />
        </ListEdit>
      </div>
      <p>읽음</p>
    </div>
  );
}

function InquiryListForm() {
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [inputs, setInputs] = useState({
    title: '',
    text: ''
  });
  const {title, text} = inputs;

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
  const nextId = useRef(6);

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

  const onChange=(e)=>{
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const onReset=()=>{
    alert("제출되었습니다.");

    const inquiry = {
      id: nextId.current,
      title: title,
      text: text
    };
    setInquiries([...inquiries, inquiry]);

    console.log(title);
    setInputs({
      title: '',
      text: ''
    });
    nextId.current += 1;
  };
  const onSubmit=()=>{
    alert("성공적으로 수정되었습니다.")
  };
  const onRemove = id => {
    setInquiries(inquiries.filter(inquiry => inquiry.id !== id));
  };
  const onToggle = id => {
    setInquiries(
      inquiries.map(inquiry =>
        inquiry.id === id ? {...inquiry, active: !inquiry.active} : inquiry
      )
    )
  }

  return (
    <>
      <BtnBlock>
        <button onClick={openModal1}>문의 하기</button>
      </BtnBlock>

      <InquiryForm
        open={modalOpen1}
        close={closeModal1}
        onChange={onChange}
        text={text}
        reset={onReset}
        title={title}/>

      <InquiryListBlock>
        {inquiries.map(inquiry => (
          <Inquiry 
            inquiry = {inquiry}
            key={inquiry.id}
            onRemove={onRemove}
            openModal2={openModal2}
            onToggle = {onToggle}/>
        ))}
        <InquiryModifyForm 
          open={modalOpen2}
          close={closeModal2}
          onSubmit={onSubmit}
          inquiries={inquiries} />
      </InquiryListBlock>
    </>
  )
}

export default InquiryListForm