import React, { useState, useRef } from 'react';
import '../../styles/Main.css';
import '../../styles/MainHome.css';
import '../../styles/MainTheme.css';
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
import { modalControl } from '../../utils/atom';
import TagList from '../../components/Main/TagList';

const Main = () => {
	const [checks1, setCheck1] = useState(0);
	const [checks2, setCheck2] = useState(0);
	const [checks31, setCheck31] = useState(0);
	const [checks32, setCheck32] = useState(0);
	const [checks33, setCheck33] = useState(0);
	const [modalOpen, setModalOpen] = useRecoilState(modalControl);

	const closeModal = () => {
		setModalOpen(false);
	};

	const mainThemeRef = useRef(null);

	const scrollToElement = () => mainThemeRef.current.scrollIntoView({ behavior: 'smooth' });

	return (
		<div className='main'>
			<nav className='mainnav'>
				<Navbar />
			</nav>
			<div className='mainContent'>
				<LoginModal open={modalOpen} close={closeModal}>
					당신의 페스티벌 취향을 찾아, 페스티발람! 지금 바로 로그인하세요 !
				</LoginModal>
				<div className='mainHome'>
					<div className='mainHomeBody'>
						<div className='mainHomeContent'>
							<div className='mainHomeText'>
								<h1 className='mainHomeText'>
									당신의 취향을 <span>저격</span>할 페스티벌은?
								</h1>
								<p className='mainHomeDesc'>아래로 이동해 테마 구현하기</p>
							</div>
							<button className='scrollBtn' onClick={scrollToElement}>
								<svg width='68' height='76' viewBox='0 0 68 76' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<g filter='url(#filter0_d_66_109)'>
										<path d='M58 33.4546V20.3636L34 34.9091L10 20.3636V33.4546L34 48L58 33.4546Z' fill='white' />
										<path d='M58 13.0909V0L34 14.5455L10 0V13.0909L34 27.6364L58 13.0909Z' fill='white' />
									</g>
									<defs>
										<filter id='filter0_d_66_109' x='0' y='0' width='68' height='76' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
											<feFlood floodOpacity='0' result='BackgroundImageFix' />
											<feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
											<feOffset dy='18' />
											<feGaussianBlur stdDeviation='5' />
											<feComposite in2='hardAlpha' operator='out' />
											<feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0' />
											<feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_66_109' />
											<feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_66_109' result='shape' />
										</filter>
									</defs>
								</svg>
							</button>
						</div>
						<img className='fireCraker1' src={image1} alt='fire1'></img>
						<img className='fireCraker2' src={image2} alt='fire2'></img>
						<img className='fireCraker3' src={image3} alt='fire3'></img>
						<img className='fireCraker4' src={image4} alt='fire4'></img>
						<img className='fireCraker5' src={image5} alt='fire5'></img>
						<img className='fireCraker6' src={image6} alt='fire6'></img>
						<img className='fireCraker7' src={image7} alt='fire7'></img>
					</div>
				</div>
				<div className='mainTheme' ref={mainThemeRef}>
					<div className='mainThemeBody'>
						<TagList />
					</div>
				</div>
			</div>
			<img className='mainImg' src={mainImg} alt='mainImg'></img>
		</div>
	);
};

export default Main;
