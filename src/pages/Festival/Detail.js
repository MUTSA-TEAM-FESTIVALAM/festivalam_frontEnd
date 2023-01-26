import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as rHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as sHeart } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../components/Modal';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Nav';
import { Chomoji, Qlist } from '../../styles/styledComponent';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { festivals } from '../../utils/atom';

const tags = ['사운드가 빵빵해요', '스트레스를 싹 날려버려요', '인생샷을 건질 수 있어요', '록'];

const Wrapper = styled.div`
	display: flex;
	overflow-y: scroll;
	font-family: 'Noto Sans KR', sans-serif;
	nav {
		background-color: white;
		color: #5d0ec0;

		width: 15rem;
		position: relative;
		box-shadow: 0.1rem 0.1rem 0.7rem rgb(200, 200, 200);
	}
`;

const Main = styled.div`
	position: relative;
	background-size: cover;
	background-repeat: no-repeat;
	margin: 0 auto;
	text-align: center;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-left: 2%;
	height: 200vh;
`;

const Back = styled.div`
	background-color: #ffc600;
	width: 65vw;
	height: 190vh;
	box-shadow: 0px 0.25rem 1.25rem rgba(0, 0, 0, 0.25);
	border-radius: 1.25rem;
	position: relative;
	margin-top: 2rem;
`;

const Container = styled.div`
	position: absolute;
	top: 1.5rem;
	right: 1.5rem;
	height: 100%;
	width: 100%;
	box-shadow: 0px 0.25rem 1.25rem rgba(0, 0, 0, 0.25);
	border-radius: 1.25rem;
	background-color: white;
	display: flex;
	flex-direction: column;
	gap: 5rem;
`;

const Board = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 1rem;
	box-sizing: border-box;
	padding: 1rem;
`;

const Box = styled.div`
	display: flex;
	padding: 0.5rem;
	padding-bottom: 0;
	justify-content: center;
	text-align: center;
`;

const Header = styled(Box)`
	height: 2rem;
	align-self: flex-end;
	justify-content: center;
	padding-top: 0;
`;

const ZzimBtn = styled.button`
	display: flex;
	font-size: 1rem;
	gap: 0.5rem;
	height: 2.5rem;
	width: 6rem;
	border: 0.1rem solid #5d0ec0;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	color: #5d0ec0;
	border-radius: 6.25rem;
	font-weight: bold;
	justify-content: center;
	align-content: center;
	background-color: #ffffff;
	cursor: pointer;
	text-align: center;
	svg {
		align-self: center;
	}
	p {
		align-self: center;
		margin: 0;
		line-height: 100%;
	}
	&:hover {
		background-color: #5d0ec0;
		color: white;
	}
`;

const Body = styled(Box)`
	padding: 1rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 1rem;
	img {
		object-fit: contain;
		max-width: 35%;
		padding: 1rem;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	a {
		text-decoration: none;
		color: black;
		font-weight: bold;
		font-size: 1.2rem;
		&:visited {
			text-decoration: none;
			color: black;
			font-weight: bold;
			font-size: 1.2rem;
		}
		&:link {
			text-decoration: none;
			color: black;
			font-weight: bold;
			font-size: 1.2rem;
		}
	}
`;

const Desc = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	margin-bottom: 2rem;
	font-size: 1.05rem;
	span {
		font-weight: bold;
	}
`;

const Info = styled.div`
	font-size: 0.9rem;
	margin-bottom: 2rem;
	p {
		margin: 0;
		margin-bottom: 1.3rem;
	}
`;

const Tag = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 1rem;
	align-content: center;
	justify-content: center;
	p {
		background-color: #d9d9d9;
		padding: 0.5rem 1rem;
		margin: 0;
		border-radius: 0.5rem;
	}
`;

const Footer = styled(Box)`
	button {
		background-color: #5d0ec0;
		width: 60%;
		padding: 1rem;
		text-decoration: none;
		color: white;
		border-radius: 0.5rem;
		font-weight: bold;
		box-shadow: 0 1rem 1rem -1rem #505050;
		border: none;
		font-size: 1rem;
	}
	a {
		&p:first-child {
			margin-bottom: 0.3rem;
			font-size: 1rem;
			line-height: 1.6rem;
		}
		&p:nth-child(2) {
			margin-top: 0;
			font-size: 0.8rem;
		}
	}
`;

const Check = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const PlaceQ = styled.div`
	height: 5rem;
`;

const CheckBtn = styled.div`
	padding-top: 5.5rem;
	padding-left: 5rem;
	padding-right: 3rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-left: 1rem;
	button {
		width: auto;
		height: auto;
		padding: 0.5rem 1rem;
		border-radius: 5rem;
		cursor: pointer;
		background-color: white;
		border-color: #5b5a5a;
		color: #5b5a5a;
		font-family: 'Noto Sans KR', sans-serif;
		font-weight: medium;
		font-size: 0.8rem;
		border-width: 1px;
		margin-right: 2rem;
	}
`;

const RegisterBox = styled.div`
	text-align: center;
	button {
		margin-top: 4rem;
		width: 200px;
		height: 2.5rem;
		background-color: white;
		border-radius: 10rem;
		border-width: 2px;
		border-color: #5d0ec0;
		color: #5d0ec0;
		font-family: 'Noto Sans KR', sans-serif;
		font-weight: bold;
		font-size: 15px;
		cursor: pointer;
		&:hover {
			background-color: #5d0ec0;
			color: white;
		}
	}
`;

const Detail = () => {
	const params = useParams();
	const festivallist = useRecoilValue(festivals);
	const festival = festivallist.filter((festival) => festival.id === parseInt(params.id))[0];

	const checkRef = useRef(null);
	const scrollToElement = () => checkRef.current.scrollIntoView({ behavior: 'smooth' });

	const dayArr = ['일', '월', '화', '수', '목', '금', '토'];
	const startDate = new Date(Number(festival.time_start.substring(0, 4)), Number(festival.time_start.substring(5, 7)) - 1, Number(festival.time_start.substring(8, 10)));
	const endDate = new Date(Number(festival.time_end.substring(0, 4)), Number(festival.time_end.substring(5, 7)) - 1, Number(festival.time_end.substring(8, 10)));
	let dateString = `<span>${startDate.getFullYear()}</span>년 <span>${startDate.getMonth() + 1}</span>월 <span>${startDate.getDate()}</span>일(${
		dayArr[startDate.getDay()]
	}) ~ <span>${endDate.getFullYear()}</span>년 <span>${endDate.getMonth() + 1}</span>월 <span>${endDate.getDate()}</span>일(${dayArr[endDate.getDay()]})`;
	const subDate = endDate.getDate() - startDate.getDate();
	if (subDate === 0) {
		dateString = `<span>${startDate.getFullYear()}</span>년 <span>${startDate.getMonth() + 1}</span>월 <span>${startDate.getDate()}</span>일(${dayArr[startDate.getDay()]})`;
	}
	const reserveDate = new Date(Number(festival.ticket_open.substring(0, 4)), Number(festival.ticket_open.substring(5, 7)) - 1, Number(festival.ticket_open.substring(8, 10)));

	const [isHovering, setIsHovering] = useState(0);

	const addTags = (tags) => {
		const tagArr = [];
		for (let i = 0; i < tags.length; i++) {
			tagArr.push(<p>{tags[i]}</p>);
		}
		return tagArr;
	};

	const [modalOpen, setModalOpen] = useState(false);

	const openModal = () => {
		setModalOpen(true);
	};
	const closeModal = () => {
		setModalOpen(false);
	};

	const addLike = () => {
		axios({
			method: 'post',
			url: '/user/:user_id/like',
			data: {
				user_id: 12,
				festival_id: 145
			}
		});
	};

	const addDelete = () => {
		axios({
			method: 'delete',
			url: '/user/:user_id/like/:like_id',
			data: {
				like_id: 132
			}
		});
	};

	const [tab1, setTab1] = useState('');
	const [tab2, setTab2] = useState('');
	const [tab3, setTab3] = useState('');
	const [tab4, setTab4] = useState('');
	const [tab5, setTab5] = useState('');

	const [checks1, setCheck1] = useState(0);
	const [checks2, setCheck2] = useState(0);
	const [checks3, setCheck3] = useState(0);
	const [checks4, setCheck4] = useState(0);
	const [checks5, setCheck5] = useState(0);
	const [checks6, setCheck6] = useState(0);

	const activeCheck = {
		backgroundColor: '#5d0ec0',
		color: 'white',
		fontWeight: 'bold',
		borderWidth: '2px',
		fontSize: '0.8rem',
		border: 'none'
	};

	const consoleZZik = (x, id) => {
		if (id === 1) {
			setCheck1(x);
		} else if (id === 2) {
			setCheck2(x);
		} else if (id === 3) {
			setCheck3(x);
		} else if (id === 4) {
			setCheck4(x);
		} else if (id === 5) {
			setCheck5(x);
		} else if (id === 6) {
			setCheck6(x);
		}
	};

	return (
		<Wrapper>
			<nav>
				<Navbar />
			</nav>
			<Main>
				<Back>
					<Container>
						<Board>
							<Header>
								<ZzimBtn onClick={openModal} type='button' onMouseOver={() => setIsHovering(1)} onMouseOut={() => setIsHovering(0)}>
									<FontAwesomeIcon icon={isHovering ? sHeart : rHeart} />
									<p>좋아요</p>
								</ZzimBtn>
								<Modal open={modalOpen} close={closeModal} header='찜한 페스티벌에 추가되었습니다.'>
									찜한 페스티벌의 경우 카카오톡으로 티켓팅 알림을 받게 됩니다. <br />
									‘마이페이지 ~ 찜한 페스티벌 목록’ 에서 관리할 수 있습니다.
								</Modal>
							</Header>
							<Body>
								<img src={'/' + festival.Poster} alt={festival.title} />
								<Content>
									<Desc>
										<span>{festival.title}</span>
										<div dangerouslySetInnerHTML={{ __html: dateString }}></div>
										<div>{festival.place}</div>
										<div>
											티켓오픈 : <span>{reserveDate.getFullYear()}</span>년 <span>{reserveDate.getMonth() + 1}</span>월 <span>{reserveDate.getDate()}</span>일({dayArr[reserveDate.getDay()]})
										</div>
									</Desc>
									<Info>
										<p>더 자세한 정보는 아래의 링크를 통해 확인하세요!</p>
										<p>(티켓 가격, 티켓 할인 정보, 예매/관람 가이드, 반입금지물품, 교통 안내 등)</p>
										<a href={festival.ticket_link}>예매 사이트 바로가기</a>
									</Info>
									<Tag>{addTags(tags)}</Tag>
								</Content>
							</Body>
							<Footer>
								<button onClick={scrollToElement}>
									<p>
										이전에 해당 페스티벌을 즐긴 경험이 있다면 ?<br />
										후기 작성하러가기!
										<br />
									</p>
									<p>(다른 사람들을 위해 소중한 후기를 공유해주세요!)</p>
								</button>
							</Footer>
						</Board>
						<Check ref={checkRef}>
							<PlaceQ>
								<Chomoji>🎪</Chomoji>
								<Qlist>해당 페스티벌의 분위기는 어떤가요?</Qlist>
								<CheckBtn>
									<button
										type='button'
										value='1'
										style={tab1 === 1 ? activeCheck : null}
										onClick={(event) => {
											setTab1(1);
											consoleZZik(event.target.value, 1);
										}}
									>
										스트레스를 날려버리는 / 신나는
									</button>
									<button
										type='button'
										value='2'
										style={tab1 === 2 ? activeCheck : null}
										onClick={(event) => {
											setTab1(2);
											consoleZZik(event.target.value, 1);
										}}
									>
										감성적인 / 힐링이 되는
									</button>
									<button
										type='button'
										value='3'
										style={tab1 === 3 ? activeCheck : null}
										onClick={(event) => {
											setTab1(3);
											consoleZZik(event.target.value, 1);
										}}
									>
										스트레스를 날려버리는 / 신나는 / 감성적인 / 힐링이 되는
									</button>
								</CheckBtn>
							</PlaceQ>
							<PlaceQ>
								<Chomoji>🎸</Chomoji>
								<Qlist>해당 페스티벌의 뮤직 스타일은 어떤가요?</Qlist>
								<CheckBtn>
									<button
										type='button'
										value='1'
										style={tab2 === 1 ? activeCheck : null}
										onClick={(event) => {
											setTab2(1);
											consoleZZik(event.target.value, 2);
										}}
									>
										힙합 / 알앤비 / 락
									</button>
									<button
										type='button'
										value='2'
										style={tab2 === 2 ? activeCheck : null}
										onClick={(event) => {
											setTab2(2);
											consoleZZik(event.target.value, 2);
										}}
									>
										인디 어쿠스틱 / 인디 밴드
									</button>
									<button
										type='button'
										value='3'
										style={tab2 === 3 ? activeCheck : null}
										onClick={(event) => {
											setTab2(3);
											consoleZZik(event.target.value, 2);
										}}
									>
										앞의 장르들 짬뽕
									</button>
								</CheckBtn>
							</PlaceQ>
							<PlaceQ>
								<Chomoji>🥽</Chomoji>
								<Qlist>물을 맞는 페스티벌인가요?</Qlist>
								<CheckBtn>
									<button
										type='button'
										value='1'
										style={tab3 === 1 ? activeCheck : null}
										onClick={(event) => {
											setTab3(1);
											consoleZZik(event.target.value, 3);
										}}
									>
										안 맞아요
									</button>
									<button
										type='button'
										value='2'
										style={tab3 === 2 ? activeCheck : null}
										onClick={(event) => {
											setTab3(2);
											consoleZZik(event.target.value, 3);
										}}
									>
										잘 모르겠어요
									</button>
									<button
										type='button'
										value='3'
										style={tab3 === 3 ? activeCheck : null}
										onClick={(event) => {
											setTab3(3);
											consoleZZik(event.target.value, 3);
										}}
									>
										워터밤
									</button>
								</CheckBtn>
							</PlaceQ>
							<PlaceQ>
								<Chomoji>🍔</Chomoji>
								<Qlist>푸드 섹션이 있나요?</Qlist>
								<CheckBtn>
									<button
										type='button'
										value='1'
										style={tab4 === 1 ? activeCheck : null}
										onClick={(event) => {
											setTab4(1);
											consoleZZik(event.target.value, 4);
										}}
									>
										푸드 섹션은 없어요
									</button>
									<button
										type='button'
										value='2'
										style={tab4 === 2 ? activeCheck : null}
										onClick={(event) => {
											setTab4(2);
											consoleZZik(event.target.value, 4);
										}}
									>
										잘 모르겠어요
									</button>
									<button
										type='button'
										value='3'
										style={tab4 === 3 ? activeCheck : null}
										onClick={(event) => {
											setTab4(3);
											consoleZZik(event.target.value, 4);
										}}
									>
										푸드 섹션이 있어요
									</button>
								</CheckBtn>
							</PlaceQ>
							<PlaceQ>
								<Chomoji>📸</Chomoji>
								<Qlist>포토존으로 여겨질만한 공간이 있나요?</Qlist>
								<CheckBtn>
									<button
										type='button'
										value='1'
										style={tab5 === 1 ? activeCheck : null}
										onClick={(event) => {
											setTab5(1);
											consoleZZik(event.target.value, 5);
										}}
									>
										우리 사진 말고, 공연만 즐기는걸로 해요
									</button>
									<button
										type='button'
										value='2'
										style={tab5 === 2 ? activeCheck : null}
										onClick={(event) => {
											setTab5(2);
											consoleZZik(event.target.value, 5);
										}}
									>
										잘 모르겠어요
									</button>
									<button
										type='button'
										value='3'
										style={tab5 === 3 ? activeCheck : null}
										onClick={(event) => {
											setTab5(3);
											consoleZZik(event.target.value, 5);
										}}
									>
										인생샷 건짐
									</button>
								</CheckBtn>
							</PlaceQ>
							<RegisterBox>
								<button>작성 완료</button>
							</RegisterBox>
						</Check>
					</Container>
				</Back>
			</Main>
		</Wrapper>
	);
};

export default Detail;
