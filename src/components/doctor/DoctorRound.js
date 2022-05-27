import React, { useState } from 'react';
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
  margin-left: 1rem;
  cursor: pointer;

  #remove {
    &:hover {
      color: #ff6b6b;
    }
  }

  #edit {
    &:hover {
      color: blue;
    }
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
      cursor: pointer;
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
function Round({ open, rounding, onGetDeleteRounding, onRoundingState }) {
  const [isRoundingSelect, setIsRoundingSelect] = useState(false);
  let sortRounding;
  let newArr;

  if (rounding) {
    sortRounding = rounding.sort(function (a, b) {
      return a.hospitalRoom - b.hospitalRoom;
    });
  }

  const onHandleClick = (idx) => {
    newArr = Array(rounding.length).fill(false);
    newArr[idx] = !isRoundingSelect[idx];
    setIsRoundingSelect(newArr);
  };

  return (
    sortRounding && (
      <RoundBlock>
        {sortRounding.map((r, index) => (
          <div className="round_block" key={index}>
            <div className="round_text">
              <span className="loc">병동위치: {r.hospitalRoom}호</span>
              {isRoundingSelect[index] === true ? (
                <AiFillCaretUp onClick={() => onHandleClick(index)} />
              ) : (
                <AiFillCaretDown onClick={() => onHandleClick(index)} />
              )}
            </div>
            {isRoundingSelect[index] === true && (
              <table>
                <thead>
                  <tr>
                    <th>이름</th> <th>회진시간</th> <th>완료</th>
                    <th>삭제/수정</th>
                  </tr>
                </thead>
                <tbody>
                  {r.roundings.map((rr) => (
                    <tr key={rr.id}>
                      <td>{rr.patientName}</td>
                      <td>{rr.roundingTime}</td>
                      <td>
                        {rr.roundingStatus === 'DONE' ? (
                          <span
                            style={{
                              cursor: 'pointer',
                              color: 'red',
                            }}
                            onClick={() => onRoundingState(rr.id)}
                          >
                            완료
                          </span>
                        ) : (
                          <input
                            type="checkbox"
                            style={{ cursor: 'pointer' }}
                            onClick={() => onRoundingState(rr.id)}
                          />
                        )}
                      </td>
                      <td>
                        <RoundDel>
                          <MdDelete
                            id="remove"
                            onClick={() => onGetDeleteRounding(rr.id)}
                          />
                          <MdEdit
                            id="edit"
                            onClick={() => open(rr.id, rr.patientName)}
                          />
                        </RoundDel>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        ))}
      </RoundBlock>
    )
  );
}

function DoctorRound({
  rounding,
  onGetRounding,
  onChangeField,
  patient,
  time,
  date,
  onGetAddRounding,
  loading,
  onGetDeleteRounding,
  onUpdateRounding,
  onRoundingState,
  onGetDeleteToday,
}) {
  const [value, onChange] = useState(new Date());
  const [today, setToday] = useState('');
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [roundingId, setRoundingId] = useState(null);
  const [roundingName, setRoundingName] = useState('');

  let array = [];
  let string = '';

  if (rounding) {
    for (let i = 0; i < rounding.length; i++) {
      for (let j = 0; j < rounding[i].roundings.length; j++) {
        array.push(rounding[i].roundings[j].id);
      }
    }
  }

  for (let i = 0; i < array.length; i++) {
    string += array[i] + ',';
  }
  string = string.slice(0, -1);

  const openModal1 = () => {
    setModalOpen1(true);
  };
  const openModal2 = (id, name) => {
    setModalOpen2(true);
    setRoundingId(id);
    setRoundingName(name);
  };
  const closeModal1 = () => {
    setModalOpen1(false);
  };
  const closeModal2 = () => {
    setModalOpen2(false);
  };

  const onCheckToday = (day) => {
    setToday(day);
  };

  return (
    <Box>
      <CalendarBlock>
        <div className="cal">
          <Calendar
            className="calendar"
            name="roundingDate"
            value={value}
            onChange={onChange}
            onClickDay={() => {
              onCheckToday(moment(value).format('YYYY-MM-DD'));
              onGetRounding(moment(value).format('YYYY-MM-DD'));
            }}
          />
        </div>
      </CalendarBlock>
      <RoundInfoBlock>
        <div className="date">
          * {moment(value).format('YYYY년 MM월 DD일')} *
        </div>

        {loading === true || (rounding && rounding.length === 0) ? (
          <span>회진일정이 없습니다</span>
        ) : (
          <Round
            rounding={rounding}
            onGetDeleteRounding={onGetDeleteRounding}
            onRoundingState={onRoundingState}
            open={openModal2}
          />
        )}

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
          today={today}
          onGetAddRounding={onGetAddRounding}
        />

        <EditRound
          open={openModal2}
          openEdit={modalOpen2}
          close={closeModal2}
          time={time}
          date={date}
          onChangeField={onChangeField}
          onUpdateRounding={onUpdateRounding}
          roundingId={roundingId}
          roundingName={roundingName}
        />

        <BtnBlock>
          <button
            className="return"
            onClick={() => onGetDeleteToday(string, today)}
          >
            오늘 휴진
          </button>
        </BtnBlock>
      </RoundInfoBlock>
    </Box>
  );
}

export default DoctorRound;
