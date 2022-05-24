import React from 'react'
import DoctorRound from '../../components/doctor/DoctorRound'
import {useSelector, useDispatch} from 'react-redux';
import { roundingChange } from '../../modules/rounding';

function DoctorRoundContainer() {
  const {roundingDate}=useSelector(({rounding})=>({
    roundingDate: rounding.roundingDate
  }));
  const dispatch = useDispatch();

  const onChangeDate = (name,value) =>{
    dispatch(roundingChange({
      key: name,
      value,
    }))
  };

  return (
    <DoctorRound
      roundingDate={roundingDate}
      onChangeDate={onChangeDate} />
  )
}

export default DoctorRoundContainer