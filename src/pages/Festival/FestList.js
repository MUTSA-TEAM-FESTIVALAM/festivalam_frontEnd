import React, { useState } from 'react';
import Navbar from '../../components/Nav';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { festivals } from '../../utils/atom';
import Festival from '../../components/FestivalList/Festival';

const FestList = () => {
	const [Content, setContent] = useState();
	const [festivalList, setfestivalList] = useRecoilState(festivals);

	const onChangeHanlder = (e) => {
		setContent(e.currentTarget.value);
		const sortValue = e.currentTarget.value;
		let festivals = festivalList;
		if (sortValue === 'register') {
			festivals = [...festivals].sort((a, b) => {
				return a.id - b.id;
			});
		} else if (sortValue === 'fast') {
			festivals = [...festivals].sort((a, b) => {
				let aStartdate = new Date(Number(a.time_start.substring(0, 4)), Number(a.time_start.substring(5, 7)) - 1, Number(a.time_start.substring(8, 10)));
				let bStartdate = new Date(Number(b.time_start.substring(0, 4)), Number(b.time_start.substring(5, 7)) - 1, Number(b.time_start.substring(8, 10)));
				return aStartdate - bStartdate;
			});
		} else if (sortValue === 'popular') {
			festivals = [...festivals].sort((a, b) => {
				return b.hits - a.hits;
			});
		}
		setfestivalList(festivals);
	};
	const Options = [
		{ key: 'register', value: '등록순' },
		{ key: 'fast', value: '빠른 일정순' }
	];

	return (
		<ListWrapper>
			<nav>
				<Navbar />
			</nav>
			<ListContainer>
				<ListHeader>
					<select id='listSelect' onChange={onChangeHanlder} value={Content}>
						<option key='popular' value='popular'>
							인기순
						</option>
						{Options.map((item) => (
							<option key={item.key} value={item.key}>
								{item.value}
							</option>
						))}
					</select>
				</ListHeader>
				<ListMain>
					{festivalList.map((festival) => (
						<Festival festivalId={festival.id} key={festival.id} />
					))}
				</ListMain>
			</ListContainer>
		</ListWrapper>
	);
};

export default FestList;

const ListWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 100%;
`;

const ListContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin: 0 auto;
	margin-top: 1rem;
	justify-content: center;
	align-items: center;
	padding-left: 2%;
	margin-left: 18rem;
	width: 100%;
	margin-bottom: 5rem;
`;

const ListHeader = styled.div`
	text-align: right;
	align-self: flex-end;
	margin-right: 8rem;
	select {
		border-radius: 0;
		padding: 0.2rem;
	}
`;

const ListMain = styled.div`
	display: flex;
	gap: 4rem;
	flex-wrap: wrap;
	width: 100%;
	justify-content: center;
`;
