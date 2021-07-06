import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from '../components/navigation/Footer';
import Header from '../components/navigation/Header';
import Home from './../components/home/Home';

export default function App() {
	return (
		<BrowserRouter className='wrapper'>
			<Header />
			<main className='py-3 main-div'>
		
					<Switch>
						<Route path='/' component={Home} exact />
					</Switch>
			</main>

			<Footer />
		</BrowserRouter>
	);
}
