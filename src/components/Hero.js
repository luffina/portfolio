import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <h1>Lufina Zohar Rabic Mohamed</h1>
        <p>Software Engineering Student at RMIT University</p>
        <HeroButton>Contact Me</HeroButton>
      </HeroContent>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('/path-to-your-image.jpg') no-repeat center center/cover;
`;

const HeroContent = styled.div`
  text-align: center;
  color: #fff;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

const HeroButton = styled.button`
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  background: #007BFF;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #0056b3;
  }
`;

export default Hero;
