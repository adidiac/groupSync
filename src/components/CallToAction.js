import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding:4rem 1rem;
  text-align:center;
  background: ${({theme})=>theme.accent};
  color:#000;
`;
const Title = styled.h2`
  font-size:2rem; margin-bottom:1.5rem;
`;
const Btn   = styled.a`
  padding:.75rem 2rem;
  background: #000;
  color: #fff;
  border-radius:4rem;
  font-weight:600;
  display:inline-block;
  transition:opacity .2s;
  &:hover { opacity:.8; }
`;

export default function CallToAction() {
  return (
    <Section id="signup">
      <Title>Ready to Sync Your Group?</Title>
      <Btn href="https://yourapp.com/signup">Sign Up Now</Btn>
    </Section>
  );
}
