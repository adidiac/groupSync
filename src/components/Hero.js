import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  width: 100vw; left: 50%; transform: translateX(-50%);
  height: 100vh;
  background:
    linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
    url('/bg/hero-bg.png') center center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: clamp(2rem,5vw,3.5rem);
  margin-bottom: 1rem;
  text-align: center;
  text-shadow: 0 2px 8px rgba(0,0,0,0.8);
`;

const Subtitle = styled.p`
  font-size: clamp(1rem,2.5vw,1.25rem);
  max-width: 700px;
  margin: 0 auto 2rem;
  text-align: center;
  color: #ddd;
  text-shadow: 0 1px 4px rgba(0,0,0,0.8);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const Btn = styled.a`
  padding: 0.75rem 2rem;
  border-radius: 4rem;
  background: ${({ theme }) => theme.accent};
  color: #000;
  font-weight: 600;
  transition: opacity 0.2s;
  &:hover { opacity: 0.8; }
`;

export default function Hero() {
  return (
    <Section>
      <Title>GroupSync: Plan. Split. Enjoy Together.</Title>
      <Subtitle>
        From restaurant checks to movie picks and backyard BBQs—your group’s new HQ.
      </Subtitle>
      <ButtonGroup>
        <Btn href="#signup">Get the App</Btn>
        <Btn href="#overview">Watch Overview</Btn>
      </ButtonGroup>
    </Section>
  );
}
