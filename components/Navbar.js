import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const NavContainer = styled.nav`
  background: var(--deep-blue);
  color: var(--text-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 80px;
  font-family: 'Open Sans', sans-serif;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-sizing: border-box;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 2.5rem;
  font-weight: 400;
  background: linear-gradient(to right, var(--text-electric-green), var(--text-electric-orange));
  -webkit-background-clip: text;
  color: transparent;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(to right, var(--text-electric-orange), var(--text-electric-green));
    -webkit-background-clip: text;
    color: transparent;
    transform: scale(1.1);
  }
`;

const LogoImage = styled.div`
  width: 50px;
  height: 50px;
  margin-left: 15px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  border-radius: 50%;
  overflow: hidden;

  &:hover {
    transform: scale(1.5);
  }
`;

const OwnerName = styled.div`
  font-size: 1.8rem;
  margin-left: 10px;
  color: var(--text-light);
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLink = styled.a`
  color: var(--text-light);
  text-decoration: none;
  margin-left: 20px;
  padding: 5px;
  font-size: 1.3rem;
  transition: color 0.3s, transform 0.3s;

  &:hover {
    color: var(--electric-green);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 25px;
    background: var(--text-light);
    margin-bottom: 4px;
    border-radius: 5px;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  background: var(--deep-blue);
  z-index: 1000;
  padding: 1rem 0;

  ${StyledLink} {
    margin: 10px 0;
  }

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <NavContainer>
            <LogoContainer>
                <Link href="/" passHref legacyBehavior>
                    <Logo>KalistenicEMS</Logo>
                </Link>
                <LogoImage>
                    <Image
                        src="/images/KrystianLogo1.png"
                        alt="Krystian Kalista Logo"
                        width={50}
                        height={50}
                        fetchpriority="high" // Correct property
                    />
                </LogoImage>
                <OwnerName>Krystian Kalista</OwnerName>
            </LogoContainer>
            <NavLinks>
                <Link href="/" passHref legacyBehavior>
                    <StyledLink>Strona główna</StyledLink>
                </Link>
                <Link href="/about" passHref legacyBehavior>
                    <StyledLink>O mnie</StyledLink>
                </Link>
                <Link href="/services" passHref legacyBehavior>
                    <StyledLink>Usługi</StyledLink>
                </Link>
                <Link href="/prices" passHref legacyBehavior>
                    <StyledLink>Cennik</StyledLink>
                </Link>
                <Link href="/contact" passHref legacyBehavior>
                    <StyledLink>Kontakt</StyledLink>
                </Link>
            </NavLinks>
            <HamburgerIcon onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </HamburgerIcon>
            <MobileMenu isOpen={isOpen}>
                <Link href="/" passHref legacyBehavior>
                    <StyledLink onClick={toggleMenu}>Strona główna</StyledLink>
                </Link>
                <Link href="/about" passHref legacyBehavior>
                    <StyledLink onClick={toggleMenu}>O mnie</StyledLink>
                </Link>
                <Link href="/services" passHref legacyBehavior>
                    <StyledLink onClick={toggleMenu}>Usługi</StyledLink>
                </Link>
                <Link href="/prices" passHref legacyBehavior>
                    <StyledLink onClick={toggleMenu}>Cennik</StyledLink>
                </Link>
                <Link href="/contact" passHref legacyBehavior>
                    <StyledLink onClick={toggleMenu}>Kontakt</StyledLink>
                </Link>
            </MobileMenu>
        </NavContainer>
    );
};

export default Navbar;
