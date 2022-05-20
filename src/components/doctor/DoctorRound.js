import React, {useState, useRef} from 'react'
import palette from '../../lib/styles/palette';
import styled from 'styled-components';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import { MdDelete } from 'react-icons/md';
import { AiOutlinePlus, AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import AddRound from './AddRound';

const Box = styled.div`
  display: flex;
  padding: 1rem 0;
  padding-bottom: 150px;
`
const CalendarBlock = styled.div`
  display: flex;
  /* align-items: center; */
  width: 50%;
  padding: 3rem 2rem;
  border-right: solid 1px ${palette.gray[0]};
  .cal{
    text-align: center;
  }
  .calendar{
    display: inline-block;
    width: 80%;
    border-radius: 3rem;
  }
`
const RoundInfoBlock = styled.div`
  width: 50%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .date{
    width: 80%;
    padding: 1rem 0;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
  }
  .addround {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${palette.blue[0]};
    margin-bottom: 1rem;
    svg {
      color: black;
      font-weight: bold;
      font-size: 25px;
      cursor: pointer;
    }
  }
`
const RoundDel = styled.div`
  display: flex;
  align-items: center;
  color: lightgray;
  font-size: 25px;
  cursor: pointer;
  &:hover{
    color: #ff6b6b;
  }
`
const RoundBlock = styled.div`
  width: 60%;
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  .round_block{
    display: flex;
    flex-direction: column;
    justify-content: center;
    .round_text{
      margin-top: 1rem;
      text-align: center;
      padding: 1rem;
      width: 100%;
      border: 1px solid ${palette.blue[1]};
      border-radius: 1rem;
      font-size: 18px;
      .loc{
        margin-right: 8rem;
      }
      .icon{
        &:hover{
          cursor: pointer;
        }
      }
    }
    table{
      border-collapse: collapse;
    }
    tbody{
      text-align: center;
    }
    th{
      border-bottom: 1px solid ${palette.blue[1]};
    }
  }
`
const BtnBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  button{
    width: 15%;
    padding: .5rem 0;
    font-size: 18px;
    border-radius: 1rem;
    border: none;
    color: white;
    background-color: ${palette.blue[0]};
    margin-right: 10rem;
    cursor: pointer;
    &:hover{
      background-color: ${palette.blue[1]};
    }
  }
`
function Patient({patient}){
  return(
    <div className="patient_block">
      <span>{patient.name}</span>
    </div>
  );
}
function Round({round, onRemove}){
  const [visible, setVisible] = useState(false);
  return(
    <div className="round_block">
      <div className="round_text">
        <span className="loc">병동위치: {round.loc}호</span>
        <span className="icon" onClick={()=>{
          setVisible(!visible);
        }}>
          {visible ? <AiFillCaretUp />: <AiFillCaretDown />}
        </span>
      </div>
      {visible && 
        <table>
          <thead>
            <tr>
              <th>이름</th> <th>회진시간</th> <th>완료</th> <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{round.code}</td>
              <td>{round.time_h}시 {round.time_m}분</td>
              <td>
                <input type="checkbox" />
              </td>
              <RoundDel onClick={()=>onRemove(round.id)}>
                <MdDelete />
              </RoundDel> 
            </tr>
          </tbody>
        </table>
      }
    </div>
  );
}

function DoctorRound() {
  const [value, onChange] = useState(new Date());
  const [modalOpen, setModalOpen] = useState(false);

  const [patients, setPatients] = useState([
    {
      id: 'patient001',
      room: '101',
      name: '정재욱',
    },
  ]);
  
  const [inputs, setInputs] = useState({
    code: '',
    time_h: '',
    time_m: ''
  });
  const {code, time_h, time_m} = inputs;

  const [rounds, setRounds] = useState([
    {
      id: 1,
      loc: '101',
      code: 'PATIENT001',
      time_h: '13',
      time_m: '00',
      active: true
    },
    {
      id: 2,
      loc: '102',
      code: 'PATIENT002',
      time_h: '13',
      time_m: '30',
      active: true
    },
    {
      id: 3,
      loc: '103',
      code:'PATIENT003',
      time_h: '14',
      time_m: '00',
      active: true
    },
    {
      id: 4,
      loc: '104',
      code:'PATIENT004',
      time_h: '14',
      time_m: '30',
      active: true
    },
  ]);
  const nextId = useRef(5);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal=()=>{
    setModalOpen(false);
  };

  const onRe=(e)=>{
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onAdd = () => {
    alert("새로운 일정이 등록되었습니다.");

    const round = {
      id: nextId.current,
      loc: '101',
      code: code,
      time_h: time_h,
      time_m: time_m
    };
    setRounds([...rounds, round]);

    setInputs({
      code: '',
      time_h: '',
      time_m: ''
    });
    nextId.current += 1;
  }

  const onRemove = id => {
    setRounds(rounds.filter(round => round.id !== id));
  };

  return (
    <Box>
      <CalendarBlock>
        <div className="cal">
          <Calendar
            className="calendar"
            onChange={onChange}
            value={value} />
        </div>
      </CalendarBlock>
      <RoundInfoBlock>
        <div className="date">
          * {moment(value).format("YYYY년 MM월 DD일")} *
        </div>

        <RoundBlock>
          {rounds.map(round => (
            <Round 
              round = {round}
              key={round.id}
              onRemove={onRemove}/>
          ))}
        </RoundBlock>

        <div className="addround">
          <AiOutlinePlus onClick={openModal}/>
        </div>

        <AddRound 
          open={modalOpen}
          close={closeModal}
          code={code}
          time_h={time_h}
          time_m={time_m}
          onRe={onRe}
          onAdd={onAdd}/>

        <BtnBlock>
          <button className="return">전체 휴진</button>
        </BtnBlock>

      </RoundInfoBlock>
    </Box>
  )
};

export default DoctorRound