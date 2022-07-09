import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/nav';
import Home from './pages/Home.tsx';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
	return (
		<div className='App'>
			<NavComponent />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
