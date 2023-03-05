import React, { useEffect } from 'react';
import logo from '../img/logo.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { modalControl, tabAtom } from '../utils/atom';
import styled from 'styled-components';
import { LoginState } from '../utils/atom';

function Navbar(props) {
	const [isLogin, setLogin] = useRecoilState(LoginState);
	const [tab, setTab] = useRecoilState(tabAtom);
	const setModalOpen = useSetRecoilState(modalControl);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		setTab(location.pathname.split('/')[1]);
	}, []);

	const openModal = () => {
		setModalOpen(true);
	};

	const routeMypage = () => {
		navigate('/mypage');
	};
	const navArr = [
		{ name: '홈', tab: '' },
		{
			name: '페스티벌 캘린더',
			tab: 'calendar'
		},
		{
			name: '페스티벌 정보',
			tab: 'festlist'
		},
		{
			name: '추천 페스티벌 테마',
			tab: 'theme'
		},
		{
			name: '커뮤니티',
			tab: 'review'
		}
	];

	return (
		<NavWrapper>
			<Logo>
				<img src={logo} alt='logo' />
				<Search>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
					<input />
				</Search>
			</Logo>
			{navArr.map((item, index) => (
				<NavBtn
					key={index}
					style={tab === item.tab ? { color: 'white', backgroundColor: '#5d0ec0', fontWeight: 600 } : {}}
					onClick={() => {
						setTab(item.tab);
						navigate(`/${item.tab}`);
					}}
				>
					{item.name}
				</NavBtn>
			))}
			<Line />
			{isLogin ? <NavBtn onClick={routeMypage}>마이페이지</NavBtn> : <NavBtn onClick={openModal}>로그인</NavBtn>}
		</NavWrapper>
	);
}

export default Navbar;

const NavWrapper = styled.div`
	text-align: center;
	position: fixed;
	height: 100vh;
	background-color: white;
	box-shadow: 0.1rem 0.1rem 0.7rem rgb(200, 200, 200);
	width: 18rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Logo = styled.div`
	margin-top: 2rem;
	img {
		width: 10rem;
		margin: 0 auto;
		margin-bottom: 2rem;
	}
`;

const NavBtn = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 13rem;
	height: 4.1rem;
	border-radius: 4rem;
	border-color: transparent;
	color: #5d0ec0;
	font-weight: 600;
	font-family: 'Noto Sans KR', sans-serif;
	font-size: 1.1rem;
	cursor: pointer;
	margin-bottom: 1rem;
	background-color: white;
	border: none;
	&:hover {
		color: white;
		background-color: #5d0ec0;
		font-weight: 600;
		box-shadow: 2px 2px 8px rgba(125, 125, 125, 0.96);
	}
`;

const Line = styled.hr`
	background-color: black;
	border-radius: 3rem;
	width: 6rem;
	height: 2px;
	margin-bottom: 2rem;
`;

const Search = styled.div`
	padding-top: 0rem;
	font-size: 1.5rem;
	padding-bottom: 3rem;
	display: flex;
	align-items: center;
	input {
		margin-left: 1rem;
		width: 9rem;
		height: 1.6rem;
		border-top: none;
		border-right: none;
		border-left: none;
		border-width: 3px;
		border-color: black;
		padding-bottom: none;
		font-size: 1.1rem;
		font-weight: 700;
		&:focus {
			outline: none;
		}
	}
`;
