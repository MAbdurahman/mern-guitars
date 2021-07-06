import React from 'react';
import ContactsIcon from '@material-ui/icons/Contacts';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import {
	Navbar,
	Nav,
	Container,
	NavDropdown,
	Image,
	ListGroup,
	ListGroupItem,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function Footer() {
	return (
		<footer id='footer' className='footer container-fluid'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-5 col-xs-12 about-company mt-lg-3'>
						<Navbar.Brand className='navbar-brand'>
							<Image src='/images/logo.png' width='30px' height='30px' />
							G-Spot
						</Navbar.Brand>
						<p className='pr-5 text-white-50'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Quasi dolorem iusto cupiditate laboriosam natus quo!
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ipsa.
						</p>
						<p className='social-icons'>
							<a
								href='!#'
								id='facebook'
								className='text-white-50 social-icon facebook'
							>
								<i class='fab fa-facebook-square'></i>
							</a>
							<a href='!#' className='text-white-50 social-icon twitter'>
								<i class='fab fa-twitter-square'></i>
							</a>
							<a
								href='!#'
								to='!#'
								className='text-white-50 social-icon instagram'
							>
								<i class='fab fa-instagram-square'></i>
							</a>
						</p>
					</div>
					<div className='col-lg-3 col-xs-12 about-links mt-lg-3'>
						<h4 className='text-white-50'>Links</h4>
						<div className='link-container'>
							<ul className='m-0 p-0 link-list'>
								<li className='link text-white-50'>
									<a href=''>Home</a>
								</li>
								<li className='link text-white-50'>
									<a href=''>About</a>
								</li>
								<li className='link text-white-50'>
									<a href=''>Team</a>
								</li>
								<li className='link text-white-50'>
									<a href=''>Products</a>
								</li>
								<li className='link text-white-50'>
									<a href=''>Contact</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='col-lg-4 col-xs-12 about-location mt-lg-3'>
						<h4 className='text-white-50'>Location</h4>
						<p className='text-white-50 mb-0'>
							1234 SomeStreet Avenue #100
						</p>
						<p className='text-white-50 mb-1'>
							SomeCity, SomeState 11235
						</p>
						<p className='text-white-50 mb-0'>
							Work-hours: 9:00am - 9:00pm
						</p>
						<p className='text-white-50 mb-1 link'>
							<PhoneIcon />
							<a href='tel:901-425-5525'>123-456-7890</a>
						</p>
						<p className='text-white-50 mb-2 link'>
							<EmailIcon />{' '}
							<a href='mailto:mdbdrrhm2@gmail.com' target='_blank'>
								guitars@gspot.com
							</a>
						</p>
					</div>
				</div>
				<div className='row'>
					<div className='col copyright'>
						<p className='text-white-50 text-center link'>
							<small>
								<a href='#' target='_blank'>
									Terms and Conditions
								</a>
								&nbsp;|&nbsp;
								<a href='#' target='_blank'>
									Privacy Policy
								</a>
								<br />
							</small>
							<small className='text-white-50'>
								&copy;&nbsp;2021 G-Spot, All rights reserved
							</small>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
