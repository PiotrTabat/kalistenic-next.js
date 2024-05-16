import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 20px;
  background: var(--deep-blue);
  color: var(--text-light);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 500px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: var(--dark-blue); 
  color: var(--text-light);
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 2px solid var(--electric-green); 
  border-radius: 5px;
  color: var(--text-dark); 
  background: var(--text-light);

  &::placeholder {
    color: var(--text-dark);
  }
`;

const Textarea = styled.textarea`
  height: 100px;
  padding: 10px;
  margin-bottom: 20px;
  border: 2px solid var(--electric-green);
  border-radius: 5px;
  color: var(--text-dark);
  background: var(--text-light);

  &::placeholder {
    color: var(--text-dark);
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: var(--electric-green);
  color: var(--text-dark);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--green);
    transform: scale(1.01);
  }

  &:active {
    transform: scale(0.99);
  }
`;

const ContactContent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Dziękujemy, ${name}! Otrzymaliśmy Twoją wiadomość.`);
    };

    return (
        <ContactContainer>
            <Form onSubmit={handleSubmit}>
                <h1>Skontaktuj się z nami</h1>
                <Input
                    type="text"
                    placeholder="Twoje imię"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    aria-label="Twoje imię"
                />
                <Input
                    type="email"
                    placeholder="Twój Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Twój Email"
                />
                <Textarea
                    placeholder="Twoja wiadomość"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    aria-label="Twoja wiadomość"
                />
                <Button type="submit">Wyślij wiadomość</Button>
            </Form>
        </ContactContainer>
    );
};

export default ContactContent;
