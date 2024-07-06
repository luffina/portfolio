import React from 'react';
import styled from 'styled-components';

const Education = () => {
  return (
    <EducationSection>
      <h2>Education</h2>
      <EducationList>
        <EducationItem>
          <h3>Bachelor's degree in Software Engineering</h3>
          <p>RMIT University - Melbourne VIC, March 2023 to Present</p>
        </EducationItem>
        <EducationItem>
          <h3>Honours diploma in Computer Applications</h3>
          <p>Computer Software College - Tamil Nadu, September 2021 to September 2022</p>
        </EducationItem>
      </EducationList>
    </EducationSection>
  );
};

const EducationSection = styled.section`
  padding: 4rem 2rem;
  background: #f9f9f9;
`;

const EducationList = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const EducationItem = styled.div`
  margin-bottom: 2rem;

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
  }
`;

export default Education;
