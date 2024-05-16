// components/Footer.js
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
  background: var(--deep-blue);
  color: var(--text-light);
`;

const Footer = () => {
    return (
        <FooterContainer>
            © 2024 KalistenicEMS. Wszystkie prawa zastrzeżone.
            <div>Znajdź nas na [Social Media]</div>
        </FooterContainer>
    );
};

export default Footer;
