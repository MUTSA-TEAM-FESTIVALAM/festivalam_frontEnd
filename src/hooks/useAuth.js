import { useContext, useDebugValue } from "react";
import { useRecoilState } from "recoil";
import { LoginState } from "../utils/atom";
import { accessToken } from "../utils/atom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useAuth = (userAuth) => {
    //const navigate = useNavigate();
    const [isLogin, setLogin] = useRecoilState(LoginState);
    const [token, setToken] = useRecoilState(accessToken);
	setLogin(userAuth);
    console.log("accesstoken : " + token);
		if(localStorage.getItem('JwtRefresh')!= null){
			axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
			axios.post(`http://127.0.0.1:8000/accounts/kakao/user/refresh`, {
			refresh_token : localStorage.getItem('JwtRefresh')
		}, { headers: {
			"Content-Type": `application/json`
		}},
		).then( response => {
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
			console.log('login 중입니다.')
			}
			else {
				setLogin(false);
            }
			})
		.catch(ex => {
			setLogin(false);
		})
		.finally(() => {
			console.log("login check end");
		})
		}
        return isLogin
}

export default useAuth;