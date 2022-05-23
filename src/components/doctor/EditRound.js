import React from 'react'
import styled, {keyframes} from 'styled-components';
import palette from '../../lib/styles/palette';

const ModalFade = keyframes`
  from{
    opacity: 0;
    margin-top: -50px;
  }
  to{
    opacity: 1;
    margin-top: 0%;
  }
`
const ModalbgFade = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`
const AddRoundModal = styled.div`
  .modal{
    display: none;
    position: fixed;
    align-items: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
    background-color: rgba(0,0,0,0.6);
  }
  button{
    outline: 0;
    border: 0;
  }
  section {
    width: 90%;
    max-width: 450px;
    margin: 0 auto;
    border-radius: 1rem;
    background-color: white;
    animation: ${ModalFade} 0.3s;
    overflow: hidden;
    header{
      position: relative;
      padding: 16px 30px;
      background-color: ${palette.blue[0]};
      font-weight: 800;
      button{
        position: absolute;
        cursor: pointer;
        top: 15px;
        right: 15px;
        width: 30px;
        font-size: 21px;
        font-weight: 700;
        text-align: center;
        background-color: transparent;
      }
    }
    main{
      display: flex;
      flex-direction: column;
      padding: 16px;
      border-top: 1px solid ${palette.gray[1]};
      border-bottom: 1px solid ${palette.gray[1]};
      .name{
        margin-bottom: 1rem;
        font-size: 2rem;
        text-align: center;
        color: ${palette.gray[1]};
      }
      .box{
        display: flex;
      }
      input{
        width: 20%;
        margin: 0 1rem 1rem 1rem;
        margin-left: 1rem;
        border: none;
        font-size: 18px;
      }
    }
    footer{
      padding: 12px 16px;
      text-align: center;
      button{
        padding: 6px 12px;
        color: white;
        background-color: ${palette.blue[0]};
        border-radius: 5px;
        font-size: 13px;
        &:enabled:hover{
          background-color: ${palette.blue[1]};
          cursor: pointer;
        }
      }
    }
  }
  .openModal{
    display: flex;
    align-items: center;
    animation: ${ModalbgFade} 0.3s;
  }
`
function EditRound(props) {
  const {open, close, code, time_h, time_m, onRe, onAdd} = props;

  return (
    <AddRoundModal>
      <div className={open ? 'openModal modal':'modal'}>
        {open ? (
          <section>
            <header>
              회진 일정 수정
              <button className='close' onClick={close}>
                &times;
              </button>
            </header>
            <main>
              <div className="name">
                <div>PATIENT001</div>
              </div>
              <div className="box">
                <div>회진시간: </div>
                <input 
                  name="time_h"
                  type="text"
                  placeholder='ex) 13'
                  value={time_h}
                  onChange={onRe}/>
                <div>시 </div>
                <input 
                  name="time_m"
                  type="text"
                  placeholder='ex) 00'
                  value={time_m}
                  onChange={onRe}/>
                <div>분</div>
              </div>
            </main>
            <footer>
              <button
                disabled={
                  !code && !time_h && !time_m ? true : false
                }
                onClick={onAdd}>
                수정하기
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </AddRoundModal>
  )
}

export default EditRound