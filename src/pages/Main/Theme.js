import React, { useState } from 'react';
import '../../styles/Theme.css';
import mainImg from '../../img/mainHome.png';
import Navbar from '../../components/Nav';

const Theme = () => {
	const [checks1, setCheck1] = useState(0);
	const [checks2, setCheck2] = useState(0);
	const [checks31, setCheck31] = useState(0);
	const [checks32, setCheck32] = useState(0);
	const [checks33, setCheck33] = useState(0);
	let dupCheckList = [];

	const btnActivate = (idx, id) => {
		if (id === 1) {
			setCheck1(idx);
		}
		if (id === 2) {
			setCheck2(idx);
		}
	};

	const btnToggle = (idx, id) => {
		if (id === 1) {
			if (checks31 !== 0) {
				setCheck31(0);
			} else {
				setCheck31(idx);
			}
		} else if (id === 2) {
			if (checks32 !== 0) {
				setCheck32(0);
			} else {
				setCheck32(idx);
			}
		} else if (id === 3) {
			if (checks33 !== 0) {
				setCheck33(0);
			} else {
				setCheck33(idx);
			}
		}
	};

	const toAPI = () => {
		dupCheckList.push(checks1);
		dupCheckList.push(checks2);
		if (checks31) {
			dupCheckList.push(checks31);
		}
		if (checks32) {
			dupCheckList.push(checks32);
		}
		if (checks33) {
			dupCheckList.push(checks33);
		}

		console.log(dupCheckList);
	};
	return (
		<div className='theme'>
			<nav>
				<Navbar></Navbar>
			</nav>
			<div className='themeBody'>
				<div className='themeBody'>
					<div className='themeContent'>
						<h1 className='themeText'>궁금한 테마를 선택한 후 검색 버튼을 눌러보세요!</h1>
						<form className='tagSearchForm'>
							<button className='submitBtn' type='button' onClick={toAPI}>
								검색
							</button>
							<div className='tagContainer'>
								<div className='tagDesc'>
									<svg width='290' height='90' viewBox='0 0 319 104' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<rect width='319' height='104' fill='white' />
										<path
											d='M152.09 20.455V21.49H154.685V20.455H152.09ZM149.555 16.885V19.465C149.555 21.79 148.445 24.22 146.585 25.315L147.365 26.26C149.345 25.045 150.53 22.3 150.53 19.465V16.885H149.555ZM149.795 16.885V19.42C149.795 22.06 150.89 24.76 152.84 25.96L153.56 24.985C151.775 23.905 150.755 21.595 150.755 19.42V16.885H149.795ZM157.07 15.61V29.17H158.27V15.61H157.07ZM154.325 15.895V28.495H155.495V15.895H154.325ZM170.07 20.74V21.775H172.62V20.74H170.07ZM164.94 24.895V25.915H165.81C167.925 25.915 169.215 25.87 170.76 25.57L170.64 24.55C169.14 24.85 167.895 24.895 165.81 24.895H164.94ZM164.94 17.245V25.24H166.125V18.25H169.965V17.245H164.94ZM165.765 20.905V21.895H169.35V20.905H165.765ZM174.75 15.61V29.17H175.95V15.61H174.75ZM172.02 15.925V28.48H173.205V15.925H172.02ZM178.769 16.96V25.735H184.994V16.96H178.769ZM183.779 17.965V24.73H179.984V17.965H183.779ZM187.409 15.61V29.17H188.669V15.61H187.409ZM188.369 21.025V22.075H190.889V21.025H188.369ZM201.429 22.39V24.76H202.674V22.39H201.429ZM195.924 21.955V22.96H208.179V21.955H195.924ZM202.044 24.385C199.134 24.385 197.394 25.24 197.394 26.77C197.394 28.285 199.134 29.14 202.044 29.14C204.954 29.14 206.694 28.285 206.694 26.77C206.694 25.24 204.954 24.385 202.044 24.385ZM202.044 25.345C204.174 25.345 205.434 25.855 205.434 26.77C205.434 27.67 204.174 28.18 202.044 28.18C199.929 28.18 198.654 27.67 198.654 26.77C198.654 25.855 199.929 25.345 202.044 25.345ZM201.249 16.72V17.125C201.249 18.67 199.044 19.885 196.614 20.14L197.064 21.13C199.869 20.785 202.359 19.315 202.359 17.125V16.72H201.249ZM201.774 16.72V17.125C201.774 19.315 204.249 20.785 207.054 21.13L207.504 20.14C205.074 19.885 202.869 18.67 202.869 17.125V16.72H201.774ZM197.049 16.225V17.23H207.084V16.225H197.049ZM222.815 15.61V29.17H224.06V15.61H222.815ZM223.76 21.175V22.225H226.28V21.175H223.76ZM213.56 17.77V18.79H221.555V17.77H213.56ZM217.61 19.915C215.705 19.915 214.31 21.205 214.31 23.035C214.31 24.865 215.705 26.155 217.61 26.155C219.53 26.155 220.91 24.865 220.91 23.035C220.91 21.205 219.53 19.915 217.61 19.915ZM217.61 20.95C218.84 20.95 219.725 21.805 219.725 23.035C219.725 24.25 218.84 25.12 217.61 25.12C216.38 25.12 215.495 24.25 215.495 23.035C215.495 21.805 216.38 20.95 217.61 20.95ZM216.965 15.775V18.235H218.21V15.775H216.965ZM237.514 21.01V22.06H240.019V21.01H237.514ZM236.599 15.595V29.17H237.859V15.595H236.599ZM227.959 16.93V25.33H229.204V16.93H227.959ZM227.959 24.685V25.735H229.039C231.094 25.735 233.179 25.6 235.489 25.12L235.339 24.085C233.104 24.55 231.049 24.685 229.039 24.685H227.959ZM241.787 16.825V23.11H248.012V16.825H241.787ZM246.797 17.83V22.105H243.002V17.83H246.797ZM250.502 15.595V25.54H251.747V15.595H250.502ZM251.357 19.735V20.77H253.757V19.735H251.357ZM243.302 27.85V28.87H252.362V27.85H243.302ZM243.302 24.595V28.285H244.547V24.595H243.302ZM259.498 22.09V23.125H260.368C262.543 23.125 263.833 23.065 265.393 22.765L265.273 21.745C263.758 22.045 262.498 22.09 260.368 22.09H259.498ZM259.498 16.6V22.645H260.698V17.62H264.748V16.6H259.498ZM260.323 19.3V20.275H264.583V19.3H260.323ZM269.158 15.61V23.83H270.343V15.61H269.158ZM266.968 19.15V20.17H269.533V19.15H266.968ZM266.173 15.865V23.755H267.343V15.865H266.173ZM261.253 24.55V25.57H269.113V29.17H270.343V24.55H261.253ZM285.788 15.595V29.17H287.048V15.595H285.788ZM286.703 21.1V22.135H289.208V21.1H286.703ZM282.323 17.065V17.26C282.323 20.845 280.448 23.74 276.698 25.645L277.388 26.605C281.768 24.4 283.538 20.92 283.538 17.065H282.323ZM277.328 17.065V18.085H282.968V17.065H277.328ZM292.087 19.375V20.395H301.282V19.375H292.087ZM292.087 15.88V19.825H293.317V15.88H292.087ZM290.422 21.97V22.975H302.677V21.97H290.422ZM296.527 24.19C293.632 24.19 291.877 25.075 291.877 26.665C291.877 28.225 293.632 29.125 296.527 29.125C299.422 29.125 301.177 28.225 301.177 26.665C301.177 25.075 299.422 24.19 296.527 24.19ZM296.527 25.165C298.657 25.165 299.917 25.705 299.917 26.665C299.917 27.595 298.657 28.135 296.527 28.135C294.412 28.135 293.137 27.595 293.137 26.665C293.137 25.705 294.412 25.165 296.527 25.165Z'
											fill='black'
										/>
										<path
											d='M152.09 80.455V81.49H154.685V80.455H152.09ZM149.555 76.885V79.465C149.555 81.79 148.445 84.22 146.585 85.315L147.365 86.26C149.345 85.045 150.53 82.3 150.53 79.465V76.885H149.555ZM149.795 76.885V79.42C149.795 82.06 150.89 84.76 152.84 85.96L153.56 84.985C151.775 83.905 150.755 81.595 150.755 79.42V76.885H149.795ZM157.07 75.61V89.17H158.27V75.61H157.07ZM154.325 75.895V88.495H155.495V75.895H154.325ZM170.07 80.74V81.775H172.62V80.74H170.07ZM164.94 84.895V85.915H165.81C167.925 85.915 169.215 85.87 170.76 85.57L170.64 84.55C169.14 84.85 167.895 84.895 165.81 84.895H164.94ZM164.94 77.245V85.24H166.125V78.25H169.965V77.245H164.94ZM165.765 80.905V81.895H169.35V80.905H165.765ZM174.75 75.61V89.17H175.95V75.61H174.75ZM172.02 75.925V88.48H173.205V75.925H172.02ZM178.769 76.96V85.735H184.994V76.96H178.769ZM183.779 77.965V84.73H179.984V77.965H183.779ZM187.409 75.61V89.17H188.669V75.61H187.409ZM188.369 81.025V82.075H190.889V81.025H188.369ZM201.429 82.39V84.76H202.674V82.39H201.429ZM195.924 81.955V82.96H208.179V81.955H195.924ZM202.044 84.385C199.134 84.385 197.394 85.24 197.394 86.77C197.394 88.285 199.134 89.14 202.044 89.14C204.954 89.14 206.694 88.285 206.694 86.77C206.694 85.24 204.954 84.385 202.044 84.385ZM202.044 85.345C204.174 85.345 205.434 85.855 205.434 86.77C205.434 87.67 204.174 88.18 202.044 88.18C199.929 88.18 198.654 87.67 198.654 86.77C198.654 85.855 199.929 85.345 202.044 85.345ZM201.249 76.72V77.125C201.249 78.67 199.044 79.885 196.614 80.14L197.064 81.13C199.869 80.785 202.359 79.315 202.359 77.125V76.72H201.249ZM201.774 76.72V77.125C201.774 79.315 204.249 80.785 207.054 81.13L207.504 80.14C205.074 79.885 202.869 78.67 202.869 77.125V76.72H201.774ZM197.049 76.225V77.23H207.084V76.225H197.049ZM222.8 75.595V89.185H224.06V75.595H222.8ZM223.76 80.95V82H226.28V80.95H223.76ZM214.205 84.76V85.81H215.27C217.82 85.81 219.605 85.735 221.69 85.345L221.555 84.295C219.53 84.67 217.775 84.76 215.27 84.76H214.205ZM214.205 76.915V85.225H215.435V77.935H220.505V76.915H214.205ZM232.924 82.39V84.76H234.169V82.39H232.924ZM227.419 81.955V82.96H239.674V81.955H227.419ZM233.539 84.385C230.629 84.385 228.889 85.24 228.889 86.77C228.889 88.285 230.629 89.14 233.539 89.14C236.449 89.14 238.189 88.285 238.189 86.77C238.189 85.24 236.449 84.385 233.539 84.385ZM233.539 85.345C235.669 85.345 236.929 85.855 236.929 86.77C236.929 87.67 235.669 88.18 233.539 88.18C231.424 88.18 230.149 87.67 230.149 86.77C230.149 85.855 231.424 85.345 233.539 85.345ZM232.744 76.72V77.125C232.744 78.67 230.539 79.885 228.109 80.14L228.559 81.13C231.364 80.785 233.854 79.315 233.854 77.125V76.72H232.744ZM233.269 76.72V77.125C233.269 79.315 235.744 80.785 238.549 81.13L238.999 80.14C236.569 79.885 234.364 78.67 234.364 77.125V76.72H233.269ZM228.544 76.225V77.23H238.579V76.225H228.544ZM252.074 78.805V79.84H255.494V78.805H252.074ZM248.519 76.435V78.1C248.519 80.17 247.154 82.09 245.144 82.84L245.789 83.83C248.054 82.915 249.524 80.725 249.524 78.1V76.435H248.519ZM248.759 76.435V78.145C248.759 80.56 250.214 82.66 252.374 83.5L253.049 82.54C251.084 81.82 249.764 80.035 249.764 78.145V76.435H248.759ZM255.029 75.625V85.765H256.274V75.625H255.029ZM247.559 87.85V88.87H256.604V87.85H247.559ZM247.559 84.64V88.33H248.804V84.64H247.559ZM259.498 82.09V83.125H260.368C262.543 83.125 263.833 83.065 265.393 82.765L265.273 81.745C263.758 82.045 262.498 82.09 260.368 82.09H259.498ZM259.498 76.6V82.645H260.698V77.62H264.748V76.6H259.498ZM260.323 79.3V80.275H264.583V79.3H260.323ZM269.158 75.61V83.83H270.343V75.61H269.158ZM266.968 79.15V80.17H269.533V79.15H266.968ZM266.173 75.865V83.755H267.343V75.865H266.173ZM261.253 84.55V85.57H269.113V89.17H270.343V84.55H261.253ZM285.788 75.595V89.17H287.048V75.595H285.788ZM286.703 81.1V82.135H289.208V81.1H286.703ZM282.323 77.065V77.26C282.323 80.845 280.448 83.74 276.698 85.645L277.388 86.605C281.768 84.4 283.538 80.92 283.538 77.065H282.323ZM277.328 77.065V78.085H282.968V77.065H277.328ZM292.087 79.375V80.395H301.282V79.375H292.087ZM292.087 75.88V79.825H293.317V75.88H292.087ZM290.422 81.97V82.975H302.677V81.97H290.422ZM296.527 84.19C293.632 84.19 291.877 85.075 291.877 86.665C291.877 88.225 293.632 89.125 296.527 89.125C299.422 89.125 301.177 88.225 301.177 86.665C301.177 85.075 299.422 84.19 296.527 84.19ZM296.527 85.165C298.657 85.165 299.917 85.705 299.917 86.665C299.917 87.595 298.657 88.135 296.527 88.135C294.412 88.135 293.137 87.595 293.137 86.665C293.137 85.705 294.412 85.165 296.527 85.165Z'
											fill='black'
										/>
										<path
											d='M152.09 50.455V51.49H154.685V50.455H152.09ZM149.555 46.885V49.465C149.555 51.79 148.445 54.22 146.585 55.315L147.365 56.26C149.345 55.045 150.53 52.3 150.53 49.465V46.885H149.555ZM149.795 46.885V49.42C149.795 52.06 150.89 54.76 152.84 55.96L153.56 54.985C151.775 53.905 150.755 51.595 150.755 49.42V46.885H149.795ZM157.07 45.61V59.17H158.27V45.61H157.07ZM154.325 45.895V58.495H155.495V45.895H154.325ZM170.07 50.74V51.775H172.62V50.74H170.07ZM164.94 54.895V55.915H165.81C167.925 55.915 169.215 55.87 170.76 55.57L170.64 54.55C169.14 54.85 167.895 54.895 165.81 54.895H164.94ZM164.94 47.245V55.24H166.125V48.25H169.965V47.245H164.94ZM165.765 50.905V51.895H169.35V50.905H165.765ZM174.75 45.61V59.17H175.95V45.61H174.75ZM172.02 45.925V58.48H173.205V45.925H172.02ZM178.769 46.96V55.735H184.994V46.96H178.769ZM183.779 47.965V54.73H179.984V47.965H183.779ZM187.409 45.61V59.17H188.669V45.61H187.409ZM188.369 51.025V52.075H190.889V51.025H188.369ZM201.429 52.39V54.76H202.674V52.39H201.429ZM195.924 51.955V52.96H208.179V51.955H195.924ZM202.044 54.385C199.134 54.385 197.394 55.24 197.394 56.77C197.394 58.285 199.134 59.14 202.044 59.14C204.954 59.14 206.694 58.285 206.694 56.77C206.694 55.24 204.954 54.385 202.044 54.385ZM202.044 55.345C204.174 55.345 205.434 55.855 205.434 56.77C205.434 57.67 204.174 58.18 202.044 58.18C199.929 58.18 198.654 57.67 198.654 56.77C198.654 55.855 199.929 55.345 202.044 55.345ZM201.249 46.72V47.125C201.249 48.67 199.044 49.885 196.614 50.14L197.064 51.13C199.869 50.785 202.359 49.315 202.359 47.125V46.72H201.249ZM201.774 46.72V47.125C201.774 49.315 204.249 50.785 207.054 51.13L207.504 50.14C205.074 49.885 202.869 48.67 202.869 47.125V46.72H201.774ZM197.049 46.225V47.23H207.084V46.225H197.049ZM222.815 45.61V59.17H224.06V45.61H222.815ZM223.76 51.175V52.225H226.28V51.175H223.76ZM213.56 47.77V48.79H221.555V47.77H213.56ZM217.61 49.915C215.705 49.915 214.31 51.205 214.31 53.035C214.31 54.865 215.705 56.155 217.61 56.155C219.53 56.155 220.91 54.865 220.91 53.035C220.91 51.205 219.53 49.915 217.61 49.915ZM217.61 50.95C218.84 50.95 219.725 51.805 219.725 53.035C219.725 54.25 218.84 55.12 217.61 55.12C216.38 55.12 215.495 54.25 215.495 53.035C215.495 51.805 216.38 50.95 217.61 50.95ZM216.965 45.775V48.235H218.21V45.775H216.965ZM237.514 51.01V52.06H240.019V51.01H237.514ZM236.599 45.595V59.17H237.859V45.595H236.599ZM227.959 46.93V55.33H229.204V46.93H227.959ZM227.959 54.685V55.735H229.039C231.094 55.735 233.179 55.6 235.489 55.12L235.339 54.085C233.104 54.55 231.049 54.685 229.039 54.685H227.959ZM241.787 46.825V53.11H248.012V46.825H241.787ZM246.797 47.83V52.105H243.002V47.83H246.797ZM250.502 45.595V55.54H251.747V45.595H250.502ZM251.357 49.735V50.77H253.757V49.735H251.357ZM243.302 57.85V58.87H252.362V57.85H243.302ZM243.302 54.595V58.285H244.547V54.595H243.302ZM259.498 52.09V53.125H260.368C262.543 53.125 263.833 53.065 265.393 52.765L265.273 51.745C263.758 52.045 262.498 52.09 260.368 52.09H259.498ZM259.498 46.6V52.645H260.698V47.62H264.748V46.6H259.498ZM260.323 49.3V50.275H264.583V49.3H260.323ZM269.158 45.61V53.83H270.343V45.61H269.158ZM266.968 49.15V50.17H269.533V49.15H266.968ZM266.173 45.865V53.755H267.343V45.865H266.173ZM261.253 54.55V55.57H269.113V59.17H270.343V54.55H261.253ZM285.788 45.595V59.17H287.048V45.595H285.788ZM286.703 51.1V52.135H289.208V51.1H286.703ZM282.323 47.065V47.26C282.323 50.845 280.448 53.74 276.698 55.645L277.388 56.605C281.768 54.4 283.538 50.92 283.538 47.065H282.323ZM277.328 47.065V48.085H282.968V47.065H277.328ZM292.087 49.375V50.395H301.282V49.375H292.087ZM292.087 45.88V49.825H293.317V45.88H292.087ZM290.422 51.97V52.975H302.677V51.97H290.422ZM296.527 54.19C293.632 54.19 291.877 55.075 291.877 56.665C291.877 58.225 293.632 59.125 296.527 59.125C299.422 59.125 301.177 58.225 301.177 56.665C301.177 55.075 299.422 54.19 296.527 54.19ZM296.527 55.165C298.657 55.165 299.917 55.705 299.917 56.665C299.917 57.595 298.657 58.135 296.527 58.135C294.412 58.135 293.137 57.595 293.137 56.665C293.137 55.705 294.412 55.165 296.527 55.165Z'
											fill='black'
										/>
										<rect x='10' y='10' width='37' height='24' rx='5' fill='#5D0EC0' />
										<rect x='98' y='70' width='37' height='24' rx='5' fill='#5D0EC0' fillOpacity='0.35' />
										<rect x='54' y='70' width='37' height='24' rx='5' fill='#5D0EC0' fillOpacity='0.35' />
										<rect x='10' y='70' width='37' height='24' rx='5' fill='#5D0EC0' fillOpacity='0.35' />
										<rect x='98' y='40' width='37' height='24' rx='5' fill='#5D0EC0' fillOpacity='0.65' />
										<rect x='54' y='40' width='37' height='24' rx='5' fill='#5D0EC0' fillOpacity='0.65' />
										<rect x='10' y='40' width='37' height='24' rx='5' fill='#5D0EC0' fillOpacity='0.65' />
										<rect x='98' y='10' width='37' height='24' rx='5' fill='#5D0EC0' />
										<rect x='54' y='10' width='37' height='24' rx='5' fill='#5D0EC0' />
										<line x1='125.997' y1='22.25' x2='146.019' y2='22.25' stroke='black' />
										<line x1='126' y1='51.5' x2='146.022' y2='51.5' stroke='black' />
										<line x1='126' y1='81.5' x2='146.022' y2='81.5' stroke='black' />
									</svg>
								</div>
								<button type='button' onClick={() => btnActivate(1, 1)}>
									<p className='emogi'>🔥 🤬 🤛</p>
									<div className={'themeText' + (checks1 === 1 ? ' active' : '')}>
										<h1>
											스트레스는
											<br />
											날려버려
										</h1>
									</div>
								</button>
								<button type='button' onClick={() => btnActivate(2, 1)}>
									<p className='emogi'>💚 😌 🏝</p>
									<div className={'themeText' + (checks1 === 2 ? ' active' : '')}>
										<h1>
											잔잔하고
											<br />
											힐링이 되는
										</h1>
									</div>
								</button>
								<button type='button' onClick={() => btnActivate(3, 1)}>
									<p className='emogi'>🎶 🌈 🫶</p>
									<div className={'themeText' + (checks1 === 3 ? ' active' : '')}>
										<h1>
											스트레스는 날려버려 +
											<br />
											잔잔하고 힐링이 되는
										</h1>
									</div>
								</button>
								<button type='button' onClick={() => btnActivate(1, 2)}>
									<p className='emogi'>✨ 🎸 💃</p>
									<div className={'themeText' + (checks2 === 1 ? ' active' : '')}>
										<h1>
											그루브 타며
											<br />
											비트에 온 몸을 맡겨
										</h1>
									</div>
								</button>
								<button type='button' onClick={() => btnActivate(2, 2)}>
									<p className='emogi'>🎈 🎧 🌆</p>
									<div className={'themeText' + (checks2 === 2 ? ' active' : '')}>
										<h1>
											내 감성을 책임질
											<br />
											인디 음악
										</h1>
									</div>
								</button>
								<button type='button' onClick={() => btnActivate(3, 2)}>
									<p className='emogi'>🎸 🎤 🎧</p>
									<div className={'themeText' + (checks2 === 3 ? ' active' : '')}>
										<h1>
											힙합? 인디?
											<br />
											장르를 가릴 수 없어
										</h1>
									</div>
								</button>
								<button type='button' onClick={() => btnToggle(4, 1)}>
									<p className='emogi'>💙 🫧 🥽</p>
									<div className={'themeText' + (checks31 !== 0 ? ' active' : '')}>
										<h1>
											음악에 흠뻑
											<br />
											물에도 흠뻑
										</h1>
									</div>
								</button>
								<button type='button' onClick={() => btnToggle(5, 2)}>
									<p className='emogi'>🍔 🍕 🍺</p>
									<div className={'themeText' + (checks32 !== 0 ? ' active' : '')}>
										<h1>
											페스티벌도
											<br />
											식후경
										</h1>
									</div>
								</button>
								<button type='button' onClick={() => btnToggle(6, 3)}>
									<p className='emogi'>🤳 📸 👍</p>
									<div className={'themeText' + (checks33 !== 0 ? ' active' : '')}>
										<h1>
											난 노래도 좋지만
											<br />
											사진도 건지고 싶어
										</h1>
									</div>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<img className='mainImg' src={mainImg} alt='mainImg'></img>
		</div>
	);
};

export default Theme;
