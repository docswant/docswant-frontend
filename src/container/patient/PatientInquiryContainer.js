import React, {useEffect} from 'react'
import InquiryListForm from '../../components/patient/InquiryListForm';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import { inquiryAddSuccess, inquiryChange, inquiryDeleteFailure, inquiryDeleteSuccess, inquiryFailure, inquirySuccess, inquiryUpdateFailure, inquiryUpdateSuccess } from '../../modules/inquiry';
import { useParams } from 'react-router-dom';
import { loadingFinish, loadingStart } from '../../modules/loading';
import { getCookie } from '../../lib/cookie';

function PatientInquiryContainer() {
  const{
    inquiry,
    inquiryError,
    inquiryAdd,
    inquiryAddError,
    title,
    content,
    inquiryDelete,
    inquiryDeleteError,
    inquiryUpdate,
    inquiryUpdateError,
    loading,
  } = useSelector(({inquiry, loading}) => ({
    inquiry: inquiry.inquiry,
    inquiryError: inquiry.inquiryError,
    inquiryAdd: inquiry.inquiryAdd,
    inquiryAddError: inquiry.inquiryAddError,
    title: inquiry.title,
    content: inquiry.content,
    inquiryDelete: inquiry.inquiryDelete,
    inquiryDeleteError: inquiry.inquiryDeleteError,
    inquiryUpdate: inquiry.inquiryUpdate,
    inquiryUpdateError: inquiry.inquiryUpdateError,
    loading: loading.loading,
  }));

  const dispatch = useDispatch();
  const {user_Id} = useParams();

  useEffect(() => {
    async function getInquiry(){
      // dispatch(loadingStart(true));
      const accessToken = getCookie('myAToken');
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      try {
        const response = await axios.get(
          `https://docswant.zooneon.dev/api/v1/patient/${user_Id}/requirement?page=1&size=3`
        );
        dispatch(inquirySuccess(response.data.data));
      }
      catch(e){
        dispatch(inquiryFailure(e));
      }
      // dispatch(loadingFinish(false));
    }
    getInquiry();
  }, [dispatch, user_Id]);

  async function getAddInquiry(){
    const accessToken = getCookie('myAToken');
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
    }
    catch(e){
      dispatch(inquiryAddError(e));
    }
  };
  const onGetAddInquiry = () =>{
    getAddInquiry();
  };

  const onChangeField = (e) => {
    const {name, value} = e.target;
    dispatch(
      inquiryChange({
        key: name,
        value,
      }),
    );
  };

  async function getDeleteInquiry(id) {
    const accessToken = getCookie('myAToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    try{
      await axios.delete(
        `https://docswant.zooneon.dev/api/v1/patient/${user_Id}/requirement/${id}`
      );
      dispatch(inquiryDeleteSuccess(true));
    }
    catch(e){
      dispatch(inquiryDeleteFailure(e));
    }
  };
  const onGetDeleteInquiry = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('해당 문의사항을 삭제하겠습니까?') === true) {
      getDeleteInquiry(id);
      alert('성공적으로 삭제 되었습니다.');
    }
    else{
      return;
    }
  }

  async function getUpdateInquiry(id) {
    const accessToken = getCookie('myAToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    try{
      await axios.patch(
        `https://docswant.zooneon.dev/api/v1/patient/${user_Id}/requirement/${id}/content`,
        {
          content: content,
        }
      );
      dispatch(inquiryUpdateSuccess(true));
    }
    catch(e){
      dispatch(inquiryUpdateFailure(e));
    }
  };
  const onGetUpdateInquiry = (id) => {
    getUpdateInquiry(id);
    alert('성공적으로 수정 되었습니다.');
  };

  useEffect(() => {
    if(inquiryAdd === true) {
      window.location.replace(`/patient/inquiry_list/${user_Id}`);
    }
  }, [inquiryAdd, user_Id]);

  useEffect(() => {
    if(inquiryDelete === true) {
      window.location.replace(`/patient/inquiry_list/${user_Id}`);
    }
  }, [inquiryDelete, user_Id])

  useEffect(() => {
    if(inquiryUpdate === true) {
      window.location.replace(`/patient/inquiry_list/${user_Id}`);
    }
  }, [inquiryUpdate, user_Id])

  return (
    <InquiryListForm
      inquiry = {inquiry}
      title = {title}
      content = {content}
      onGetAddInquiry = {onGetAddInquiry}
      onChangeField = {onChangeField}
      onGetDeleteInquiry = {onGetDeleteInquiry}
      onGetUpdateInquiry = {onGetUpdateInquiry}
      loading = {loading}
    />
  )
}

export default PatientInquiryContainer