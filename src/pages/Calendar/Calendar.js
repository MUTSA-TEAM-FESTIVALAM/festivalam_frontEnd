import React, { useState, useEffect } from 'react';
import PopUp from '../../components/Calendar/PopUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faUmbrella } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Nav';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { festivals } from '../../utils/atom';

const Calendar = () => {
	const festivallist = useRecoilValue(festivals);
	const [date, setDate] = useState(new Date());
	const [selectedYear, setSelectedYear] = useState(date.getFullYear());
	const [selectedMonth, setSelectedMonth] = useState(date.getMonth());
	const MONTH_NAME = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	const [isHover, setIsHover] = useState(-1);
	const [isClick, setIsClick] = useState(-1);
	const DAY_NAME = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
	const [x, setX] = useState();
	const [y, setY] = useState();

	const todayStyle = {
		position: 'relative',
		color: '#ffffff',
		span: {
			backgroundColor: 'black'
		}
	};

	const iconStyle = {
		fontSize: '1.5rem'
	};

	const update = (e) => {
		setX(e.screenX);
		setY(e.screenY);
	};

	const navigate = useNavigate();
	const goDetail = (id) => {
		navigate(`${'/detail/' + id}`);
	};

	useEffect(() => {
		window.addEventListener('mousemove', update);
	}, []);

	const goPrev = () => {
		if (selectedMonth === 0) {
			setSelectedYear(selectedYear - 1);
			setSelectedMonth(11);
		} else {
			setSelectedMonth(selectedMonth - 1);
		}
	};

	const goNext = () => {
		if (selectedMonth === 11) {
			setSelectedYear(selectedYear + 1);
			setSelectedMonth(0);
		} else {
			setSelectedMonth(selectedMonth + 1);
		}
	};

	const getDate = () => {
		let dateArr = [];
		let dateCnt = new Date(selectedYear, selectedMonth + 1, 0).getDate(); // 이번달의 마지막 날짜
		if (new Date(selectedYear, selectedMonth, 0).getDay() !== 0) {
			for (let i = 0; i < new Date(selectedYear, selectedMonth, 0).getDay(); i++) {
				dateArr.push(<div className='calendarDate'></div>);
			}
		}
		for (let i = 0; i < dateCnt; i++) {
			dateArr.push(
				<Day style={i + 1 === date ? { todayStyle } : {}}>
					<span>{i + 1}</span>
					{isFest(i)}
				</Day>
			);
		}
		return dateArr;
	};

	const isFest = (i) => {
		let festArr = [];
		for (let j = 0; j < festivallist.length; j++) {
			let start = new Date(
				Number(festivallist[j].time_start.substring(0, 4)),
				Number(festivallist[j].time_start.substring(5, 7)) - 1,
				Number(festivallist[j].time_start.substring(8, 10))
			);
			let end = new Date(
				Number(festivallist[j].time_end.substring(0, 4)),
				Number(festivallist[j].time_end.substring(5, 7)) - 1,
				Number(festivallist[j].time_end.substring(8, 10))
			);
			if (start.getFullYear() === selectedYear && start.getMonth() === selectedMonth && start.getDate() === i + 1) {
				let sub = end.getDate() - start.getDate();
				const styles = { width: `${(sub + 1) * 6.8}rem`, cursor: 'pointer' };
				const forP = { color: 'white', margin: 0 };

				festArr.push(
					<Fest style={styles} onClick={() => setIsClick(j)} onMouseOver={() => setIsHover(j)} onMouseOut={() => setIsHover(-1)}>
						<p style={forP}>{festivallist[j].title}</p>
						{isHover === j ? <PopUp x={x} y={y} id={festivallist[j].id}></PopUp> : ''}
						{isClick === j ? goDetail(festivallist[j].id) : ''}
					</Fest>
				);
			}
		}
		return festArr;
	};

	return (
		<CalendarWrapper>
			<nav>
				<Navbar />
			</nav>
			<CalendarContainer>
				<WeatherInfo>
					<p>
						<FontAwesomeIcon style={iconStyle} icon={faSun} />
						<p>&nbsp;맑음</p>
					</p>
					<p>
						<FontAwesomeIcon style={iconStyle} icon={faCloud} />
						<p>&nbsp;흐림</p>
					</p>
					<p>
						<FontAwesomeIcon style={iconStyle} icon={faUmbrella} />
						<p>&nbsp;비옴</p>
					</p>
				</WeatherInfo>
				<CalendarBack>
					<CalendarBoard>
						<CalendarHeader>
							<YearMonth>
								{MONTH_NAME[selectedMonth]} &nbsp;&nbsp;{selectedYear}
							</YearMonth>
							<CalendarNav>
								<button class='calendarPrevBtn' onClick={() => goPrev()}>
									<span>&lt;</span>
								</button>
								<button class='calendarNextBtn' onClick={() => goNext()}>
									<span>&gt;</span>
								</button>
							</CalendarNav>
						</CalendarHeader>
						<CalendarMain>
							<Weekday>
								{DAY_NAME.map((day) => (
									<div class='calendarWeekday'>{day}</div>
								))}
							</Weekday>
							<DateList>{getDate()}</DateList>
						</CalendarMain>
					</CalendarBoard>
				</CalendarBack>
			</CalendarContainer>
		</CalendarWrapper>
	);
};

const CalendarWrapper = styled.div`
	display: flex;
	justify-content: center;

	nav {
		background-color: white;
		color: #5d0ec0;
		height: 100vh;
		width: 15rem;
		box-shadow: 0.1rem 0.1rem 0.7rem rgb(200, 200, 200);
	}
`;

const CalendarContainer = styled.div`
	background-size: cover;
	background-repeat: no-repeat;
	margin: 0 auto;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: end;
	gap: 1rem;
	margin-top: 1rem;
	padding-left: 2%;
`;

const WeatherInfo = styled.div`
	display: flex;
	gap: 1rem;
	border: 0.1rem solid black;
	justify-content: center;
	align-items: center;
	border-radius: 0.5rem;
	font-size: 5rem;
	padding: 0.5rem;
	p {
		margin: 0;
		font-size: 0.9rem;
		display: flex;
		align-items: center;
	}
`;

const CalendarBack = styled.div`
	background-color: #ffc600;
	width: 65vw;
	height: 42rem;
	box-shadow: 0px 0.25rem 1.25rem rgba(0, 0, 0, 0.25);
	border-radius: 1.25rem;
	position: relative;
	right: 0;
`;

const CalendarBoard = styled.div`
	position: absolute;
	top: 1.5rem;
	right: 1.5rem;
	display: flex;
	flex-direction: column;
	width: 87%;
	box-shadow: 0px 0.25rem 1.25rem rgba(0, 0, 0, 0.25);
	border-radius: 1.25rem;
	padding: 4rem;
	padding-top: 3rem;
	padding-bottom: 3rem;
	background-color: white;
	gap: 2.5rem;
`;

const CalendarHeader = styled.div`
	display: flex;
	align-items: center;
	align-self: flex-start;
	justify-content: space-between;
	width: 100%;
`;

const YearMonth = styled.div`
	font-family: 'Rubik';
	font-size: 3.5rem;
	align-self: center;
	line-height: 4rem;
	font-weight: 500;
	font-style: normal;
`;

const CalendarNav = styled.div`
	display: flex;
	button {
		width: 2.5rem;
		height: 2.5rem;
		font-size: 2rem;
		background-color: transparent;
		cursor: pointer;
		margin-right: 1rem;
		border-radius: 2.5rem;
		box-shadow: 0.1rem 0.1rem 0.3rem rgb(97, 97, 97);
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 500;
	}
`;

const CalendarMain = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 0;
	gap: 0.4rem;
`;

const Weekday = styled.div`
	display: flex;
	div {
		font-family: 'Rubik';
		width: calc(100% / 7);
		text-align: center;
		font-size: 1.5rem;
		font-weight: 500;
		font-style: normal;
		font-size: 2.2rem;
		margin-bottom: 2.5rem;
	}
`;

const DateList = styled.div`
	display: flex;
	width: 100%;
	flex-flow: row wrap;
	height: 23.5rem;
	overflow-y: scroll;
`;

const Day = styled.div`
	width: calc(100% / 7);
	text-align: left;
	font-size: 1.1rem;
	min-height: 6rem;
	span {
		margin: 0;
		padding: 0.1rem 0.3rem;
		font-weight: bold;
		border-radius: 0.5rem;
	}
`;

const Fest = styled.div`
	background-color: #5d0ec0;
	margin: 0;
	height: 1.5rem;
	position: relative;
	margin-top: 0.25rem;
	margin-left: 0.25rem;
	margin-right: 0.25rem;
	text-align: center;
	font-size: 0.8rem;
	text-decoration: none;
`;

export default Calendar;
