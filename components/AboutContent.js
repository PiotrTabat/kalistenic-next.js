import styled from 'styled-components';

const AboutContainer = styled.section`  // Zmiana z div na section
  background: var(--dark-blue);
  color: var(--text-light);
  padding: 50px 20px;
  text-align: center;
`;

const Title = styled.h2`
  color: var(--electric-yellow);
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 20px auto;
`;

const AboutContent = () => {
    return (
        <AboutContainer>
            <Title>O mnie</Title>
            <Paragraph>
                W KalistenicEMS wierzymy, że fitness może stać się przyjemnym i osiągalnym elementem Twojego codziennego życia. Nasz główny trener, Krystian Kalista, jest certyfikowanym instruktorem EMS z ponad dekadą doświadczenia w pomaganiu klientom w osiągnięciu ich najlepszej formy fizycznej. Z wykształceniem w dziedzinie nauk o sporcie i pasją do zdrowia, Krystian Kalista łączy tradycyjne techniki fitness z innowacyjną technologią elektrostymulacji mięśniowej (EMS).
            </Paragraph>
            <Paragraph>
                Trening EMS to metoda naukowo potwierdzona, pozwalająca osiągnąć szybsze i bardziej znaczące rezultaty w budowaniu mięśni, tonizacji oraz ogólnej kondycji. Wysyłając łagodne impulsy elektryczne do mięśni podczas ćwiczeń, EMS stymuluje głębsze warstwy mięśni, które są trudne do aktywacji poprzez tradycyjne ćwiczenia. Ta technika nie tylko sprawia, że Twoje treningi są bardziej efektywne, ale także znacznie krótsze — osiągniesz w 20 minut to, co normalnie zajęłoby kilka godzin na siłowni.
            </Paragraph>
            <Paragraph>
                Dołącz do nas w KalistenicEMS, aby doświadczyć, jak nowoczesna technologia spotyka się z tradycyjnym fitness, tworząc coś naprawdę transformującego dla Twojego zdrowia i ciała.
            </Paragraph>
        </AboutContainer>
    );
};

export default AboutContent;
