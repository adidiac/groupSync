import React, {useState} from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding:4rem 1rem;
  text-align:center;
  background: ${({theme})=>theme.bg};
`;
const Title = styled.h2`font-size:2rem; margin-bottom:2rem;`;
const Card  = styled.div`
  background: #111;
  padding:2rem;
  border-radius:.5rem;
  max-width:600px;
  margin:0 auto;
  position:relative;
`;
const Quote  = styled.p`
  font-style:italic;
  margin-bottom:1.5rem;
`;
const Author = styled.p`
  font-weight:600;
  margin-bottom:1.5rem;
`;
const NextBtn= styled.button`
  position:absolute;
  right:1rem; bottom:1rem;
  background:none; border:none;
  color: ${({theme})=>theme.accent};
  cursor:pointer;
`;

const data = [
  ["GroupSync turned our weekly movie night into a breeze.","Dana P. – Austin, TX"],
  ["Never again will I argue over the check!","Luis M. – Madrid, ES"],
];

export default function Testimonials() {
  const [i,setI]= useState(0);
  return (
    <Section>
      <Title>What People Say</Title>
      <Card>
        <Quote>“{data[i][0]}”</Quote>
        <Author>— {data[i][1]}</Author>
        <NextBtn onClick={()=>setI((i+1)%data.length)}>Next →</NextBtn>
      </Card>
    </Section>
  );
}
