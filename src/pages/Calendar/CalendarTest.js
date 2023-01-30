import React, { useState, useEffect } from 'react';
import PopUp from '../../components/Calendar/PopUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faUmbrella } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Nav';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { festivals } from '../../utils/atom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const CalendarTest = () => {
	const festivallist = useRecoilValue(festivals);
	const festivalCalendar = festivallist.map((fest) => {
		return { title: fest.title, start: fest.time_start, end: fest.time_end };
	});

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

	const navigate = useNavigate();
	const goDetail = (id) => {
		navigate(`${'/detail/' + id}`);
	};

	return (
		<CalendarWrapper>
			<nav>
				<Navbar />
			</nav>
			<FullCalendar plugins={[dayGridPlugin]} initialView='dayGridMonth' events={festivalCalendar} />
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

export default CalendarTest;
