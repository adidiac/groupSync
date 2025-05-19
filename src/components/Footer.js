import React from 'react';
import styled from 'styled-components';

const FooterEl = styled.footer`
  padding:2rem 1rem;
  text-align:center;
  background: ${({theme})=>theme.bg};
  color: ${({theme})=>theme.sub};
`;
const Links = styled.div`
  display:flex;
  justify-content:center;
  gap:2rem;
  margin-bottom:1rem;
`;
const Link = styled.a`
  font-size:.875rem;
  &:hover { color: ${({theme})=>theme.accent}; }
`;
const Social = styled.div`
  display:flex;
  justify-content:center;
  gap:1rem;
  margin-bottom:1rem;
`;
const Copy = styled.p`font-size:.75rem;`;

export default function Footer() {
  return (
    <FooterEl>
      <Links>
        {['Features','Team','Privacy','Terms'].map((t,i)=>
          <Link key={i} href={`#${t.toLowerCase()}`}>{t}</Link>
        )}
      </Links>
      <Social>
        <Link href="#"><img src="/icons/facebook.svg" alt="F" /></Link>
        <Link href="#"><img src="/icons/twitter.svg" alt="T" /></Link>
        <Link href="#"><img src="/icons/instagram.svg" alt="I" /></Link>
      </Social>
      <Copy>© 2025 GroupSync. All rights reserved.</Copy>
    </FooterEl>
  );
}
