//리다이렉트 되는 화면 
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import userContext from "../../context/User";
import { useRecoilState } from 'recoil';
import { LoginState } from '../../utils/atom';
import { accessToken } from '../../utils/atom';


const Redirect = () => {
    //const [signup, setSignup] = useState(false);
    const usercontext = useContext(userContext);
    const PARAMS = new URL(document.location).searchParams;
    const navigate = useNavigate();
    const KAKAO_CODE = PARAMS.get('code'); 
    const [isLogin, setLogin] = useRecoilState(LoginState);
    const [token, setToken] = useRecoilState(accessToken);
    //인가코드를 KAKAO_CODE라는 이름으로 가져옵니다. 


    const sendAccessCode = () => { /*인가코드*/
        axios.post(`http://127.0.0.1:8000/accounts/kakao/callback/`,
        {
            code : KAKAO_CODE,
            headers : {"Content-Type" : `application/json`}}).then(response => {  
              if(response.status === 201 || response.status === 200) {
                const jwtAccessToken = response.data.access_token;
                const jwtRefreshToken = response.data.refresh_token;
                
                //* 로그인 상태 true로 설정합니다.
                setLogin(true);
                
                //* 헤더에 accesstoken 달아줍니다.
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtAccessToken; //헤더에 access token 저장
                setToken(jwtAccessToken);
                
                //* refresh token은 local에 저장해둡니다. 
                localStorage.setItem('JwtRefresh', jwtRefreshToken);

                //*로그인에 성공하였다면 Home으로 되돌아갑니다.
                navigate('/')
              }
              else {
                console.log("login request fail");
              }

              console.log(response.data);
        },  
        {xsrfCookieName: 'csrftoken', xrfHeaderName: 'X-CSRFToken'})
    }
    
    const getProfile = (kakao_id) => {
        kakao_id = Number(kakao_id)
        axios.get(`http://127.0.0.1:8000/accounts/kakao/user/${kakao_id}/profile/`,)
        .then(response => {
            localStorage.setItem('kakaoId',response.data.user_profile[0].fields.kakao_id);
            localStorage.setItem('name',response.data.user_profile[0].fields.username);
            localStorage.setItem('email',response.data.user_profile[0].fields.email);
            localStorage.setItem('post',JSON.stringify(response.data.user_post));
            localStorage.setItem('reply',JSON.stringify(response.data.user_comment));
            localStorage.setItem('logined',true);

            usercontext.setUser({
                kakaoId : response.data.user_profile[0].fields.kakao_id,
                name : response.data.user_profile[0].fields.username,
                email : response.data.user_profile[0].fields.email,
                post : response.data.user_post,
                reply : response.data.user_comment,
                logined : true
              })
            //console.log(JSON.stringify(context.user.reply))
            navigate('/mypage')
        })
        .catch(function (error){
            <h1>로그인 정보를 받아오는데 오류가 발생하였습니다.</h1>
        } )
    }

    useEffect(() => {
        if(!PARAMS) return;
        sendAccessCode();
    },[]);
    

    return (

        <div>
            카카오 로그인 리다이렉트 화면입니다. 
        </div>
    );
};

export default React.memo(Redirect);


    /*
    const sendAccessCode = () => {
        axios({
            url : 'http://172.20.10.4:8000/accounts/kakao/callback/',
            method : "POST",
            data : {'code' : KAKAO_CODE},
            headers : {"X-CSRFToken" : CSRFToken},
            xsrfHeaderName: "X-CSRFToken",
            }
        ).then(response => {console.log(response.data);})}
    */

         /*백엔드에서 하는 행동
    const getKaKaoToken = () => {
        fetch(`https://kauth.kakao.com/oauth/token` ,{
            method : 'POST',
            headers : { 'Content-Type' : 'application/x-www-form-urlencoded'},
            body : `grant_type=authorization_code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URL}&code=${KAKAO_CODE}`,
        })
        .then(res => res.json())
        .then(data => {
            if (data.access_token) {
                localStorage.setItem('token',data.access_token);
            } else {
                navigate('/');
            }
        });
    };*/
