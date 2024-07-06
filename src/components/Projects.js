import React from 'react';
import styled from 'styled-components';

const Projects = () => {
  return (
    <ProjectsSection>
      <h2>My Projects</h2>
      <ProjectGrid>
        {/* Add your project details here */}
        <ProjectCard>
          <ProjectImage src='/path-to-project-image.jpg' alt='Project Title' />
          <ProjectTitle>Project Title</ProjectTitle>
          <ProjectDescription>Brief description or tags.</ProjectDescription>
        </ProjectCard>
      </ProjectGrid>
    </ProjectsSection>
  );
};

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  background: #f9f9f9;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background: #fff;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const ProjectTitle = styled.h3`
  margin: 1rem 0 0.5rem;
`;

const ProjectDescription = styled.p`
  color: #666;
`;

export default Projects;
