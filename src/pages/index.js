// index.js: Homepage
// -------------------

import React from 'react';
import { Link } from 'gatsby';
import { Banner, TextWrapper, MoreText, SectionTwo } from '../styles/IndexStyles';


export default function Home() {
  return(
    <>
    <section style={{ position: 'relative' }}>
      <Banner></Banner>
      <TextWrapper>
        <div>
          <h2>GeekyHacker</h2>
          <p>One Stop for<br/>
          All your development<br/>
          And design needs</p>
          <Link to="/works">Our works</Link>
        </div>
      </TextWrapper>
      <MoreText>Learn more ...</MoreText>
  </section>
  <SectionTwo>
    <div>
      <h2>Our Passion</h2>
      <p>Most good programmers do programming not because they expect to get pais, but because it's fun to program.</p>
      <h5>- Linus Torvalds</h5>
    </div>
  </SectionTwo>
  );
}
