// components/Benefits.js
import styled from 'styled-components';

const BenefitsContainer = styled.section`
  padding: 50px 20px;
  background: var(--dark-blue);
  color: var(--text-light);
`;

const BenefitsTitle = styled.h2`
  text-align: center;
  color: var(--deep-blue);
  margin-bottom: 30px;
`;

const Benefit = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  h3 {
    margin-left: 15px;
    color: var(--electric-yellow);
  }
`;

const Benefits = () => {
    return (
        <BenefitsContainer>
            <BenefitsTitle>Korzyści z EMS</BenefitsTitle>
            <Benefit>
                <img src="/path-to-icon1.png" alt="Korzyść 1"/>
                <h3>Szybkie rezultaty</h3>
            </Benefit>
            <Benefit>
                <img src="/path-to-icon2.png" alt="Korzyść 2"/>
                <h3>Bezpieczne dla stawów</h3>
            </Benefit>
            <Benefit>
                <img src="/path-to-icon3.png" alt="Korzyść 3"/>
                <h3>Personalizowane treningi</h3>
            </Benefit>
        </BenefitsContainer>
    );
};

export default Benefits;
