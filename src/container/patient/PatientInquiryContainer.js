import React, { useEffect } from 'react';
import InquiryListForm from '../../components/patient/InquiryListForm';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  inquiryAddSuccess,
  inquiryChange,
  inquiryDeleteFailure,
  inquiryDeleteSuccess,
  inquiryFailure,
  inquiryInitialize,
  inquirySuccess,
  inquiryUpdateFailure,
  inquiryUpdateSuccess,
} from '../../modules/inquiry';
import { useParams } from 'react-router-dom';
import { getCookie } from '../../lib/cookie';
import { loadingFinish, loadingStart } from '../../modules/loading';

function PatientInquiryContainer() {
  const {
    inquiry,
    inquiryAdd,
    inquiryAddError,
    title,
    content,
    inquiryDelete,
    inquiryUpdate,
    loading,
  } = useSelector(({ inquiry, loading }) => ({
    inquiry: inquiry.inquiry,
    inquiryAdd: inquiry.inquiryAdd,
    title: inquiry.title,
    content: inquiry.content,
    inquiryDelete: inquiry.inquiryDelete,
    inquiryUpdate: inquiry.inquiryUpdate,
    loading: loading.loading,
  }));

  const dispatch = useDispatch();
  const { user_Id, page_number } = useParams();

  useEffect(() => {
    async function getInquiry() {
      // const accessToken = getCookie('myAToken');
      const accessToken = JSON.parse(localStorage.getItem('myAToken'));
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      dispatch(loadingStart(true));
      try {
        const response = await axios.get(
          `https://docswant.zooneon.dev/api/v1/patient/${user_Id}/requirement?page=${page_number}&size=6`,
        );
        dispatch(inquirySuccess(response.data.data));
      } catch (e) {
        dispatch(inquiryFailure(e));
      }
      dispatch(loadingFinish(false));
    }
    getInquiry();
  }, [dispatch, user_Id, page_number]);

  async function getAddInquiry() {
    // const accessToken = getCookie('myAToken');
    const accessToken = JSON.parse(localStorage.getItem('myAToken'));
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    try {
      await axios.post(
        `https://docswant.zooneon.dev/api/v1/patient/${user_Id}/requirement`,
        {
          title: title,
          content: content,
        },
      );
      dispatch(inquiryAddSuccess(true));
    } catch (e) {
      dispatch(inquiryAddError(e));
    }
  }
  const onGetAddInquiry = () => {
    getAddInquiry();
  };

  const onChangeField = (e) => {
    const { name, value } = e.target;
    dispatch(
      inquiryChange({
        key: name,
        value,
      }),
    );
  };

  async function getDeleteInquiry(id) {
    // const accessToken = getCookie('myAToken');
    const accessToken = JSON.parse(localStorage.getItem('myAToken'));
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    try {
      await axios.delete(
        `https://docswant.zooneon.dev/api/v1/patient/${user_Id}/requirement/${id}`,
      );
      dispatch(inquiryDeleteSuccess(true));
    } catch (e) {
      dispatch(inquiryDeleteFailure(e));
    }
  }
  const onGetDeleteInquiry = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('해당 문의사항을 삭제하겠습니까?') === true) {
      getDeleteInquiry(id);
    } else {
      return;
    }
  };

  async function getUpdateInquiry(id) {
    // const accessToken = getCookie('myAToken');
    const accessToken = JSON.parse(localStorage.getItem('myAToken'));
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    try {
      await axios.patch(
        `https://docswant.zooneon.dev/api/v1/patient/${user_Id}/requirement/${id}/content`,
        {
          content: content,
        },
      );
      dispatch(inquiryUpdateSuccess(true));
    } catch (e) {
      dispatch(inquiryUpdateFailure(e));
    }
  }
  const onGetUpdateInquiry = (id) => {
    getUpdateInquiry(id);
  };

  useEffect(() => {
    if (inquiryAdd === true) {
      window.location.replace(`/patient/inquiry_list/1/${user_Id}`);
    }
  }, [inquiryAdd, user_Id]);

  useEffect(() => {
    if (inquiryDelete === true) {
      alert('성공적으로 삭제 되었습니다.');
      window.location.replace(`/patient/inquiry_list/1/${user_Id}`);
    }
  }, [inquiryDelete, user_Id]);

  useEffect(() => {
    if (inquiryUpdate === true) {
      alert('성공적으로 수정 되었습니다.');
      window.location.replace(`/patient/inquiry_list/1/${user_Id}`);
    }
  }, [inquiryUpdate, user_Id]);

  useEffect(() => {
    dispatch(inquiryInitialize('content'));
  }, [dispatch]);

  useEffect(() => {
    dispatch(inquiryInitialize('title'));
  }, [dispatch]);

  return (
    <InquiryListForm
      inquiry={inquiry}
      title={title}
      content={content}
      onGetAddInquiry={onGetAddInquiry}
      onChangeField={onChangeField}
      onGetDeleteInquiry={onGetDeleteInquiry}
      onGetUpdateInquiry={onGetUpdateInquiry}
      loading={loading}
    />
  );
}

export default PatientInquiryContainer;
