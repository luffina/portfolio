import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterSection>
      <p>&copy; {new Date().getFullYear()} Lufina Zohar Rabic Mohamed. All rights reserved.</p>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  padding: 1rem 2rem;
  background: #333;
  color: #fff;
  text-align: center;
`;

export default Footer;
