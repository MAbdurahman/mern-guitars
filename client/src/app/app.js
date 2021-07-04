import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '../components/navigation/Footer';
import Header from '../components/navigation/Header';
import Home from './../components/home/Home';

export default function App() {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path='/' component={Home} exact />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}
