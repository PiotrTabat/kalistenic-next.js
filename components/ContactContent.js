import React, { useState } from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  background: var(--deep-blue);
  padding: 1rem 10%;
  color: var(--text-light);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  min-height: calc(100vh - 60px);
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 4rem 5%;
  }
`;

const ContactContentTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--electric-blue);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  text-align: center;
  max-width: 400px;

  h2 {
    font-size: 2rem;
    color: var(--electric-red);
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1.7rem;
    color: var(--electric-red);
    margin: 0.5rem 0;
    
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 3px 20px var(--electric-red);
  margin-top: 2rem;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 200px;
    margin-bottom: 2rem;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const ContactForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 450px;
  background: var(--text-dark);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  label {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: var(--text-light);

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  input, textarea {
    font-size: 1rem;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid var(--electric-green);
    border-radius: 5px;
    background: var(--dark-gray);
    color: var(--text-light);
    resize: none;

    @media (max-width: 768px) {
      padding: 0.5rem;
    }
  }

  button {
    font-size: 1.25rem;
    padding: 0.75rem;
    background: var(--electric-green);
    color: var(--text-dark);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background: var(--electric-orange);
    }

    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 0.75rem;
    }
  }
`;

const ContactContent = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        window.location.href = `mailto:krystian.kalista@onmet.pl?subject=Kontakt od ${name}&body=${encodeURIComponent(message)}%0D%0A%0D%0AEmail: ${email}`;
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    };

    return (
        <ContactSection>
            <ContactContentTitle>Kontakt</ContactContentTitle>
            <ContentWrapper>
                <ContactInfo>
                    <h2>Krystian Kalista</h2>
                    <p>+48 505 312 991</p>
                    <MapContainer>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.5582109340073!2d21.077548!3d52.305175!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc42a04c050d%3A0x84a15be780ff9c3d!2sZdrofit%20Targ%C3%B3wek!5e0!3m2!1spl!2spl!4v1684362254369!5m2!1spl!2spl&zoom=19"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </MapContainer>
                </ContactInfo>
                <ContactForm onSubmit={handleSubmit}>
                    <label htmlFor="name">Imię</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="message">Wiadomość</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Wyślij</button>
                </ContactForm>
            </ContentWrapper>
        </ContactSection>
    );
};

export default ContactContent;
