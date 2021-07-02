import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';

const FAQS = [
  {
    title: 'Why choose Aert?',
    content: () => (
      <>
        The team at Aert is well-versed in creating fast, responsive, and lightweight
        websites in a timely manner. This allows local businesses to accomodate for 
        as many users as soon as possible. At the same time, Aert offers competitive
        pricing and customer support.
      </>
    ),
  },
  {
    title: 'How does a website support my business?',
    content: () => (
      <>
        A website is the easiest way for customers to find, discover, and share about
        a business. A speedy and responsive website could be the next step to growth,
        outreach, and retention.
      </>
    ),
  },
  {
    title: 'How quickly can I get a site up?',
    content: () => (
      <>
        Aert's team is dedicated to our clients. However, the time it takes to design, 
        code, and deploy each site may vary. Contact us to find out how we can help!
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
