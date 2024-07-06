import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <Nav>
      <Logo>My Portfolio</Logo>
      <NavMenu>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem><Link to="/about">About</Link></NavItem>
        <NavItem><Link to="/projects">Projects</Link></NavItem>
        <NavItem><Link to="/testimonials">Testimonials</Link></NavItem>
        <NavItem><Link to="/education">Education</Link></NavItem>
        <NavItem><Link to="/contact">Contact</Link></NavItem>
      </NavMenu>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin-left: 2rem;

  a {
    text-decoration: none;
    color: #333;
  }
`;

export default Header;
