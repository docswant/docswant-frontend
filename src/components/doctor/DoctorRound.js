import React, { useState, useRef } from 'react';
import palette from '../../lib/styles/palette';
import styled from 'styled-components';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import { MdDelete, MdEdit } from 'react-icons/md';
import { AiOutlinePlus, AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import AddRound from './AddRound';
import EditRound from './EditRound';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 150px;
`;
const CalendarBlock = styled.div`
  width: 100%;
  padding: 3rem 2rem;
  border-bottom: solid 1px ${palette.gray[0]};
  .cal {
    text-align: center;
  }
  .calendar {
    display: inline-block;
    width: 40%;
    border-radius: 3rem;
    @media (max-width: 912px) {
      width: 95%;
    }
  }
`;
const RoundInfoBlock = styled.div`
  width: 100%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .date {
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
    margin: 1rem 0;
    svg {
      color: black;
      font-weight: bold;
      font-size: 25px;
      cursor: pointer;
    }
  }
`;
const RoundDel = styled.div`
  display: flex;
  align-items: center;
  color: lightgray;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;
const RoundEdit = styled.div`
  display: flex;
  align-items: center;
  color: lightgray;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;
const RoundBlock = styled.div`
  width: 100%;
  padding: 1rem 1rem;
  display: grid;
  grid-template-columns: 15rem 15rem 15rem 15rem;
  grid-gap: 3rem;
  justify-content: center;
  @media (max-width: 912px) {
    grid-template-columns: 11rem 11rem;
    grid-gap: 1rem;
  }
  .round_block {
    display: flex;
    flex-direction: column;
    .round_text {
      text-align: center;
      padding: 1rem;
      width: 100%;
      border: 1px solid ${palette.blue[1]};
      border-radius: 1rem;
      font-size: 18px;
      @media (max-width: 912px) {
        font-size: 14px;
      }
      .loc {
        margin-right: 3rem;
        @media (max-width: 912px) {
          margin-right: 1rem;
        }
      }
      .icon {
        &:hover {
          cursor: pointer;
        }
      }
    }
    table {
      border-collapse: collapse;
      @media (max-width: 912px) {
        font-size: 12px;
      }
    }
    tbody {
      text-align: center;
      margin-bottom: 3rem;
    }
    th {
      border-bottom: 1px solid ${palette.blue[1]};
    }
  }
`;
const BtnBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  button {
    width: 10%;
    padding: 0.5rem 0;
    font-size: 18px;
    border-radius: 1rem;
    border: none;
    color: white;
    background-color: ${palette.blue[0]};
    margin-right: 10rem;
    cursor: pointer;
    &:hover {
      background-color: ${palette.blue[1]};
    }
    @media (max-width: 912px) {
      width: 30%;
      font-size: 14px;
      margin-right: 1rem;
    }
  }
`;
// function Round({ round, onRemove, onClick }) {
//   const [visible, setVisible] = useState(false);
//   return (
//     <div className="round_block">
//       <div className="round_text">
//         <span className="loc">병동위치: {round.loc}호</span>
//         <span
//           className="icon"
//           onClick={() => {
//             setVisible(!visible);
//           }}
//         >
//           {visible ? <AiFillCaretUp /> : <AiFillCaretDown />}
//         </span>
//       </div>
//       {visible && (
//         <table>
//           <thead>
//             <tr>
//               <th>이름</th> <th>회진시간</th> <th>완료</th> <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>{round.code}</td>
//               <td>
//                 {round.time_h}시 {round.time_m}분
//               </td>
//               <td>
//                 <input type="checkbox" />
//               </td>
//               <td>
//                 <RoundDel onClick={() => onRemove(round.id)}>
//                   <MdDelete />
//                 </RoundDel>
//                 <RoundEdit onClick={onClick}>
//                   <MdEdit />
//                 </RoundEdit>
//               </td>
//             </tr>
//             <tr>
//               <td>{round.code}</td>
//               <td>
//                 {round.time_h}시 {round.time_m}분
//               </td>
//               <td>
//                 <input type="checkbox" />
//               </td>
//               <td>
//                 <RoundDel onClick={() => onRemove(round.id)}>
//                   <MdDelete />
//                 </RoundDel>
//                 <RoundEdit>
//                   <MdEdit />
//                 </RoundEdit>
//               </td>
//             </tr>
//             <tr>
//               <td>{round.code}</td>
//               <td>
//                 {round.time_h}시 {round.time_m}분
//               </td>
//               <td>
//                 <input type="checkbox" />
//               </td>
//               <td>
//                 <RoundDel onClick={() => onRemove(round.id)}>
//                   <MdDelete />
//                 </RoundDel>
//                 <RoundEdit>
//                   <MdEdit />
//                 </RoundEdit>
//               </td>
//             </tr>
//             <tr>
//               <td>{round.code}</td>
//               <td>
//                 {round.time_h}시 {round.time_m}분
//               </td>
//               <td>
//                 <input type="checkbox" />
//               </td>
//               <td>
//                 <RoundDel onClick={() => onRemove(round.id)}>
//                   <MdDelete />
//                 </RoundDel>
//                 <RoundEdit>
//                   <MdEdit />
//                 </RoundEdit>
//               </td>
//             </tr>
//             <tr>
//               <td>{round.code}</td>
//               <td>
//                 {round.time_h}시 {round.time_m}분
//               </td>
//               <td>
//                 <input type="checkbox" />
//               </td>
//               <td>
//                 <RoundDel onClick={() => onRemove(round.id)}>
//                   <MdDelete />
//                 </RoundDel>
//                 <RoundEdit>
//                   <MdEdit />
//                 </RoundEdit>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

function DoctorRound({rounding, onGetRounding, onChangeField, patient, time, date, onGetAddRounding}) {
  const [value, onChange] = useState(new Date());
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);

  const openModal1 = () => {
    setModalOpen1(true);
  };
  const openModal2 = () => {
    setModalOpen2(true);
  };
  const closeModal1 = () => {
    setModalOpen1(false);
  };
  const closeModal2 = () => {
    setModalOpen2(false);
  };

  // const onRe = (e) => {
  //   const { name, value } = e.target;
  //   setInputs({
  //     ...inputs,
  //     [name]: value,
  //   });
  // };

  // const onAdd = () => {
  //   alert('새로운 일정이 등록되었습니다.');

  //   const round = {
  //     id: nextId.current,
  //     loc: '101',
  //     code: code,
  //     time_h: time_h,
  //     time_m: time_m,
  //   };
  //   setRounds([...rounds, round]);

  //   setInputs({
  //     code: '',
  //     time_h: '',
  //     time_m: '',
  //   });
  //   nextId.current += 1;
  // };

  // const onRemove = (id) => {
  //   setRounds(rounds.filter((round) => round.id !== id));
  // };

  return (
      <Box>
        <CalendarBlock>
          <div className="cal">
            <Calendar
              className="calendar"
              name="roundingDate"
              value={value}
              onChange={onChange}
              onClickDay={() => onGetRounding(moment(value).format("YYYY-MM-DD"))}/>
          </div>
        </CalendarBlock>
        <RoundInfoBlock>
          <div className="date">
            * {moment(value).format('YYYY년 MM월 DD일')} *
          </div>

          {/* {rounding.length === 0 
          ? (<span>회진일정이 없습니다</span>) : (<span>ㅁㅁ</span> )} */}

          <div className="addround">
            <AiOutlinePlus onClick={openModal1} />
          </div>

          <AddRound
            open={modalOpen1}
            close={closeModal1}
            onChangeField={onChangeField}
            patient={patient}
            time={time}
            date={date}
            onGetAddRounding={onGetAddRounding}
          />

          {/* <EditRound
            open={modalOpen2}
            close={closeModal2}
            code={code}
            time_h={time}
            onRe={onRe}
          /> */}

          <BtnBlock>
            <button className="return">전체 휴진</button>
          </BtnBlock>
        </RoundInfoBlock>
      </Box>
    
  );
}

export default DoctorRound;
