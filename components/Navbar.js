import styled from 'styled-components';
import Link from 'next/link';

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
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  cursor: pointer;
  background: linear-gradient(to right, var(--text-electric-orange), var(--text-electric-blue));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-decoration: none;
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
`;

const StyledLink = styled.a`
  color: var(--text-light);
  text-decoration: none;
  margin-left: 20px;
  padding: 10px;
  font-size: 1.25rem;
  transition: color 0.3s, transform 0.3s;

  &:hover {
    color: var(--electric-orange);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--electric-blue);
  }
`;

const Navbar = () => (
    <NavContainer>
        <LogoContainer>
            <Link href="/" passHref>
                <Logo as="a">KalistenicEMS</Logo>
            </Link>
            <OwnerName>Krystian Kalista</OwnerName>
        </LogoContainer>
        <NavLinks>
            <Link href="/" passHref><StyledLink as="a">Strona główna</StyledLink></Link>
            <Link href="/about" passHref><StyledLink as="a">O nas</StyledLink></Link>
            <Link href="/services" passHref><StyledLink as="a">Usługi</StyledLink></Link>
            <Link href="/contact" passHref><StyledLink as="a">Kontakt</StyledLink></Link>
        </NavLinks>
    </NavContainer>
);

export default Navbar;
