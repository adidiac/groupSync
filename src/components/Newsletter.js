import React, {useState} from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding:4rem 1rem;
  text-align:center;
  background: ${({theme})=>theme.bg};
`;
const Title = styled.h2`font-size:2rem; margin-bottom:1.5rem;`;
const Form  = styled.form`
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  gap:.5rem;
`;
const Input = styled.input`
  flex:1 1 200px;
  padding:.75rem 1rem;
  border:1px solid #333;
  border-radius:4rem 0 0 4rem;
  outline:none;
  background: #111;
  color: #fff;
`;
const Btn   = styled.button`
  padding:.75rem 1.5rem;
  border:none;
  background: ${({theme})=>theme.accent};
  color:#000;
  border-radius:0 4rem 4rem 0;
  cursor:pointer;
  transition:opacity .2s;
  &:hover { opacity:.8; }
`;

export default function Newsletter() {
  const [email,setEmail] = useState('');
  return (
    <Section>
      <Title>Stay in the Loop</Title>
      <Form onSubmit={e=>e.preventDefault()}>
        <Input
          type="email" placeholder="Your email address"
          value={email} onChange={e=>setEmail(e.target.value)}
        />
        <Btn type="submit">Subscribe</Btn>
      </Form>
    </Section>
  );
}
