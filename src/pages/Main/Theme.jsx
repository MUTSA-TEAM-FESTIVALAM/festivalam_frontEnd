import React, { useState } from 'react';
import mainImg from '../../img/mainHome.png';
import Navbar from '../../components/Nav';
import TagList from '../../components/Main/TagList';
import styled from 'styled-components';

const Theme = () => {
	return (
		<ThemeWrapper>
			<nav>
				<Navbar />
			</nav>
			<ThemeBody>
				<TagList />
				<BackImg src={mainImg} alt='backgroundImg' />
			</ThemeBody>
		</ThemeWrapper>
	);
};

export default Theme;

const ThemeWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	background: linear-gradient(rgba(189, 106, 184, 0.8), rgba(67, 0, 131, 0.8));
	position: relative;
	width: 100%;
	height: 100%;
`;

const ThemeBody = styled.div`
	margin-left: 18rem;
	display: flex;
	flex-direction: column;
	position: relative;
	justify-content: center;
	align-items: center;
	z-index: 2;
	width: 100%;
	height: 100vh;
`;

const BackImg = styled.img`
	width: 100%;
	overflow-x: hideen;
	margin-top: auto;
`;
