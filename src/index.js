import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<RecoilRoot>
			<ScrollToTop />
			<App />
		</RecoilRoot>
	</BrowserRouter>
);

