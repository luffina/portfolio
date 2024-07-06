import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactSection>
      <h2>Contact Me</h2>
      <ContactDetails>
        <p>Email: <a href="mailto:lufizoh@gmail.com">lufizoh@gmail.com</a></p>
        <p>Phone: <a href="tel:+61493398870">+61 493 398 870</a></p>
      </ContactDetails>
      <ContactForm>
        <Input type='text' placeholder='Your Name' />
        <Input type='email' placeholder='Your Email' />
        <Textarea placeholder='Your Message' />
        <SubmitButton>Send Message</SubmitButton>
      </ContactForm>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  padding: 4rem 2rem;
`;

const ContactDetails = styled.div`
  margin-bottom: 2rem;
  p {
    margin-bottom: 0.5rem;
    a {
      color: #007BFF;
      text-decoration: none;
    }
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 150px;
`;

const SubmitButton = styled.button`
  padding: 1rem;
  background: #007BFF;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.3s ease;

  &:hover {
    background: #0056b3;
  }
`;

export default Contact;
