import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavComponent = () => {
	return (
		<Navbar bg='light' expand='lg'>
			<Container>
				<Navbar.Brand href='#home'>Binary Woo의 개발 블로그</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link href='/'>Home</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavComponent;
