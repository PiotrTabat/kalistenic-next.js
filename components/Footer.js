import styled from 'styled-components';

const FooterContainer = styled.footer`
    padding: 20px;
    text-align: center;
    background: var(--deep-blue);
    color: var(--text-light);
    margin-top: 50px;

    @media (max-width: 768px) {
        font-size: 0.75rem;
    }
`;

const Footer = () => {
    return (
        <div className="container">
            <FooterContainer>
                © 2024 KalistenicEMS. Wszystkie prawa zastrzeżone.
                <div>Znajdź mnie na social mediach</div>
            </FooterContainer>
        </div>
    );
};

export default Footer;
