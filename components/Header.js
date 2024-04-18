import styled from 'styled-components';

const Navbar = styled.nav`
  background: #00008B; // głęboki niebieski
  color: white;
  padding: 1rem;
`;

const Header = () => {
    return (
        <Navbar>
            <h1>KalistenicEMS</h1>
        </Navbar>
    );
};

export default Header;
