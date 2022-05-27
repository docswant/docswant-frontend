import React, {useEffect} from 'react'
import InquiryListForm from '../../components/patient/InquiryListForm';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import { inquiryAddSuccess, inquiryChange, inquiryDeleteSuccess, inquiryUpdateSuccess } from '../../modules/inquiry';
import { useParams } from 'react-router-dom';
import { loadingFinish, loadingStart } from '../../modules/loading';

function PatientInquiryContainer() {
  const{
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

  async function getAddInquiry(){
    
    try {
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

  async function getDeleteInquiry() {

    try{
      dispatch(inquiryDeleteSuccess(true));
    }
    catch(e){
      dispatch(inquiryDeleteError(e));
    }
  };
  const onGetDeleteInquiry = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('해당 문의사항을 삭제하겠습니까?') === true) {
      getDeleteInquiry();
      alert('성공적으로 삭제 되었습니다.');
    }
    else{
      return;
    }
  }

  async function getUpdateInquiry() {

    try{
      dispatch(inquiryUpdateSuccess(true));
    }
    catch(e){
      dispatch(inquiryUpdateError(e));
    }
  };
  const onGetUpdateInquiry = () => {
    getUpdateInquiry();
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