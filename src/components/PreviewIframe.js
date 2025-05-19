// src/components/PreviewIframe.js
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  padding: 4rem 1rem;
  text-align: center;
  background: ${({ theme }) => theme.bg};
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.fg};
`;

const IframeWrapper = styled.div`
  display: inline-block;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 6px 24px rgba(0, 255, 213, 0.2);
`;

export default function PreviewIframe() {
  return (
    <Section>
      <Title>Live App Preview</Title>
      <IframeWrapper>
        <iframe
          title="GroupSync Uizard Preview"
          src="https://app.uizard.io/p/74444199/embed"
          width="375"
          height="687"
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
          allowFullScreen
        />
      </IframeWrapper>
    </Section>
  );
}
