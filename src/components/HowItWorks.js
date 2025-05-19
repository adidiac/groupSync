import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 1rem;
  text-align: center;
  background: ${({theme})=>theme.bg};
`;
const Title = styled.h2`
  font-size: 2rem; margin-bottom: 2rem;
`;
const Steps = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;
const Step = styled.div`
  flex: 1 1 180px;
`;
const Icon = styled.div`
  font-size: 2.5rem;
  color: ${({theme})=>theme.accent};
  margin-bottom: .5rem;
`;
const Label = styled.h4`
  margin-bottom: .5rem;
`;
const Desc  = styled.p`
  color: ${({theme})=>theme.sub};
`;

export default function HowItWorks() {
  const steps = [
    ['👥','Create & Invite','Add members from contacts'],
    ['💬','Plan & Vote','Chat, propose, upvote/downvote'],
    ['🎉','Celebrate','Finalize & enjoy together'],
  ];
  return (
    <Section>
      <Title>How It Works</Title>
      <Steps>
        {steps.map(([icon, label, desc],i)=>(
          <Step key={i}>
            <Icon>{icon}</Icon>
            <Label>{label}</Label>
            <Desc>{desc}</Desc>
          </Step>
        ))}
      </Steps>
    </Section>
  );
}
