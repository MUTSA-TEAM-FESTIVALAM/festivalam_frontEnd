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
			</ThemeBody>
			<img src={mainImg} alt='mainImg'></img>
		</ThemeWrapper>
	);
};

export default Theme;

const ThemeWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	background: linear-gradient(rgba(189, 106, 184, 0.8), rgba(67, 0, 131, 0.8));
	position: relative;

	img {
		position: absolute;
		bottom: 0rem;
		width: 83.4%;
		z-index: 1;
		margin-left: 15rem;
	}
`;

const ThemeBody = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	position: relative;
	justify-content: center;
	align-items: center;
	z-index: 2;
	height: 100vh;
`;
