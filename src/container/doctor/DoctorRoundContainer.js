import React, { useEffect } from 'react';
import DoctorRound from '../../components/doctor/DoctorRound';
import { useSelector, useDispatch } from 'react-redux';
import {
  roundingAddFailure,
  roundingAddSuccess,
  roundingChange,
  roundingDeleteFailure,
  roundingDeleteSuccess,
  roundingDeleteTodayFailure,
  roundingDeleteTodaySuccess,
  roundingFailure,
  roundingStateUpdateFailure,
  roundingStateUpdateSuccess,
  roundingSuccess,
  roundingUpdateFailure,
  roundingUpdateSuccess,
} from '../../modules/rounding';
import axios from 'axios';
import { getCookie } from '../../lib/cookie';
import { useParams } from 'react-router-dom';
import { loadingFinish, loadingStart } from '../../modules/loading';

function DoctorRoundContainer() {
  const {
    rounding,
    patient,
    time,
    date,
    roundingAdd,
    loading,
    roundingDelete,
    roundingUpdate,
    roundingState,
    roundingDeleteToday,
  } = useSelector(({ rounding, loading }) => ({
    rounding: rounding.rounding,
    patient: rounding.patient,
    time: rounding.time,
    date: rounding.date,
    roundingAdd: rounding.roundingAdd,
    roundingDelete: rounding.roundingDelete,
    roundingUpdate: rounding.roundingUpdate,
    roundingState: rounding.roundingState,
    roundingDeleteToday: rounding.roundingDeleteToday,
    loading: loading.loading,
  }));
  const dispatch = useDispatch();
  const { user_Id } = useParams();

  let today = new Date();
  let year = today.getFullYear();
  let month = ('0' + (today.getMonth() + 1)).slice(-2);
  let day = ('0' + today.getDate()).slice(-2);
  let dateString = year + '-' + month + '-' + day;

  async function getRounding(date) {
    dispatch(loadingStart(true));
    const accessToken = getCookie('myAToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    try {
      const response = await axios.get(
        `https://docswant.zooneon.dev/api/v1/doctor/${user_Id}/rounding?date=${date}`,
      );
      dispatch(roundingSuccess(response.data.data));
    } catch (e) {
      dispatch(roundingFailure(e));
    }
    dispatch(loadingFinish(false));
  }

  const onGetRounding = (date) => {
    getRounding(date);
  };

  async function getAddRounding() {
    const accessToken = getCookie('myAToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    try {
      await axios.post(
        `https://docswant.zooneon.dev/api/v1/doctor/${user_Id}/rounding`,
        {
          code: patient,
          roundingDate: date,
          roundingTime: time,
        },
      );
      dispatch(roundingAddSuccess(true));
    } catch (e) {
      dispatch(roundingAddFailure(e));
    }
  }

  const onGetAddRounding = () => {
    getAddRounding();
  };

  const onChangeField = (e) => {
    const { name, value } = e.target;
    dispatch(
      roundingChange({
        key: name,
        value,
      }),
    );
  };

  async function getDeleteRounding(id) {
    const accessToken = getCookie('myAToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    try {
      await axios.delete(
        `https://docswant.zooneon.dev/api/v1/doctor/${user_Id}/rounding/${id}`,
      );
      dispatch(roundingDeleteSuccess(true));
    } catch (e) {
      dispatch(roundingDeleteFailure(e));
    }
  }

  const onGetDeleteRounding = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('회진일정을 삭제하시겠습니까?') === true) {
      getDeleteRounding(id);
    } else {
      return;
    }
  };

  async function getUpdateRounding(id) {
    const accessToken = getCookie('myAToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    try {
      await axios.patch(
        `https://docswant.zooneon.dev/api/v1/doctor/${user_Id}/rounding/${id}`,
        {
          roundingDate: date,
          roundingTime: time,
        },
      );
      dispatch(roundingUpdateSuccess(true));
    } catch (e) {
      dispatch(roundingUpdateFailure(e));
    }
  }

  const onUpdateRounding = (id) => {
    getUpdateRounding(id);
  };

  async function getRoundingState(id) {
    const accessToken = getCookie('myAToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    try {
      await axios.patch(
        `https://docswant.zooneon.dev/api/v1/doctor/${user_Id}/rounding/${id}/status`,
      );
      dispatch(roundingStateUpdateSuccess(true));
    } catch (e) {
      dispatch(roundingStateUpdateFailure(e));
    }
  }

  const onRoundingState = (id) => {
    getRoundingState(id);
  };

  async function getDeleteToday(string) {
    const accessToken = getCookie('myAToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    try {
      await axios.delete(
        `https://docswant.zooneon.dev/api/v1/doctor/${user_Id}/rounding?ids=${string}`,
      );
      dispatch(roundingDeleteTodaySuccess(true));
    } catch (e) {
      dispatch(roundingDeleteTodayFailure(e));
    }
  }

  const onGetDeleteToday = (string, date) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(`${date} 회진일정을 삭제하시겠습니까?`) === true) {
      getDeleteToday(string);
    } else {
      return;
    }
  };

  useEffect(() => {
    async function getRoundingDate() {
      dispatch(loadingStart(true));
      const accessToken = getCookie('myAToken');
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

      try {
        const response = await axios.get(
          `https://docswant.zooneon.dev/api/v1/doctor/${user_Id}/rounding?date=${dateString}`,
        );
        dispatch(roundingSuccess(response.data.data));
      } catch (e) {
        dispatch(roundingFailure(e));
      }
      dispatch(loadingFinish(false));
    }

    getRoundingDate();
  }, [dispatch, user_Id, dateString]);

  useEffect(() => {
    if (roundingAdd === true) {
      window.location.replace(`/doctor/round/${user_Id}`);
    }
  }, [roundingAdd, user_Id]);

  useEffect(() => {
    if (roundingDelete === true) {
      window.location.replace(`/doctor/round/${user_Id}`);
    }
  }, [roundingDelete, user_Id]);

  useEffect(() => {
    if (roundingUpdate === true) {
      window.location.replace(`/doctor/round/${user_Id}`);
    }
  }, [roundingUpdate, user_Id]);

  useEffect(() => {
    if (roundingState === true) {
      window.location.replace(`/doctor/round/${user_Id}`);
    }
  }, [roundingState, user_Id]);

  useEffect(() => {
    if (roundingDeleteToday === true) {
      window.location.replace(`/doctor/round/${user_Id}`);
    }
  }, [roundingDeleteToday, user_Id]);

  return (
    <DoctorRound
      rounding={rounding}
      onGetRounding={onGetRounding}
      onChangeField={onChangeField}
      patient={patient}
      time={time}
      date={date}
      onGetAddRounding={onGetAddRounding}
      loading={loading}
      onGetDeleteRounding={onGetDeleteRounding}
      onUpdateRounding={onUpdateRounding}
      onRoundingState={onRoundingState}
      onGetDeleteToday={onGetDeleteToday}
    />
  );
}

export default DoctorRoundContainer;
