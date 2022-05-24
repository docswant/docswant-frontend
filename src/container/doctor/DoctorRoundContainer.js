import React from 'react'
import DoctorRound from '../../components/doctor/DoctorRound'
import {useSelector, useDispatch} from 'react-redux';
import { roundingAddFailure, roundingAddSuccess, roundingChange, roundingFailure, roundingSuccess } from '../../modules/rounding';
import axios from 'axios';
import { getCookie } from '../../lib/cookie';

function DoctorRoundContainer() {
  const {rounding, patient, time, date}=useSelector(({rounding})=>({
    rounding: rounding.rounding,
    patient: rounding.patient,
    time: rounding.time,
    date: rounding.date,
  }));
  const dispatch = useDispatch();

  async function getRounding(date) {
    const accessToken = getCookie('myAToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    try{
      const response = await axios.get(
        `https://docswant.zooneon.dev/api/v1/doctor/DOCTOR005/rounding?date=${date}`
      );
      dispatch(roundingSuccess(response.data.data));
      console.log(response.data.data)
    }
    catch(e){
      dispatch(roundingFailure(e));
    }
  };

  const onGetRounding = (date) => {
    getRounding(date);
  };

  async function getAddRounding() {
    const accessToken = getCookie('myAToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    try{
      await axios.post(
        `https://docswant.zooneon.dev/api/v1/doctor/DOCTOR005/rounding`, {
          code : patient,
          roundingDate : "2022-05-24",
          roundingTime : time
        }
      );
      console.log(true);
      dispatch(roundingAddSuccess(true))
    }
    catch(e){
      dispatch(roundingAddFailure(e));
    }
  }

  const onGetAddRounding = () => {
    getAddRounding();
  }
  const onChangeField = (e) => {
    const {name, value} = e.target;
    dispatch(roundingChange({
      key: name,
      value,
    }));
  };

  return (
    <DoctorRound
      rounding={rounding}
      onGetRounding={onGetRounding}
      onChangeField={onChangeField}
      patient={patient}
      time={time}
      date={date}
      onGetAddRounding={onGetAddRounding} />
  )
}

export default DoctorRoundContainer