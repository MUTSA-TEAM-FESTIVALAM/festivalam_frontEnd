import React, { useState, useEffect, useContext } from 'react';
import './styles/App.css';
import userContext from './context/User';
import Main from './pages/Main/Main';
import Detail from './pages/Festival/Detail';
import Calendar from './pages/Calendar/Calendar';
import Redirect from './pages/Login/Redirect';
import Profile from './pages/Mypage/Profile';
import FestList from './pages/Festival/FestList';
import { Routes, Route } from 'react-router-dom';
import CMreview from './pages/Community/CM_review';
import CMfriends from './pages/Community/CM_friends';
import CMinf from './pages/Community/CM_inf';
import CMticket from './pages/Community/CM_ticket';
import WritePost from './pages/Community/WritePost';
import RVShowPost from './pages/Community/Detail/RVShowPost';
import FRShowPost from './pages/Community/Detail/FRShowPost';
import TKShowPost from './pages/Community/Detail/TKShowPost';
import InfShowPost from './pages/Community/Detail/InfShowPost';
import Search from './pages/Search/Search';
import Theme from './pages/Main/Theme';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { LoginState } from './utils/atom';
import { accessToken } from './utils/atom';
import useAuth from './hooks/useAuth';

function App() {
	const [token, setToken] = useRecoilState(accessToken);
	const [isLogin, setLogin] = useRecoilState(LoginState);
	const [loading, setLoading] = useState(false);

	const checkAccessToken = async () => {
		if (localStorage.getItem('JwtRefresh') != null) {
			axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
			await axios
				.post(
					`http://127.0.0.1:8000/accounts/kakao/user/refresh`,
					{
						refresh_token: localStorage.getItem('JwtRefresh')
					},
					{
						headers: {
							'Content-Type': `application/json`
						}
					}
				)
				.then((response) => {
					if (response.status === 201 || response.status === 200) {
						const jwtAccessToken = response.data.access_token;
						const jwtRefreshToken = response.data.refresh_token;

						//* 로그인 상태 true로 설정합니다.
						setLogin(true);

						//* 헤더에 accesstoken 달아줍니다.
						axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtAccessToken; //헤더에 access token 저장
						setToken(jwtAccessToken);

						//* refresh token은 local에 저장해둡니다.
						localStorage.setItem('JwtRefresh', jwtRefreshToken);
						console.log('login 중입니다.');
						// if(callback){
						// 	callback(true);
						// }
					} else {
						setLogin(false);
					}
				})
				.catch((ex) => {
					setLogin(false);
				})
				.finally(() => {
					console.log('login check end');
				});
		}
		console.log('accesstoken : ' + token);
	};

	useEffect(() => {
		checkAccessToken();
	});

	return (
		<>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/calendar' element={<Calendar />} />
				<Route path='/redirect' element={<Redirect></Redirect>} />
				<Route path='/mypage' element={<Profile></Profile>}></Route>
				<Route path='/festlist' element={<FestList />} />
				<Route path='/detail/:id' element={<Detail />} />
				<Route path='/review' element={<CMreview />} />
				<Route path='/friends' element={<CMfriends />} />
				<Route path='/ticket' element={<CMticket />} />
				<Route path='/inf' element={<CMinf />} />
				<Route path='/writepost' element={<WritePost />} exact />
				<Route path='/writepost/modify/:postID' element={<WritePost />} exact />
				<Route path='/review/post/:postID' element={<RVShowPost />} />
				<Route path='/friends/post/:postID' element={<FRShowPost />} />
				<Route path='/ticket/post/:postID' element={<TKShowPost />} />
				<Route path='/inf/post/:postID' element={<InfShowPost />} />
				<Route path='/writepost' element={<WritePost />} />
				<Route path='/search' element={<Search></Search>} />
				<Route path='/theme' element={<Theme></Theme>} />
			</Routes>
		</>
	);
}

export default App;
