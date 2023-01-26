import React from 'react';
import '../../styles/LoginModal.css'
import kakaoBtnImg from '../../img/kakao_login.png'

const REDIRECT_URL =  "http://localhost:3000/redirect";
const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=code`;

const LoginModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
            <button className="close" onClick={close}>
              &times;
            </button>
          <main>{props.children}</main>
          <footer>
            <a href = {KAKAO_AUTH_URL}>
                    <img src = {kakaoBtnImg} alt = "kakao-login-btn"/>
              </a>
          </footer>
        </section>
      ) : null}
    </div>
  );
};


export default React.memo(LoginModal);