import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const MobileNavContainer = styled.nav`
  background: var(--deep-blue);
  color: var(--text-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
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
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  border-radius: 50%;
  overflow: hidden;

  &:hover {
    transform: scale(1.5);
  }

  @media (max-width: 380px) {
    display: none;
  }
`;

const OwnerNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;

  @media (max-width: 380px) {
    margin-right: 10px;
    margin-left: 10px;
  }
`;

const OwnerName = styled.div`
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.2;
`;

const OwnerSurname = styled.div`
  font-size: 1rem;
`;

const HamburgerIcon = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-left: auto;
  margin-right: 2rem;

  span {
    height: 3px;
    width: 25px;
    background: var(--text-light);
    margin-bottom: 4px;
    border-radius: 5px;
    transition: 0.3s;
  }

  @media (max-width: 380px) {
    margin-left: 0;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  background: var(--deep-blue);
  z-index: 999;
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
  transition: max-height 0.3s ease-in-out;
`;

const MobileMenuLink = styled.a`
  color: var(--text-light);
  text-decoration: none;
  margin: 20px 0;
  padding: 10px;
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

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hydrated, setHydrated] = useState(false);
    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);

    useEffect(() => {
        setHydrated(true);

        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                hamburgerRef.current &&
                !hamburgerRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    if (!hydrated) {
        return null;
    }

    return (
        <MobileNavContainer>
            <LogoContainer>
                <Link href="/" passHref>
                    <Logo>KalistenicEMS</Logo>
                </Link>
                <LogoImage>
                    <Image
                        src="/images/KrystianLogo1.png"
                        alt="Krystian Kalista Logo"
                        width={50}
                        height={50}
                        fetchpriority="high"
                    />
                </LogoImage>
                <OwnerNameContainer>
                    <OwnerName>Krystian</OwnerName>
                    <OwnerSurname>Kalista</OwnerSurname>
                </OwnerNameContainer>
            </LogoContainer>
            <HamburgerIcon ref={hamburgerRef} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </HamburgerIcon>
            <MobileMenu isOpen={isOpen} ref={menuRef}>
                <Link href="/" passHref>
                    <MobileMenuLink onClick={toggleMenu}>Strona główna</MobileMenuLink>
                </Link>
                <Link href="/about" passHref>
                    <MobileMenuLink onClick={toggleMenu}>O mnie</MobileMenuLink>
                </Link>
                <Link href="/services" passHref>
                    <MobileMenuLink onClick={toggleMenu}>Usługi</MobileMenuLink>
                </Link>
                <Link href="/prices" passHref>
                    <MobileMenuLink onClick={toggleMenu}>Cennik</MobileMenuLink>
                </Link>
                <Link href="/contact" passHref>
                    <MobileMenuLink onClick={toggleMenu}>Kontakt</MobileMenuLink>
                </Link>
            </MobileMenu>
        </MobileNavContainer>
    );
};

export default MobileNavbar;
