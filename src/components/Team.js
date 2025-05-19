import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 1rem;
  text-align:center;
  background: ${({theme})=>theme.bg};
`;
const Title = styled.h2`font-size:2rem; margin-bottom:2rem;`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  gap: 2rem;
  max-width:1000px; margin:0 auto;
`;
const Card = styled.div`
  background: #111;
  padding: 1.5rem;
  border-radius:.5rem;
  transition: transform .3s;
  &:hover { transform:translateY(-4px) }
`;
const Avatar = styled.img`
  width:80px; height:80px;
  border-radius:50%;
  object-fit:cover;
  margin-bottom:1rem;
`;
const Name = styled.h4`margin-bottom:.25rem;`;
const Role = styled.p`
  color: ${({theme})=>theme.sub};
  margin-bottom:.75rem;
`;
const Link = styled.a`
  font-size:.875rem;
  color: ${({theme})=>theme.accent};
  &:hover { text-decoration:underline; }
`;

const members = [
  { name:'Adrian Diac', role:'UI/UX Team Lead', img:'/team/adrian.jpeg', linkedin:'https://www.linkedin.com/in/adrian-diac-7381531a2/'},
  { name:'Cristian Mitu', role:'Product Lead', img:'/team/bob.jpg', linkedin:'https://www.linkedin.com/in/cristian-mitu-abb27523a/'},
  { name:'Vlad Calomfirescu', role:'Tech Lead', img:'/team/vlad.jpeg', linkedin:'https://www.linkedin.com/in/vlad-calomfirescu-7abb7324b/'},
  { name:'Anda-Ioana Popa', role:'Marketing Lead', img:'/team/anda.jpeg', linkedin:'https://www.linkedin.com/in/anda-ioana-popa-448673228/'},
];

export default function Team() {
  return (
    <Section>
      <Title>Meet the Team</Title>
      <Grid>
        {members.map((m,i)=>(
          <Card key={i}>
            <Avatar src={m.img} alt={m.name}/>
            <Name>{m.name}</Name>
            <Role>{m.role}</Role>
            <Link href={m.linkedin} target="_blank">LinkedIn</Link>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
