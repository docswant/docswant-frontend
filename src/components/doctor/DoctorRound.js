import React, {useState} from 'react'
import palette from '../../lib/styles/palette';
import styled from 'styled-components';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

const Box = styled.div`
  display: flex;
  padding: 1rem 0;
`
const CalendarBlock = styled.div`
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
const RoundBlock = styled.div`
  width: 50%;
  padding: 1rem 2rem;
  text-align: center;
  .txt{
    font-size: 17px;
    font-weight: 600;
  }
  .main{
    display: inline-block;
    width: 100%;
    height: 18rem;
    margin: 1rem 0;
    line-height: 18rem;
  }
  button{
    width: 10rem;
    font-size: 16px;
    font-weight: 600;
    border: 1px solid ${palette.blue[0]};
    background-color: white;
    border-radius: 12px;
    padding: 0.3rem 0.9rem;
    cursor: pointer;
    &:hover{
      background-color: ${palette.blue[0]};
    }
  }
`

function DoctorRound() {
  const [value, onChange] = useState(new Date());

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
      <RoundBlock>
        <div className="txt">
          * {moment(value).format("YYYY년 MM월 DD일")} *
        </div>
        <div className="main">
          일정이 없습니다.
        </div>
        <button>수정하기</button>
      </RoundBlock>
    </Box>
  )
}

export default DoctorRound