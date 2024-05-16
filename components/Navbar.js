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
  background: linear-gradient(to right, var(--text-electric-orange), var(--text-electric-blue));
  -webkit-background-clip: text;
  color: transparent;
  text-decoration: none;
  cursor: pointer;
`;

const LogoImage = styled.div`
  width: 60px;
  height: 60px;
  margin-left: 60px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(2) translateY(12px); 
  }
`;

const OwnerName = styled.div`
  font-size: 1.8rem;
  color: var(--text-light);
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled.a`
  color: var(--text-light);
  text-decoration: none;
  margin-left: 20px;
  padding: 5px;
  font-size: 1.3rem;
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
                <Logo>KalistenicEMS</Logo>
            </Link>
            <LogoImage>
                <Image src="/images/KrystianLogo.png" alt="Krystian Kalista Logo" width={60} height={60} />
            </LogoImage>
            <OwnerName>Krystian Kalista</OwnerName>
        </LogoContainer>
        <NavLinks>
            <Link href="/" passHref><StyledLink>Strona główna</StyledLink></Link>
            <Link href="/about" passHref><StyledLink>O mnie</StyledLink></Link>
            <Link href="/services" passHref><StyledLink>Usługi</StyledLink></Link>
            <Link href="/prices" passHref><StyledLink>Cennik</StyledLink></Link>
            <Link href="/contact" passHref><StyledLink>Kontakt</StyledLink></Link>
        </NavLinks>
    </NavContainer>
);

export default Navbar;
