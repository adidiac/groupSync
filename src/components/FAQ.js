import React, {useState} from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding:4rem 1rem;
  max-width:800px; margin:0 auto;
  background: ${({theme})=>theme.bg};
`;
const Title = styled.h2`
  text-align:center; font-size:2rem; margin-bottom:2rem;
`;
const Item = styled.div`
  border-bottom:1px solid #333;
  padding:1rem 0;
  cursor:pointer;
`;
const Q = styled.h4`
  position:relative; padding-right:1.5rem;
  &:after {
    content: '${p=>p.open? "–":"+"}';
    position:absolute; right:0; top:0;
  }
`;
const A = styled.div`
  max-height: ${p=>p.open?"200px":"0"};
  overflow:hidden;
  transition:max-height .3s ease;
  margin-top: ${p=>p.open?"0.5rem":"0"};
`;

const faqs = [
  ["How do I split a bill?","Just snapshot the receipt and assign items."],
  ["Is my data private?","Absolutely—you own and encrypt your data."],
  ["Can I sync across devices?","Yes—real-time syncing everywhere."],
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <Section>
      <Title>FAQ</Title>
      {faqs.map(([q,a],i)=>(
        <Item key={i} onClick={()=>setOpen(open===i?null:i)}>
          <Q open={open===i}>{q}</Q>
          <A open={open===i}><p>{a}</p></A>
        </Item>
      ))}
    </Section>
  );
}
