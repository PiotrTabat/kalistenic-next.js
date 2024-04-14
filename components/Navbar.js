import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import { useState } from 'react';


const NavContainer = styled.nav`
  background: var(--deep-blue);
  color: var(--text-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 80px;
  font-family: 'Open Sans', sans-serif;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 2rem;
  color: var(--text-electric-green);
  font-weight: 400;
  margin: 0 0 0 20px;
  cursor: pointer;
`;

const OwnerName = styled.div`
  font-size: 1.5rem;
  color: var(--text-light);
  font-style: italic;
  margin-left: 10px; 
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 60px;
    left: 0;
    background: var(--deep-blue);
    padding: 10px;
    align-items: center;

    a {
      padding: 10px;
      margin: 5px 0;
      width: 100%;
      text-align: center;
      font-size: 1.25rem; // Increased font size for visibility
    }
  }

  a {
    color: var(--text-light);
    text-decoration: none;
    margin-left: 20px;
    padding: 10px;
    font-size: 1.25rem; // Increased font size for desktop links
    transition: color 0.3s;

    &:hover {
      color: var(--electric-orange);
    }
  }
`;

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <NavContainer>
            <LogoContainer>
                <Logo>KalistenicEMS</Logo>
                <OwnerName>Krystian Kalista</OwnerName>
            </LogoContainer>
            <NavLinks isOpen={isOpen}>
                <Link href="/">Strona główna</Link>
                <Link href="/about">O nas</Link>
                <Link href="/services">Usługi</Link>
                <Link href="/contact">Kontakt</Link>
            </NavLinks>
        </NavContainer>
    );
};

export default Navbar;
