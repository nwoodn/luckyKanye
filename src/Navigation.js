import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {LinkContainer} from 'react-router-bootstrap';
import './Navigation.css';

class Navigation extends React.Component {
	render() {

		return (
			<div>
				<link href="https://fonts.googleapis.com/css?family=Bungee" rel="stylesheet" />
				<div id="container">
					<img className="kanyeImg" src="https://www.hastac.org/sites/default/files/upload/images/post/kanye-chain.jpg" alt="Kanye West" />
					<h1>Kanye West</h1>
				</div>
				<Navbar inverse collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="#">#kanye2020</a>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							{/*<LinkContainer to="/about">About</LinkContainer>
							<LinkContainer to="/events">Events</LinkContainer>*/}
							<NavItem>About</NavItem>
							<NavItem>Events</NavItem>
							<LinkContainer to="/quiz"><NavItem>Political Stances</NavItem></LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);

	}
}

export default Navigation;