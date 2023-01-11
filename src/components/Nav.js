import React, { useState } from 'react';
import '../styles/Nav.css';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { modalControl } from '../utils/atom';
import styled from 'styled-components';

function Navbar(props) {
	const [tab, setTab] = useState('');
	const setModalOpen = useSetRecoilState(modalControl);

	const openModal = () => {
		setModalOpen(true);
	};

	return (
		<div className='navbar'>
			<div>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<div className='title'>
						<img src={logo} alt='logo' className='logoimg' />
					</div>
				</Link>
				<div className='navSearch'>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
					<input className='searchArea' />
				</div>
			</div>
			<div className='buttons'>
				<Link to='/calendar'>
					<button className={`navBtn ${tab === 'second' ? 'active' : ''}`} onClick={() => setTab('second')}>
						페스티벌 캘린더
					</button>
				</Link>
			</div>
			<div className='buttons'>
				<Link to='/festlist'>
					<button className={`navBtn ${tab === 'third' ? 'active' : ''}`} onClick={() => setTab('third')}>
						페스티벌 정보
					</button>
				</Link>
			</div>
			<div className='buttons'>
				<Link to='/theme'>
					<button className={`navBtn ${tab === 'fourth' ? 'active' : ''}`} onClick={() => setTab('fourth')}>
						추천 페스티벌 테마
					</button>
				</Link>
			</div>
			<div className='buttons'>
				<Link to='/review'>
					<button className={`navBtn ${tab === 'fifth' ? 'active' : ''}`} onClick={() => setTab('fifth')}>
						커뮤니티
					</button>
				</Link>
			</div>
			<div className='line'></div>
			<div className='buttons'>
				<button className='navBtn' onClick={openModal}>
					로그인
				</button>
			</div>
		</div>
	);
}

export default Navbar;
