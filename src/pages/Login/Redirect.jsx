//리다이렉트 되는 화면 
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import userContext from "../../context/index";
import Profile from '../Mypage/Profile';
import { useRecoilState } from 'recoil';
import { isLogined } from '../../utils/atom';

const Redirect = () => {
    //const [signup, setSignup] = useState(false);
    const context = useContext(userContext);
    const PARAMS = new URL(document.location).searchParams;
    const navigate = useNavigate();
    const KAKAO_CODE = PARAMS.get('code'); 
    const [isLogin, setLogin] = useRecoilState(isLogined);
    //인가코드를 KAKAO_CODE라는 이름으로 가져옵니다. 


    const sendAccessCode = () => { /*인가코드*/
        /*axios.post(`http://127.0.0.1:8000/api/kakaocode`,*/
        axios.post(`http://127.0.0.1:8000/accounts/kakao/callback/`,
        {
            code : KAKAO_CODE,
            headers : {"Content=Type" : `application/json`}}).then(response => {  
              if(response.status === 201) {
                const jwtAccessToken = response.data.jwt_access_token;
                const jwtRefreshToken = response.data.jwt_refresh_token;
                const kakao_id = response.data.kakao_id;
                //getProfile(kakao_id);
                context.setUser({
                    logined : true
                  })
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtAccessToken; //헤더에 access token 저장
                //localStorage.setItem('JwtToken', jwtAccessToken);
                localStorage.setItem('JwtRefresh', jwtRefreshToken);
                navigate('/')
              }
              else {
                console.log("login request fail");
              }

              
              /*context.setUser({
                kakaoId : response.data.code,
                name : response.data.code,
                email : response.data.code,
                like : response.data.code,
                post : [{"model":"accounts.post","pk":3,"fields":{"author":7,"title":"Yujin Post 1","body":"Smile","date":"2022-08-11"}},{"model":"accounts.post","pk":4,"fields":{"author":7,"title":"Yujin Post 2","body":"Happy","date":"2022-08-11"}}],
                reply : [{"model":"accounts.comment","pk":1,"fields":{"author":7,"post":1,"comment":"Good","date":"2022-08-11T04:51:52.534Z"}}],
                logined : true,
                //post: response.data.code,
              });*/
              console.log(response.data);
              //localStorage.setItem('token',response.data.kakao_id);
              
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

            context.setUser({
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
        /*
        .then(response => { //로그인한 유저 토큰저장. 
            if (response.data.user_profile.fields.access_token) {
                localStorage.setItem('token',response.data.user_profile.fields.access_token);
            } else {
                navigate('/');
            }
        })*/
        /*
        .then(response => { //로그인한 유저 토큰저장. 
            if (response.user_profile.fields.access_token) {
                localStorage.setItem('token',response.user_profile.fields.access_token);
            } else {
                navigate('/');
            }
        })*/
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
