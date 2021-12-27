import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';

const FAQS = [
  {
    title: 'Why choose Aert?',
    content: () => (
      <>
        The team at Aert is well-versed in creating fast, responsive, and lightweight
        software in a timely manner. This allows local businesses to accomodate for 
        as many users as soon as possible. At the same time, we offer competitive
        pricing and customer support.
      </>
    ),
  },
  {
    title: 'How can software support my business?',
    content: () => (
      <>
        Software can have many applications within your company. This can be in the 
        form of analytics, or even automation. Moreover, products like websites help get
        your brand recognized by your target market. Get in touch with us to learn more about 
        how our software can help you!
      </>
    ),
  },
  {
    title: 'How quickly can I get software produced?',
    content: () => (
      <>
        Aert's team is dedicated to our clients. However, the time it takes to design, 
        code, and deploy each project may vary. Contact us to find out how we can help!
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
