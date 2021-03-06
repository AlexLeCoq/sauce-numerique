import React from 'react';
import { animated, useSpring, config } from 'react-spring';
import styled from 'styled-components';
import Header from '../Header';
import Brand from './Brand';
import CollapseMenu from './CollapseMenu';
import Burgermenu from './BurgerMenu';

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #ffffff;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      border-bottom: 2px solid;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const NavBar = styled(animated.nav)`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  background: ${props => props.isHome ? "transparent" : "#3e53ce"};
  z-index: 1;
  font-size: 1.4rem;

  @media screen and (max-width: 768px) {
    background: ${props => props.navbarState && props.isHome  ? "#3e53ce" : ""};
    position: ${props => props.navbarState ? "fixed" : ""};
  }
`;

const FlexContainer = styled.div`
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Navbar = ({ isHome, navbarState, handleNavbar} ) => {

  return (
    <>
      <NavBar isHome={isHome} navbarState={navbarState}>
        <FlexContainer>
          <Brand />
          <NavLinks>
          <Header />
          </NavLinks>
          <BurgerWrapper>
            <Burgermenu
              navbarState={navbarState}
              handleNavbar={handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={navbarState}
        handleNavbar={handleNavbar}
      />
    </>
  );
};

export default Navbar;
