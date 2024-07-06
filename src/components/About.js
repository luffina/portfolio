import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutSection>
      <Image src='/path-to-your-image.jpg' alt='Lufina Zohar Rabic Mohamed' />
      <Bio>
        <h2>About Me</h2>
        <p>After School Facilitator at Code Camp with a background in Software Engineering. Passionate about technology and education.</p>
      </Bio>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  display: flex;
  padding: 4rem 2rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 200px;
  border-radius: 50%;
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

const Bio = styled.div`
  max-width: 600px;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.6;
  }
`;

export default About;
