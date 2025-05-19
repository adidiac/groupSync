import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  width: 100vw; left: 50%; transform: translateX(-50%);
  display: flex; flex-wrap: wrap; align-items: center;
  padding: 4rem 1rem;
  background: ${({ theme }) => theme.bg};
`;

const Content = styled.div`
  flex: 1 1 400px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Media = styled.div`
  flex: 1 1 600px;
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 2.25rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.125rem;
  max-width: 640px;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.sub};
  line-height: 1.5;
`;

const Video = styled.video`
  width: 100%;
  max-width: 720px;
  border-radius: 0.75rem;
  box-shadow: 0 6px 24px rgba(0,255,213,0.2);
`;

const Btn = styled.button`
  margin-top: 1rem;
  padding: 0.75rem 2rem;
  border: none;
  background: ${({ theme }) => theme.accent};
  color: #000;
  border-radius: 2rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover { opacity: 0.8; }
`;

export default function FeatureBlock({ id, title, description, videoSrc }) {
  return (
    <Section id={id}>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Btn onClick={() => window.open(videoSrc, '_blank')}>
          Watch Full Demo
        </Btn>
      </Content>
      <Media>
        <Video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
      </Media>
    </Section>
  );
}
