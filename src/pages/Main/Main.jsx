import React, { useState, useRef } from 'react';

import mainImg from '../../img/mainHome.png';
import image1 from '../../img/fireCraker/image1.png';
import image2 from '../../img/fireCraker/image2.png';
import image3 from '../../img/fireCraker/image3.png';
import image4 from '../../img/fireCraker/image4.png';
import image5 from '../../img/fireCraker/image5.png';
import image6 from '../../img/fireCraker/image6.png';
import image7 from '../../img/fireCraker/image7.png';
import Navbar from '../../components/Nav';
import LoginModal from '../Login/LoginModal';
import { useRecoilState } from 'recoil';
import TagList from '../../components/Main/TagList';
import { LoginState, modalControl } from '../../utils/atom';
import { useEffect } from 'react';
import axios from 'axios';
import Scroll from '../../img/Scroll';
import styled from 'styled-components';

const Main = () => {
	const [checks1, setCheck1] = useState(0);
	const [checks2, setCheck2] = useState(0);
	const [checks31, setCheck31] = useState(0);
	const [checks32, setCheck32] = useState(0);
	const [checks33, setCheck33] = useState(0);
	const [modalOpen, setModalOpen] = useRecoilState(modalControl);
	const [isLogin, setLogin] = useRecoilState(LoginState);

	const closeModal = () => {
		setModalOpen(false);
	};

	const toAPI = () => {
		// if (isLogin === false) {
		// 	window.alert('로그인 이후 이용가능한 서비스입니다.');
		// } else {
		// 	dupCheckList.push(checks1);
		// 	dupCheckList.push(checks2);
		// 	if (checks31) {
		// 		dupCheckList.push(checks31);
		// 	}
		// 	if (checks32) {
		// 		dupCheckList.push(checks32);
		// 	}
		// 	if (checks33) {
		// 		dupCheckList.push(checks33);
		// 	}
		// }
		// console.log(dupCheckList);
	};
	const mainThemeRef = useRef(null);

	const scrollToElement = () => mainThemeRef.current.scrollIntoView({ behavior: 'smooth' });

	useEffect(() => {
		axios.get(`http://43.200.245.75:3306/festivalapp/festivals/`).then((response) => {
			console.log(response);
		});
	});

	return (
		<MainWrapper>
			<nav>
				<Navbar />
			</nav>
			<MainContainer>
				<LoginModal open={modalOpen} close={closeModal}>
					당신의 페스티벌 취향을 찾아, 페스티발람! 지금 바로 로그인하세요 !
				</LoginModal>
				<HomeContainer>
					<HomeBox>
						<HomeBody>
							<HomeTitle>
								<h1>
									당신의 취향을 <span>저격</span>할 페스티벌은?
								</h1>
								<p>아래로 이동해 테마 구현하기</p>
							</HomeTitle>
							<ScrollBtn onClick={scrollToElement}>
								<Scroll />
							</ScrollBtn>
						</HomeBody>
						{fireImgList.map((img, index) => (
							<img src={img.src} alt={img.name} key={index} style={img.style} />
						))}
					</HomeBox>
					<BackImg src={mainImg} alt='backgroundImg' />
				</HomeContainer>
				<ThemeContainer ref={mainThemeRef}>
					<ThemeBox>
						<TagList />
					</ThemeBox>
					<BackImg src={mainImg} alt='backgroundImg' />
				</ThemeContainer>
			</MainContainer>
		</MainWrapper>
	);
};

export default Main;

const MainWrapper = styled.div`
	display: flex;
	overflow-y: scroll;
	height: 100vh;
	background: linear-gradient(to bottom, rgba(67, 0, 131, 0.8), rgba(189, 106, 184, 0.8), rgba(67, 0, 131, 0.8));
	background-repeat: no-repeat;
	background-attachment: local;
	margin: 0;
	text-align: center;
`;

const MainContainer = styled.div`
	margin-left: 18rem;
	width: 100%;
`;

const HomeContainer = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
`;

const ThemeContainer = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
`;

const BackImg = styled.img`
	position: absolute;
	width: 100%;
	overflow-x: hideen;
	bottom: 0;
	left: 0;
`;

const HomeBox = styled.div`
	flex-direction: column;
	width: 100%;
	position: relative;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	z-index: 2;
	img {
		position: absolute;
	}
`;

const ThemeBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	position: relative;
	justify-content: flex-start;
	align-items: center;
	z-index: 2;
`;

const HomeBody = styled.div`
	z-index: 2;
	text-align: center;
	color: white;
	font-weight: 600;
	text-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
	margin-top: 25vh;
	height: 100vh;
`;

const HomeTitle = styled.div`
	h1 {
		font-size: 2.5rem;
		margin-bottom: 3.6133vh;
		span {
			color: #ffc600;
		}
	}
	p {
		font-size: 1.5rem;
		margin-bottom: 2.5391vh;
	}
`;

const ScrollBtn = styled.button`
	cursor: pointer;
	border: none;
	background: none;
	animation: motion 0.5s linear 0s infinite alternate;
	margin-top: 0;

	@keyframes motion {
		0% {
			padding-top: 0;
		}
		100% {
			padding-top: 0.5rem;
		}
	}
`;

const fireImgList = [
	{
		name: 'one',
		src: image1,
		style: {
			top: '1rem',
			left: '7rem',
			zIndex: 1
		}
	},
	{
		name: 'two',
		src: image2,
		style: {
			top: '5rem',
			left: '18rem',
			zIndex: 0
		}
	},
	{
		name: 'three',
		src: image3,
		style: {
			top: '3.5rem',
			right: '5rem'
		}
	},
	{
		name: 'four',
		src: image4,
		style: {
			top: '2rem',
			left: '48rem'
		}
	},
	{
		name: 'five',
		src: image5,
		style: {
			top: '20rem',
			right: '9rem'
		}
	},
	{
		name: 'six',
		src: image6,
		style: {
			top: '17rem',
			left: '2rem'
		}
	},
	{
		name: 'seven',
		src: image7,
		style: {
			top: '18rem',
			left: '58rem',
			zIndex: 1
		}
	}
];
