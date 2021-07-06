import React from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, Container, NavDropdown, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import SearchBox from './../SearchBox';
import { AUTH_USER } from './../../redux/constants/userConstants';

export default function Header() {
	//**************** variables ****************//
	const dispatch = useDispatch();

	const userLogin = useSelector(state => state.AUTH_USER);
	

	//**************** functions ****************//
	const logoutHandler = () => {
		console.log('logout handler');
	};
	return (
		<header className='header'>
			<Navbar
				bg='dark'
				fixed='top'
				variant='dark'
				expand='lg'
				collapseOnSelect
			>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand className='navbar-brand'>
							<Image src='/images/logo.png' width='40px' height='40px' />
							G-Spot
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' className='navbar-menu-button' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='navbar-inner-nav'>
							<Route
								render={({ history }) => (
									<SearchBox history={history} />
								)}
							/>{' '}
							<LinkContainer to='/dashboard/user/user_cart' id='cart' className='cart-container'>
								<Nav.Link className='cart-contents'>
                        <span className='cart-span'>1</span>
									<i className='fas fa-shopping-cart'></i>
								</Nav.Link>
							</LinkContainer>
							{AUTH_USER ? (
								<NavDropdown title={AUTH_USER.name} id='username'>
									<LinkContainer to='/dashboard'>
										<NavDropdown.Item className='dropdown-profile-dark'>
											Account
										</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Item
										className='dropdown-logout-red'
										onClick={logoutHandler}
									>
										Logout
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<LinkContainer to='/login'>
									<Nav.Link>
										<i className='fas fa-user'></i>&nbsp;Sign In
									</Nav.Link>
								</LinkContainer>
							)}
							{AUTH_USER && AUTH_USER.admin && (
								<NavDropdown title='Admin' id='adminmenu'>
									<LinkContainer to='/admin/userlist'>
										<NavDropdown.Item className='dropdown-profile-dark'>
											Users
										</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/productlist'>
										<NavDropdown.Item className='dropdown-profile-dark'>
											Products
										</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/orderlist'>
										<NavDropdown.Item className='dropdown-profile-dark'>
											Orders
										</NavDropdown.Item>
									</LinkContainer>
								</NavDropdown>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
}
