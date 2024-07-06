import React from 'react';
import styled from 'styled-components';

const Testimonials = () => {
  return (
    <TestimonialsSection>
      <h2>Testimonials</h2>
      <TestimonialsGrid>
        {/* Example testimonial */}
        <TestimonialCard>
          <TestimonialText>
            "Great work! Highly recommend."
          </TestimonialText>
          <TestimonialAuthor>
            <AuthorImage src='/path-to-author-image.jpg' alt='Author Name' />
            <AuthorName>Author Name</AuthorName>
            <AuthorTitle>Title/Company</AuthorTitle>
          </TestimonialAuthor>
        </TestimonialCard>
      </TestimonialsGrid>
    </TestimonialsSection>
  );
};

const TestimonialsSection = styled.section`
  padding: 4rem 2rem;
`;

const TestimonialsGrid = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TestimonialCard = styled.div`
  background: #fff;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const TestimonialText = styled.p`
  font-style: italic;
  margin-bottom: 1rem;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorImage = styled.img`
  width: 50px;
  border-radius: 50%;
  margin-right: 1rem;
`;

const AuthorName = styled.div`
  font-weight: bold;
`;

const AuthorTitle = styled.div`
  color: #666;
`;

export default Testimonials;
