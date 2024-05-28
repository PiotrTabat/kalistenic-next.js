import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import dynamic from 'next/dynamic';

const MobileNavbar = dynamic(() => import('./MobileNavbar'), { ssr: false });

const NavContainer = styled.nav`
    background: var(--deep-blue);
    color: var(--text-light);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    height: 8vw;
    font-family: 'Open Sans', sans-serif;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    box-sizing: border-box;

    @media (max-width: 768px) {
        padding: 0 1rem;
        height: 80px;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.a`
    font-size: 2.5vw;
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

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const LogoImage = styled.div`
    margin-left: 2.5vw;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    border-radius: 50%;
    overflow: hidden;

    &:hover {
        transform: scale(1.5);
    }

    @media (max-width: 768px) {
        width: 50px;
        height: 50px;
        margin-left: 15px;
    }
`;

const OwnerName = styled.div`
    font-size: 1.8vw;
    margin-left: 1vw;
    color: var(--text-light);

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

const NavLinks = styled.div`
    display: flex;
    align-items: center;
`;

const StyledLink = styled.a`
    color: var(--text-light);
    text-decoration: none;
    margin-left: 2vw;
    padding: 0.5vw;
    font-size: 1.3vw;
    transition: color 0.3s, transform 0.3s;

    @media (max-width: 768px) {
        font-size: 1rem;
        margin-left: 20px;
        padding: 5px;
    }

    &:hover {
        color: var(--electric-green);
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }
`;

const Navbar = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    if (isMobile) {
        return <MobileNavbar />;
    }

    return (
        <NavContainer>
            <LogoContainer>
                <Link href="/" passHref>
                    <Logo>KalistenicEMS</Logo>
                </Link>
                <LogoImage>
                    <Image
                        src="/images/KrystianLogo1.png"
                        alt="Krystian Kalista Logo"
                        width={58}
                        height={58}
                        quality={100}
                        fetchpriority="high"
                    />
                </LogoImage>
                <OwnerName>Krystian Kalista</OwnerName>
            </LogoContainer>
            <NavLinks>
                <Link href="/" passHref>
                    <StyledLink>Strona główna</StyledLink>
                </Link>
                <Link href="/about" passHref>
                    <StyledLink>O mnie</StyledLink>
                </Link>
                <Link href="/services" passHref>
                    <StyledLink>Usługi</StyledLink>
                </Link>
                <Link href="/prices" passHref>
                    <StyledLink>Cennik</StyledLink>
                </Link>
                <Link href="/contact" passHref>
                    <StyledLink>Kontakt</StyledLink>
                </Link>
            </NavLinks>
        </NavContainer>
    );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
