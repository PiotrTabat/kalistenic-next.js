import { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

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

    @media (max-width: 380px) {
        padding: 0 0.5rem;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 380px) {
        margin-left: 10px;
    }
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

    @media (max-width: 380px) {
        font-size: 1.7rem;
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
    line-height: 1.2;

    @media (max-width: 380px) {
        font-size: 0.8rem;
    }
`;

const OwnerSurname = styled.div`
    font-size: 1rem;

    @media (max-width: 380px) {
        font-size: 0.8rem;
    }
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

        &:nth-child(1) {
            transform: ${({ isOpen }) => isOpen && 'rotate(45deg) translate(5px, 5px)'};
        }

        &:nth-child(2) {
            opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
        }

        &:nth-child(3) {
            transform: ${({ isOpen }) => isOpen && 'rotate(-45deg) translate(5px, -5px)'};
        }
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
    background: var(--dark-blue);
    z-index: 999;
    overflow: hidden;
    max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
    transition: max-height 0.5s ease-in-out, padding 0.5s ease-in-out;
    padding: ${({ isOpen }) => (isOpen ? '25px 0' : '0 0')};
    border-radius: 0 0 20px 20px;
    box-shadow: ${({ isOpen }) => (isOpen ? '0 10px 15px -5px rgba(0, 0, 0, 0.3), 0 15px 15px -5px var(--text-electric-green), 0 10px 15px -5px var(--electric-red)' : 'none')};
`;

const MobileMenuLink = styled.a`
    color: var(--text-light);
    text-decoration: none;
    margin: 20px 0;
    padding: 15px 20px;
    font-size: 1.5rem;
    line-height: 1.8;
    transition: color 0.3s, transform 0.3s;
    animation: ${({ isOpen }) => (isOpen ? fadeIn : 'none')} 0.5s ease;

    &:hover {
        color: var(--electric-green);
        transform: scale(1.1);
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
                        priority
                    />
                </LogoImage>
                <OwnerNameContainer>
                    <OwnerName>Krystian</OwnerName>
                    <OwnerSurname>Kalista</OwnerSurname>
                </OwnerNameContainer>
            </LogoContainer>
            <HamburgerIcon ref={hamburgerRef} onClick={toggleMenu} isOpen={isOpen}>
                <span></span>
                <span></span>
                <span></span>
            </HamburgerIcon>
            <MobileMenu isOpen={isOpen} ref={menuRef}>
                <Link href="/" passHref>
                    <MobileMenuLink onClick={toggleMenu} isOpen={isOpen}>Strona główna</MobileMenuLink>
                </Link>
                <Link href="/about" passHref>
                    <MobileMenuLink onClick={toggleMenu} isOpen={isOpen}>O mnie</MobileMenuLink>
                </Link>
                <Link href="/services" passHref>
                    <MobileMenuLink onClick={toggleMenu} isOpen={isOpen}>Usługi</MobileMenuLink>
                </Link>
                <Link href="/prices" passHref>
                    <MobileMenuLink onClick={toggleMenu} isOpen={isOpen}>Cennik</MobileMenuLink>
                </Link>
                <Link href="/contact" passHref>
                    <MobileMenuLink onClick={toggleMenu} isOpen={isOpen}>Kontakt</MobileMenuLink>
                </Link>
            </MobileMenu>
        </MobileNavContainer>
    );
};

export default MobileNavbar;
